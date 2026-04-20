import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Award, Users, MapPin, Phone } from 'lucide-react'
import CtaBanner from '@/components/sections/CtaBanner'

const BASE = 'https://medicaldentaldesignbuild.com'

export const metadata: Metadata = {
  title: 'About Qamar Construction — Houston Healthcare Facility Builder',
  description:
    'Learn about Qamar Construction, Houston\'s specialist in medical clinic, dental office, and urgent care facility construction. Over 20 years of commercial construction experience. Led by Zain Hassanali.',
  alternates: { canonical: `${BASE}/about` },
  openGraph: { url: `${BASE}/about` },
}

const values = [
  {
    icon: Shield,
    title: 'Healthcare-Only Focus',
    body: "We don't build warehouses, restaurants, or retail. Medical and dental facility construction is all we do — and that singular focus means every system, every detail, and every code requirement is second nature to our team.",
  },
  {
    icon: Award,
    title: 'One Team, One Contract',
    body: 'Design, permitting, and construction are handled by a single integrated team. No coordination gaps between separate architects, engineers, and contractors. One point of contact from consultation to opening day.',
  },
  {
    icon: Users,
    title: 'Built Around Your Practice',
    body: "We understand that your facility is the physical foundation of your patient experience. Every layout decision, every finish selection, and every MEP specification is made with your clinical workflow and patients' comfort in mind.",
  },
  {
    icon: MapPin,
    title: 'Houston Local Expertise',
    body: "We live and work in this market. Our deep relationships with Houston area permitting departments, inspectors, and subcontractors translate directly into faster timelines and fewer surprises on every project.",
  },
]

const stats = [
  { stat: '20+', label: 'Years Experience' },
  { stat: '40+', label: 'Healthcare Projects' },
  { stat: '40mi', label: 'Service Radius' },
  { stat: '100%', label: 'Code Compliant' },
]

export default function AboutPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zainudin Hassanali',
    alternateName: 'Zain Hassanali',
    jobTitle: 'President & Founder',
    worksFor: {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      name: 'Qamar Construction',
    },
    telephone: '+18327669246',
    email: 'contact@qamarconstruction.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Medical Clinic Construction',
      'Dental Office Construction',
      'Urgent Care Facility Construction',
      'Healthcare Design-Build',
      'Texas DSHS Medical Facility Licensing',
      'ADA Compliance',
      'Commercial Construction Management',
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE}/#organization`,
    name: 'Qamar Construction',
    url: BASE,
    logo: `${BASE}/logo.png`,
    foundingDate: '2008',
    description:
      'Turnkey design-build for medical clinics, dental offices, and urgent care centers in Houston, TX and surrounding areas. Licensed and insured.',
    telephone: '+18327669246',
    email: 'contact@qamarconstruction.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    founder: {
      '@type': 'Person',
      name: 'Zainudin Hassanali',
    },
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
    areaServed: 'Greater Houston Metropolitan Area, Texas',
    sameAs: [
      'https://www.facebook.com/qamarconstruction/',
      'https://www.linkedin.com/company/qamar-construction/',
      'https://www.yelp.com/biz/qamar-remodeling-and-construction-houston',
      'https://www.bbb.org/us/tx/houston/profile/remodeling/qamar-construction-0915-90020878',
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE}/about` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
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
          <span className="section-tag">About Us</span>
          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text leading-tight max-w-3xl mt-2">
            Houston&apos;s Dedicated{' '}
            <span className="text-brand-gold" style={{ textShadow: '0 0 40px rgba(201,168,76,0.35)' }}>
              Healthcare Builder
            </span>
          </h1>
          <p className="text-brand-muted mt-5 text-lg max-w-2xl font-lato leading-relaxed">
            Qamar Construction was built with one purpose: to be the most trusted healthcare facility construction company in the Greater Houston area. We don&apos;t chase every type of project — we master one.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-14 border-b border-brand-border" style={{
        background: 'linear-gradient(90deg, #111114 0%, #1c1c20 50%, #111114 100%)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-oswald text-4xl sm:text-5xl font-bold text-brand-gold mb-1"
                  style={{ textShadow: '0 0 30px rgba(201,168,76,0.25)' }}>
                  {s.stat}
                </div>
                <div className="font-oswald text-xs font-semibold text-brand-text uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-24" style={{
        background: '#1a1a1e',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.009) 2px, rgba(255,255,255,0.009) 3px)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="section-heading mb-6">Built From the Ground Up — Literally</h2>
              <div className="space-y-4 text-brand-muted font-lato leading-relaxed">
                <p>
                  Qamar Construction was founded by Zain Hassanali, a commercial construction professional with over 20 years of hands-on experience across the Texas market. After years of working on commercial projects of every type, Zain recognized an underserved need: healthcare practitioners in Houston couldn&apos;t find a contractor who truly understood the unique demands of medical facility construction.
                </p>
                <p>
                  General contractors could build the walls — but they didn&apos;t understand dental operatory plumbing, infection control HVAC requirements, medical gas systems, or how to navigate Texas DSHS licensing for outpatient facilities. Practitioners were left to bridge that knowledge gap themselves, coordinating between their contractor, their equipment vendor, and regulatory agencies — while also trying to build a practice.
                </p>
                <p>
                  Qamar Construction was the answer. We built a team that speaks both languages: construction and healthcare. Today, every project we take on benefits from that specialized expertise — and every client we work with gets to focus on what they do best while we handle everything else.
                </p>
              </div>
            </div>

            {/* Zain callout */}
            <div className="border border-brand-border p-8"
              style={{ background: 'linear-gradient(135deg, #1e1e22 0%, #232328 100%)' }}>
              <div className="w-16 h-16 flex items-center justify-center font-oswald font-bold text-2xl text-brand-bg bg-brand-gold mb-6">
                ZH
              </div>
              <h3 className="font-oswald text-2xl font-bold text-brand-text mb-1">Zain Hassanali</h3>
              <p className="text-brand-gold font-oswald text-sm uppercase tracking-widest mb-4">President &amp; Founder</p>
              <div className="w-12 h-0.5 mb-4" style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
              <p className="text-brand-muted font-lato text-sm leading-relaxed mb-6">
                &ldquo;Every medical facility we build represents someone&apos;s life&apos;s work — a doctor who spent years training, a dentist who built a patient base from scratch, an operator who invested everything into a new urgent care. We treat every project with the weight it deserves.&rdquo;
              </p>
              <div className="space-y-2">
                <a href="tel:+18327669246" className="flex items-center gap-3 text-brand-muted hover:text-brand-gold transition-colors text-sm font-lato">
                  <Phone className="w-4 h-4 text-brand-gold" /> (832) 766-9246
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-y border-brand-border" style={{ background: '#111115' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="section-tag">What We Stand For</span>
            <h2 className="section-heading">Our Principles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="group border border-brand-border hover:border-brand-gold transition-colors p-7"
                style={{ background: 'linear-gradient(135deg, #1a1a1e 0%, #1f1f24 100%)' }}>
                <div className="w-10 h-10 flex items-center justify-center border border-brand-border group-hover:border-brand-gold transition-colors mb-4"
                  style={{ background: '#141416' }}>
                  <Icon className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-oswald text-lg font-semibold text-brand-text mb-2">{title}</h3>
                <p className="text-brand-muted text-sm font-lato leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag mx-auto">What We Build</span>
          <h2 className="section-heading mb-4">Three Specializations. One Expert Team.</h2>
          <p className="text-brand-muted font-lato mb-10 max-w-xl mx-auto">
            Medical clinics, dental offices, and urgent care centers — all built by the same specialized team that knows healthcare construction inside and out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-clinics" className="btn-outline text-xs py-3 px-6">Medical Clinics</Link>
            <Link href="/dental-clinics" className="btn-outline text-xs py-3 px-6">Dental Clinics</Link>
            <Link href="/urgent-care" className="btn-outline text-xs py-3 px-6">Urgent Care</Link>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
