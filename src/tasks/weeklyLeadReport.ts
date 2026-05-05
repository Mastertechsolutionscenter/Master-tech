import { TaskConfig } from 'payload'

export const weeklyLeadReport: any = {
  slug: 'weeklyLeadReport',
  inputSchema: [
    {
      name: 'recipientEmail',
      type: 'email',
      required: true,
      defaultValue: 'info@mastertechsolutionscenter.com',
    },
  ],
  handler: async ({ payload, input }: any) => {
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

    // 1. Fetch leads from the last 7 days
    const leads = await payload.find({
      collection: 'leads',
      where: {
        createdAt: {
          greater_than: oneWeekAgo.toISOString(),
        },
      },
      limit: 1000,
    })

    if (leads.totalDocs === 0) {
      payload.logger.info('No new leads this week. Skipping email report.')
      return {
        output: {
          sent: false,
          message: 'No leads found for this period.',
        },
      }
    }

    // 2. Calculate some basic stats
    const totalLeads = leads.totalDocs
    const newLeads = leads.docs.filter((l: any) => l.status === 'new').length
    const locations = [...new Set(leads.docs.map((l: any) => l.location).filter(Boolean))]

    // 3. Prepare Email Content
    const emailHtml = `
      <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
        <h1 style="color: #A67C00;">Weekly Performance Report</h1>
        <p>Here is your lead summary for the period: <strong>${oneWeekAgo.toLocaleDateString()} - ${new Date().toLocaleDateString()}</strong></p>
        
        <div style="display: flex; gap: 20px; margin: 30px 0;">
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; flex: 1; text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #A67C00;">${totalLeads}</div>
            <div style="font-size: 12px; color: #666; text-transform: uppercase;">Total Leads</div>
          </div>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; flex: 1; text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #A67C00;">${newLeads}</div>
            <div style="font-size: 12px; color: #666; text-transform: uppercase;">New Inquiries</div>
          </div>
        </div>

        <h3 style="border-bottom: 2px solid #A67C00; padding-bottom: 5px;">Lead Locations</h3>
        <p>${locations.join(', ') || 'N/A'}</p>

        <h3 style="border-bottom: 2px solid #A67C00; padding-bottom: 5px; margin-top: 30px;">Recent Leads</h3>
        <table style="width: 100%; border-collapse: collapse;">
          ${leads.docs.slice(0, 5).map((l: any) => `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <strong>${l.firstname} ${l.lastname}</strong><br>
                <span style="font-size: 12px; color: #666;">${l.email}</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right; font-size: 12px;">
                ${l.status}
              </td>
            </tr>
          `).join('')}
        </table>

        <p style="margin-top: 30px;"><a href="${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/leads" style="background: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 14px;">View All Leads in CRM</a></p>
      </div>
    `

    // 4. Send the Email
    try {
        await payload.sendEmail({
            to: input.recipientEmail,
            subject: `📊 Master Tech Weekly Lead Report: ${totalLeads} New Inquiries`,
            html: emailHtml,
        })
        
        return {
            output: {
                sent: true,
                count: totalLeads,
            }
        }
    } catch (err) {
        payload.logger.error('Failed to send weekly lead report email', err)
        throw err
    }
  },
}
