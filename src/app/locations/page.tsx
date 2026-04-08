import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { houstonAreaLocations } from '@/lib/locations'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Service Locations — Houston, Sugar Land, Katy, The Woodlands & More',
  description: 'Qamar Construction serves medical and dental facility clients throughout the Greater Houston metro — Sugar Land, Katy, The Woodlands, Pearland, League City, and 25+ more cities within 40 miles.',
}

export default function LocationsPage() {
  return (
    <>
      <section className="relative bg-brand-bg py-20 border-b border-brand-border overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute left-0 top-0 w-1 h-full bg-brand-gold" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-tag">Service Area</span>
          <h1 className="section-heading mt-2">Serving Houston &amp; <span className="text-brand-gold">Surrounding Communities</span></h1>
          <p className="text-brand-muted mt-4 max-w-2xl font-lato">Qamar Construction serves medical and dental facility clients throughout the entire Greater Houston metro area — up to 40 miles from downtown Houston.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-brand-gold rounded-full flex-shrink-0">
                <MapPin className="w-6 h-6 text-brand-bg" />
              </div>
              <div>
                <h2 className="font-oswald text-2xl font-bold text-brand-text">Houston, TX</h2>
                <p className="text-brand-muted text-sm font-lato">Primary Service Hub · Harris County</p>
              </div>
            </div>
            <div className="flex-1 md:border-l border-brand-border md:pl-8">
              <p className="text-brand-muted font-lato text-sm leading-relaxed max-w-2xl">Houston is our home. We&apos;ve built and renovated medical facilities across every Houston neighborhood — from the Texas Medical Center corridor to the outer suburbs. Our local knowledge means faster permitting, trusted subcontractor relationships, and no surprises on any site.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-tag">All Service Cities</span>
            <h2 className="section-heading">Cities We Serve</h2>
            <p className="text-brand-muted mt-4 font-lato max-w-xl">Don&apos;t see your city? Contact us — if you&apos;re within 40 miles of Houston, we likely serve your area.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {houstonAreaLocations.map((loc) => (
              <div key={loc.city} className="bg-brand-surface border border-brand-border p-5 hover:border-brand-gold transition-colors group">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-oswald text-base font-semibold text-brand-text group-hover:text-brand-gold transition-colors">{loc.city}</h3>
                    <p className="text-brand-muted text-xs font-lato mt-0.5">{loc.county} County</p>
                    <p className="text-brand-muted text-xs font-lato">{loc.distance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag mx-auto">Available Everywhere We Serve</span>
          <h2 className="section-heading mb-10">All Services. Every Location.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {[
              { label: 'Medical Clinics',     href: '/medical-clinics' },
              { label: 'Dental Clinics',      href: '/dental-clinics'  },
              { label: 'Urgent Care Centers', href: '/urgent-care'     },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center gap-2 bg-brand-bg border border-brand-border px-6 py-4 font-oswald text-sm text-brand-text hover:border-brand-gold hover:text-brand-gold transition-colors">
                {s.label} <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-2xl font-bold text-brand-text mb-6">Medical Facility Construction Across Greater Houston</h2>
          <div className="space-y-4 text-brand-muted font-lato text-sm leading-relaxed">
            <p>The Greater Houston metropolitan area is one of the fastest-growing healthcare markets in the United States. With a rapidly expanding population across Harris, Fort Bend, Brazoria, Galveston, and Montgomery counties, the demand for new medical clinics, dental offices, and urgent care facilities has never been higher.</p>
            <p>Qamar Construction is uniquely positioned to serve this market. Based in Houston, our team holds all required Texas contractor licenses, maintains deep relationships with local city permitting departments, and understands the specific healthcare construction requirements enforced by the Texas Department of State Health Services.</p>
            <p>From Sugar Land to Conroe, from Katy to Baytown — if you&apos;re building or renovating a medical facility in the Greater Houston area, Qamar Construction is your local expert. Contact us today for a free project consultation.</p>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">Start Your Project <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
