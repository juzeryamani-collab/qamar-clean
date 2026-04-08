'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/cn'

const serviceOptions = [
  'Medical Clinic Construction',
  'Dental Office Construction',
  'Urgent Care Facility',
  'Renovation / Remodel',
  'Other',
]

const timelineOptions = [
  'ASAP (within 3 months)',
  '3–6 months',
  '6–12 months',
  '12+ months / Planning phase',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Submission failed')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle className="w-14 h-14 text-brand-gold" />
        <h3 className="font-oswald text-2xl text-brand-text">Message Received!</h3>
        <p className="text-brand-muted font-lato max-w-sm">
          Thank you for reaching out. We&apos;ll review your project details and get back to you within 1 business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-brand-gold text-sm font-oswald uppercase tracking-widest hover:text-brand-gold-hover transition-colors underline underline-offset-4"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-oswald uppercase tracking-widest text-brand-muted mb-2">
            Full Name <span className="text-brand-gold">*</span>
          </label>
          <input
            name="name"
            required
            type="text"
            placeholder="Dr. Jane Smith"
            className="w-full bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-muted/50 px-4 py-3 text-sm font-lato focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-oswald uppercase tracking-widest text-brand-muted mb-2">
            Company / Practice
          </label>
          <input
            name="company"
            type="text"
            placeholder="ABC Medical Group"
            className="w-full bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-muted/50 px-4 py-3 text-sm font-lato focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-oswald uppercase tracking-widest text-brand-muted mb-2">
            Phone <span className="text-brand-gold">*</span>
          </label>
          <input
            name="phone"
            required
            type="tel"
            placeholder="(713) 555-0100"
            className="w-full bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-muted/50 px-4 py-3 text-sm font-lato focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-oswald uppercase tracking-widest text-brand-muted mb-2">
            Email <span className="text-brand-gold">*</span>
          </label>
          <input
            name="email"
            required
            type="email"
            placeholder="jane@abcmedical.com"
            className="w-full bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-muted/50 px-4 py-3 text-sm font-lato focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-oswald uppercase tracking-widest text-brand-muted mb-2">
            Service Needed <span className="text-brand-gold">*</span>
          </label>
          <select
            name="service"
            required
            defaultValue=""
            className="w-full bg-brand-bg border border-brand-border text-brand-text px-4 py-3 text-sm font-lato focus:outline-none focus:border-brand-gold transition-colors appearance-none"
          >
            <option value="" disabled>Select a service…</option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-oswald uppercase tracking-widest text-brand-muted mb-2">
            Project Timeline
          </label>
          <select
            name="timeline"
            defaultValue=""
            className="w-full bg-brand-bg border border-brand-border text-brand-text px-4 py-3 text-sm font-lato focus:outline-none focus:border-brand-gold transition-colors appearance-none"
          >
            <option value="" disabled>Select timeline…</option>
            {timelineOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-oswald uppercase tracking-widest text-brand-muted mb-2">
          Project Description
        </label>
        <textarea
          name="description"
          rows={4}
          placeholder="Describe your project — location, square footage, special requirements, budget range, etc."
          className="w-full bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-muted/50 px-4 py-3 text-sm font-lato focus:outline-none focus:border-brand-gold transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-900/20 border border-red-500/30 px-4 py-3 text-red-400 text-sm font-lato">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          'btn-primary w-full justify-center',
          status === 'loading' && 'opacity-70 cursor-not-allowed'
        )}
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
