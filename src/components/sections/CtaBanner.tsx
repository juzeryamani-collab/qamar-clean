import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Props { heading?: string; sub?: string }

export default function CtaBanner({
  heading = 'Ready to Build Your Medical Facility?',
  sub = 'Contact us today for a free consultation and project estimate.',
}: Props) {
  return (
    <section className="bg-brand-gold py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-brand-bg leading-tight">{heading}</h2>
          <p className="text-brand-bg/75 mt-2 font-lato text-sm">{sub}</p>
        </div>
        <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-bg text-brand-gold px-8 py-4 font-oswald uppercase tracking-widest text-sm font-semibold hover:bg-brand-surface transition-colors duration-200">
          Request a Free Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
