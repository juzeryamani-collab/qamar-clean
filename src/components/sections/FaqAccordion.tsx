'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface Faq {
  question: string
  answer: string
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-brand-border hover:border-brand-gold/50 transition-colors duration-200"
          style={{ background: 'linear-gradient(135deg, #18181c 0%, #1e1e23 100%)' }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
            aria-expanded={open === i}
          >
            <span className="font-oswald text-[15px] font-semibold text-brand-text group-hover:text-brand-gold transition-colors duration-200">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-brand-gold flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-6">
              <div
                className="h-px mb-4"
                style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.35), transparent)' }}
              />
              <p className="text-brand-muted text-sm font-lato leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
