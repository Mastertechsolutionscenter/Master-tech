'use server'

import nodemailer from 'nodemailer'
import { getArcjet } from '@/lib/arcjetInstance'
import { request } from '@arcjet/next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

// ... (rest of code)

interface FormDataType {
  firstname: string
  lastname: string
  email: string
  location: string
  message: string
}

function parseFormData(formData: FormData): FormDataType {
  return Object.fromEntries(formData.entries()) as unknown as FormDataType
}

export async function sendEmailAction(formData: FormData) {
  try {
    const req = await request()
    
    // Use scoped Arcjet for form protection
    if (process.env.ARCJET_KEY) {
      const aj = getArcjet({ isForm: true })
      const decision = await aj.protect(req)
      if (decision.isDenied()) {
        throw new Error('Forbidden request')
      }
    }

    const data = parseFormData(formData)

    // 1. Save to Payload CMS Database (Lead Management)
    let leadId = null
    try {
      const payload = await getPayload({ config: configPromise })
      const lead = await payload.create({
        collection: 'leads' as any,
        data: {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          location: data.location,
          message: data.message,
          status: 'new',
        },
      })
      leadId = lead.id
      console.log('Lead saved successfully:', leadId)
    } catch (dbError) {
      console.error('Failed to save lead to database:', dbError)
      // If DB fails, we still want to try sending the email if possible
    }

    // 2. Send Email Notifications
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      // A. Internal notification to the Master Tech team
      await transporter.sendMail({
        from: {
          name: `Master Tech Lead: ${data.firstname}`,
          address: process.env.SMTP_USER || 'info@mastertechsolutionscenter.com',
        },
        to: 'info@mastertechsolutionscenter.com',
        replyTo: data.email,
        subject: `🚀 New Inquiry: ${data.firstname} ${data.lastname}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #A67C00;">New Business Inquiry</h2>
            <p><strong>Name:</strong> ${data.firstname} ${data.lastname}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f4f4f4; padding: 15px; border-left: 5px solid #A67C00;">
              ${data.message.replace(/\n/g, '<br>') || 'No message provided.'}
            </blockquote>
            ${leadId ? `<p style="margin-top: 20px;"><a href="${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/admin/collections/leads/${leadId}" style="background: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View in Admin Panel</a></p>` : ''}
          </div>
        `,
      })

      // B. Professional "Thank You" email to the client
      await transporter.sendMail({
        from: {
          name: 'Master Tech Solutions Center',
          address: process.env.SMTP_USER || 'info@mastertechsolutionscenter.com',
        },
        to: data.email,
        subject: `Thank you for your inquiry, ${data.firstname}!`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #A67C00;">Master Tech Solutions Center</h1>
            <p>Hi ${data.firstname},</p>
            <p>Thank you for reaching out to us. We have received your inquiry and our team is already reviewing your request.</p>
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>A consultant will review your project details.</li>
              <li>We will reach out to schedule a brief discovery call.</li>
              <li>You'll receive a custom proposal tailored to your needs.</li>
            </ul>
            <p>If you have any urgent questions, feel free to reply to this email or reach us via WhatsApp.</p>
            <p style="margin-top: 30px;">Best regards,<br><strong>Master Tech Solutions Team</strong><br>Nairobi, Kenya</p>
          </div>
        `,
      })

      console.log('Notifications sent successfully')
    } catch (emailError) {
      console.error('Email notification failed but lead was captured:', emailError)
      // We don't throw here so the user doesn't see a 500 error if the lead was at least saved
      if (!leadId) throw new Error('Both Database and Email failed')
    }

    return { success: true }
  } catch (error) {
    console.error('Final action failure:', error)
    throw new Error('Form submission failed')
  }
}
