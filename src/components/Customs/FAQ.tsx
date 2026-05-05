'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "Do you provide M-Pesa integration for e-commerce sites?",
    answer: "Yes, we specialize in seamless M-Pesa integration for both local and international e-commerce platforms, enabling secure and instant mobile payments for your customers in Kenya."
  },
  {
    question: "What industries do you serve with your custom software?",
    answer: "We serve a wide range of industries across East Africa, including Retail, Logistics, Healthcare, Finance, and Agriculture, providing tailored ERP, CRM, and inventory management systems."
  },
  {
    question: "How long does it take to develop a custom website or app?",
    answer: "Project timelines vary depending on complexity. A standard business website can take 2-4 weeks, while complex enterprise platforms or mobile applications typically range from 2 to 6 months."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Absolutely. We provide comprehensive maintenance packages that include security updates, performance monitoring, and ongoing technical support to ensure your digital systems remain robust."
  },
  {
    question: "Is your software SEO-optimized for the Kenyan market?",
    answer: "Yes, all our web solutions are built with a focus on hyperlocal SEO to ensure your business ranks highly in Nairobi and across Kenya for relevant industry keywords."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#A67C00]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                <span className="text-lg font-semibold text-black dark:text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="size-5 text-[#A67C00]" />
                ) : (
                  <Plus className="size-5 text-[#A67C00]" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
