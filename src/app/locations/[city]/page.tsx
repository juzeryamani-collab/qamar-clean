import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { cityPagesData, cityPageSlugs } from '@/lib/city-pages'
import CtaBanner from '@/components/sections/CtaBanner'
import FaqAccordion from '@/components/sections/FaqAccordion'

const BASE = 'https://medicaldentaldesignbuild.com'

export function generateStaticParams() {
  return cityPageSlugs.map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city: slug } = await params
  const data = cityPagesData[slug]
  if (!data) return {}
  return {
    title: `Medical & Dental Facility Construction in ${data.city}, TX`,
    description: `Qamar Construction builds medical clinics, dental offices, and urgent care centers in ${data.city}, TX. Turnkey design-build serving ${data.county} County and Greater Houston.`,
    alternates: { canonical: `${BASE}/locations/${slug}` },
    openGraph: {
      url: `${BASE}/locations/${slug}`,
    },
  }
}

const services = [
  { label: 'Medical Clinics', href: '/medical-clinics', color: 'text-teal-400', border: 'hover:border-teal-700' },
  { label: 'Dental Clinics', href: '/dental-clinics', color: 'text-blue-400', border: 'hover:border-blue-700' },
  { label: 'Urgent Care Centers', href: '/urgent-care', color: 'text-red-400', border: 'hover:border-red-700' },
]

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city: slug } = await params
  const data = cityPagesData[slug]
  if (!data) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${BASE}/locations` },
      { '@type': 'ListItem', position: 3, name: data.city, item: `${BASE}/locations/${slug}` },
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GeneralContractor'],
    name: 'Qamar Construction',
    description: `Turnkey medical clinic, dental office, and urgent care construction in ${data.city}, TX. Licensed and insured healthcare facility builder.`,
    url: BASE,
    telephone: '+18327669246',
    email: 'contact@qamarconstruction.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.city,
      addressRegion: data.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.lat,
      longitude: data.lng,
    },
    areaServed: {
      '@type': 'City',
      name: data.city,
      containedInPlace: { '@type': 'State', name: 'Texas' },
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: data.lat, longitude: data.lng },
      geoRadius: '64373',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative py-24 border-b border-brand-border overflow-hidden" style={{
        background: 'linear-gradient(112deg, #0a0a0d 0%, #141418 45%, #1a1a1e 100%)',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 3px), linear-gradient(112deg, #0a0a0d 0%, #141418 45%, #1a1a1e 100%)',
      }}>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="absolute -top-32 right-0 w-[40vw] h-[40vw] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-brand-muted text-xs font-lato mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-brand-gold transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-brand-gold">{data.city}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-brand-gold" />
            <span className="section-tag" style={{ marginBottom: 0 }}>{data.county} County, TX</span>
          </div>
          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text leading-tight max-w-3xl mt-2">
            Medical &amp; Dental Construction in{' '}
            <span className="text-brand-gold" style={{ textShadow: '0 0 40px rgba(201,168,76,0.35)' }}>
              {data.city}
            </span>
          </h1>
          <p className="text-brand-muted mt-5 text-lg max-w-2xl font-lato leading-relaxed">{data.description}</p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary" style={{ boxShadow: '0 4px 20px rgba(201,168,76,0.25)' }}>
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+18327669246" className="btn-outline">Call (832) 766-9246</a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 border-b border-brand-border" style={{ background: '#111115' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 p-5 border border-brand-border"
                style={{ background: 'linear-gradient(135deg, #1a1a1e 0%, #1f1f24 100%)' }}>
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <p className="text-brand-muted text-sm font-lato leading-snug">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="py-24" style={{
        background: '#1a1a1e',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.009) 2px, rgba(255,255,255,0.009) 3px)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-tag">All Services Available in {data.city}</span>
            <h2 className="section-heading">What We Build in {data.city}, TX</h2>
            <p className="text-brand-muted mt-4 max-w-xl font-lato">
              Every Qamar Construction service is available throughout {data.city} and {data.county} County — same team, same expertise, same turnkey delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href}
                className={`group border border-brand-border ${s.border} p-8 transition-all duration-200 hover:shadow-xl`}
                style={{ background: 'linear-gradient(135deg, #1c1c20 0%, #222227 100%)' }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h3 className={`font-oswald text-xl font-semibold mb-3 ${s.color}`}>{s.label}</h3>
                <p className="text-brand-muted text-sm font-lato leading-relaxed mb-6">
                  Full-scope design-build for {s.label.toLowerCase()} in {data.city}, TX. One team, one contract, turnkey delivery.
                </p>
                <div className="flex items-center gap-2 text-brand-gold text-xs font-oswald uppercase tracking-widest group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-y border-brand-border" style={{
        background: 'linear-gradient(180deg, #0e0e12 0%, #131317 100%)',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 3px), linear-gradient(180deg, #0e0e12 0%, #131317 100%)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <span className="section-tag">FAQ</span>
              <h2 className="section-heading mb-4">{data.city} Questions</h2>
              <p className="text-brand-muted text-sm font-lato leading-relaxed">
                Have more questions about building in {data.city}? Call us at{' '}
                <a href="tel:+18327669246" className="text-brand-gold hover:text-brand-gold-hover transition-colors">
                  (832) 766-9246
                </a>{' '}
                or{' '}
                <a href="https://wa.me/18327669246" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-gold-hover transition-colors">
                  WhatsApp us
                </a>.
              </p>
            </div>
            <div className="lg:col-span-2">
              <FaqAccordion faqs={data.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact callout */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag mx-auto">Serving {data.city}, TX</span>
          <h2 className="section-heading mb-4">Ready to Build in {data.city}?</h2>
          <p className="text-brand-muted font-lato mb-8 max-w-xl mx-auto">
            Qamar Construction serves the entire {data.city} area within our 40-mile Houston service radius.
            Contact us today for a free project consultation and estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+18327669246" className="btn-outline">
              <Phone className="w-4 h-4" /> (832) 766-9246
            </a>
          </div>
          <p className="text-brand-muted text-xs font-lato mt-6">
            Also serving: {Object.values(cityPagesData)
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link key={c.slug} href={`/locations/${c.slug}`} className="text-brand-gold hover:text-brand-gold-hover transition-colors">
                  {c.city}
                </Link>
              ))
              .reduce<React.ReactNode[]>((acc, el, i) => (i === 0 ? [el] : [...acc, ', ', el]), [])}
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
