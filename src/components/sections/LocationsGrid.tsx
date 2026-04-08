import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { houstonAreaLocations } from '@/lib/locations'

export default function LocationsGrid() {
  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="section-tag mx-auto">Service Area</span>
          <h2 className="section-heading">Serving Houston &amp; Surrounding Cities</h2>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto font-lato">
            We serve medical and dental facility clients throughout the Greater Houston area — up to 40 miles from the city center.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 mb-8">
          <MapPin className="w-5 h-5 text-brand-gold" />
          <span className="font-oswald text-brand-gold uppercase tracking-widest text-sm">Houston, TX — Primary Service Hub</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {houstonAreaLocations.filter(l => l.city !== 'Houston').map((loc) => (
            <div key={loc.city} className="bg-brand-bg border border-brand-border p-3 text-center hover:border-brand-gold transition-colors duration-200 group">
              <p className="font-oswald text-sm text-brand-text group-hover:text-brand-gold transition-colors">{loc.city}</p>
              <p className="text-brand-muted text-xs font-lato mt-0.5">{loc.distance}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/locations" className="text-brand-gold hover:text-brand-gold-hover text-sm font-oswald uppercase tracking-widest transition-colors underline underline-offset-4">
            View Full Service Area →
          </Link>
        </p>
      </div>
    </section>
  )
}
