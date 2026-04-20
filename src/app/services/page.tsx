import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import CtaBanner from '@/components/sections/CtaBanner'

const BASE = 'https://medicaldentaldesignbuild.com'

export const metadata: Metadata = {
  title: 'Healthcare Facility Construction Services — Medical, Dental & Urgent Care',
  description:
    'Qamar Construction offers turnkey design-build for medical clinics, dental offices, and urgent care centers in Houston, TX. One team. One contract. Full scope from design through certificate of occupancy.',
  alternates: { canonical: `${BASE}/services` },
  openGraph: { url: `${BASE}/services` },
}

const services = [
  {
    title: 'Medical Clinics',
    href: '/medical-clinics',
    tag: 'Most Requested',
    color: 'text-teal-400',
    borderHover: 'hover:border-teal-700',
    tagBg: 'bg-teal-900/40 text-teal-400',
    description:
      'Full-scope design and construction for primary care, specialty clinics, multi-physician practices, outpatient surgery centers, and diagnostic imaging facilities.',
    scope: [
      'Primary Care & Internal Medicine',
      'Multi-Physician Practices',
      'Specialty Clinics (Derm, Ortho, Oncology, Pediatrics)',
      'Outpatient Surgery Centers',
      'Diagnostic & Imaging Centers',
      'Telehealth & Hybrid Practices',
    ],
    included: [
      'ADA compliance built-in',
      'Medical-grade MEP systems',
      'HIPAA-ready spatial design',
      'Fast-track Houston permitting',
      'Equipment vendor coordination',
      'Texas DSHS compliance',
    ],
  },
  {
    title: 'Dental Clinics',
    href: '/dental-clinics',
    tag: '',
    color: 'text-blue-400',
    borderHover: 'hover:border-blue-700',
    tagBg: '',
    description:
      'Expert dental office construction with deep understanding of operatory layout, dental-grade plumbing, cabinetry, and major equipment supplier coordination.',
    scope: [
      'New Dental Practice Build-Outs',
      'Multi-Operatory Offices (4–20+)',
      'Specialty Dental (Ortho, Oral Surgery, Endo)',
      'Practice Expansions & Remodels',
      'Dental Lab Integration',
      'Digital Dentistry Suites',
    ],
    included: [
      'Operatory layout expertise',
      'Dental-grade vacuum & plumbing',
      'Amalgam separator installation',
      'Patterson, Henry Schein, Burkhart coordination',
      'Custom cabinetry & millwork',
      'OSHA-compliant sterilization rooms',
    ],
  },
  {
    title: 'Urgent Care Centers',
    href: '/urgent-care',
    tag: 'Fast-Track',
    color: 'text-red-400',
    borderHover: 'hover:border-red-700',
    tagBg: 'bg-red-900/40 text-red-400',
    description:
      'Fast-track construction for urgent care facilities — new builds, retail-to-medical conversions, and multi-location expansion for franchise and independent operators.',
    scope: [
      'Freestanding Urgent Care Centers',
      'Multi-Room Treatment Facilities',
      'Occupational Health Clinics',
      'Observation & Extended Care',
      'Retail / Strip Center Conversions',
      'Franchise Multi-Location Builds',
    ],
    included: [
      'Speed-to-open process',
      'X-ray room radiation shielding',
      'Texas DSHS outpatient registration',
      'High-traffic patient flow design',
      'Lab rough-ins & imaging coordination',
      'Exterior signage & canopy',
    ],
  },
]

const process = [
  { number: '01', title: 'Free Consultation', description: 'We assess your space, goals, and budget — before you sign your lease if needed.' },
  { number: '02', title: 'Design & Planning', description: 'Permit-ready architectural drawings optimized for patient flow and compliance.' },
  { number: '03', title: 'Permitting', description: 'All city permits, Texas DSHS, fire marshal, and inspections — managed in-house.' },
  { number: '04', title: 'Construction', description: 'Full MEP, specialty medical systems, finishes, and equipment coordination.' },
  { number: '05', title: 'Turnkey Delivery', description: 'Certificate of occupancy, punch list complete. Patient-ready from day one.' },
]

export default function ServicesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Qamar Construction Healthcare Facility Construction Services',
    description: 'Turnkey design-build services for medical clinics, dental offices, and urgent care centers in Houston, TX.',
    url: `${BASE}/services`,
    numberOfItems: 3,
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${BASE}${s.href}`,
      item: {
        '@type': 'Service',
        name: `${s.title} Construction`,
        url: `${BASE}${s.href}`,
        provider: {
          '@type': 'LocalBusiness',
          '@id': `${BASE}/#organization`,
          name: 'Qamar Construction',
        },
        areaServed: { '@type': 'State', name: 'Texas' },
        description: s.description,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative py-24 border-b border-brand-border overflow-hidden" style={{
        background: 'linear-gradient(112deg, #0a0a0d 0%, #141418 45%, #1a1a1e 100%)',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 3px), linear-gradient(112deg, #0a0a0d 0%, #141418 45%, #1a1a1e 100%)',
      }}>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="absolute -top-32 right-0 w-[40vw] h-[40vw] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-tag">Our Services</span>
          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text leading-tight max-w-3xl mt-2">
            Healthcare Construction{' '}
            <span className="text-brand-gold" style={{ textShadow: '0 0 40px rgba(201,168,76,0.35)' }}>
              Services
            </span>
          </h1>
          <p className="text-brand-muted mt-5 text-lg max-w-2xl font-lato leading-relaxed">
            Three specializations. One expert team. Turnkey design-build from consultation to certificate of occupancy — everything under one contract.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary" style={{ boxShadow: '0 4px 20px rgba(201,168,76,0.25)' }}>
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+18327669246" className="btn-outline">Call (832) 766-9246</a>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-24" style={{
        background: '#1a1a1e',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.009) 2px, rgba(255,255,255,0.009) 3px)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((s) => (
            <div key={s.href} className={`group border border-brand-border ${s.borderHover} transition-colors duration-200 overflow-hidden`}
              style={{ background: 'linear-gradient(135deg, #1c1c20 0%, #222227 100%)' }}>
              <div className="grid grid-cols-1 lg:grid-cols-3">

                {/* Left: header */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-brand-border flex flex-col justify-between">
                  <div>
                    {s.tag && (
                      <span className={`inline-block text-[10px] font-oswald uppercase tracking-widest px-2 py-1 mb-3 ${s.tagBg}`}>
                        {s.tag}
                      </span>
                    )}
                    <h2 className={`font-oswald text-3xl font-bold mb-3 ${s.color}`}>{s.title}</h2>
                    <p className="text-brand-muted font-lato text-sm leading-relaxed">{s.description}</p>
                  </div>
                  <Link href={s.href}
                    className="inline-flex items-center gap-2 text-brand-gold font-oswald text-xs uppercase tracking-widest mt-6 group-hover:gap-3 transition-all">
                    Full Service Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Middle: what we build */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-brand-border">
                  <p className="font-oswald text-xs uppercase tracking-widest text-brand-gold mb-4">Types We Build</p>
                  <ul className="space-y-2">
                    {s.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-brand-muted text-sm font-lato">
                        <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: what's included */}
                <div className="p-8">
                  <p className="font-oswald text-xs uppercase tracking-widest text-brand-gold mb-4">What&apos;s Included</p>
                  <ul className="space-y-2">
                    {s.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-brand-muted text-sm font-lato">
                        <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-y border-brand-border" style={{ background: '#111115' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="section-tag mx-auto">How It Works</span>
            <h2 className="section-heading">From Consultation to Opening Day</h2>
            <p className="text-brand-muted mt-4 max-w-xl mx-auto font-lato">
              Every Qamar Construction project follows a proven process that keeps your project on time, on budget, and on target.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((step, i, arr) => (
              <div key={step.number} className="relative border border-brand-border p-6 text-center hover:border-brand-gold transition-colors"
                style={{ background: 'linear-gradient(135deg, #1c1c20 0%, #222227 100%)' }}>
                {i < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-px w-4 h-px bg-brand-gold/30 z-10 -translate-y-1/2" />
                )}
                <div className="font-oswald text-4xl font-bold mb-2 leading-none"
                  style={{ color: 'rgba(201,168,76,0.15)' }}>
                  {step.number}
                </div>
                <h4 className="font-oswald text-sm font-semibold text-brand-text mb-2">{step.title}</h4>
                <p className="text-brand-muted text-xs font-lato leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
