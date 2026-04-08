import type { Metadata } from 'next'
import { Columns2, Settings, Droplets, Zap, LayoutGrid, Ruler, Smile } from 'lucide-react'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Dental Office Construction & Design — Houston, TX',
  description: 'Qamar Construction specializes in dental office construction and renovation across Houston and surrounding areas. Expert design-build for new practices, expansions, and full remodels.',
}

export default function DentalClinicsPage() {
  return (
    <ServicePageTemplate
      tag="Dental Clinics"
      heroImage="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1920&q=80"
      heroTitle="Dental Office Construction &amp; |Design| in Houston"
      heroSub="We build dental practices from the ground up — understanding operatory layout, plumbing, cabinetry, and dental equipment requirements that standard contractors simply don't know."
      scopeHeading="Dental Facility Types We Build"
      scopeItems={[
        { icon: Smile,     title: 'New Dental Practices',      description: 'Complete shell-to-open construction for first-time practice owners launching their own clinic.' },
        { icon: LayoutGrid,title: 'Multi-Operatory Offices',   description: 'High-volume practices with 4–20+ operatories, optimized for efficiency, patient comfort, and staff workflow.' },
        { icon: Settings,  title: 'Specialty Dental Clinics',  description: 'Orthodontics, oral surgery, endodontics, periodontics, and pediatric dentistry with specialty-specific layouts.' },
        { icon: Columns2,  title: 'Practice Expansions',       description: 'Adding operatories, sterilization rooms, consultation areas, or a second location — we handle the full scope.' },
        { icon: Ruler,     title: 'Full Remodels',             description: 'Modernizing an outdated office with updated cabinetry, new operatory configurations, and refreshed aesthetics.' },
        { icon: Droplets,  title: 'Dental Lab Integration',    description: 'In-house lab spaces with specialized ventilation, plumbing, and work surface requirements for digital dentistry.' },
      ]}
      features={[
        { title: 'Operatory Layout Expertise', description: "Chair placement, cabinetry height, assistant reach zones, and utility rough-ins spec'd precisely for dental delivery." },
        { title: 'Dental-Grade Plumbing',      description: 'Vacuum lines, air/water delivery, amalgam separators, and central water filtration — installed correctly the first time.' },
        { title: 'Sterilization Room Design',  description: 'Workflow-optimized central sterile areas with proper dirty-to-clean flow, autoclave positioning, and OSHA compliance.' },
        { title: 'Cabinetry & Millwork',       description: 'Custom dental cabinetry, built-in storage, and reception counters finished to match your brand and aesthetics.' },
        { title: 'Electrical for Equipment',   description: 'Dedicated circuits for chairs, imaging units, sterilizers, compressors, and suction systems — fully coordinated.' },
        { title: 'Patient Experience Design',  description: 'Reception, consultation rooms, and operatory design focused on reducing dental anxiety and building patient trust.' },
      ]}
      compliance="We coordinate with dental equipment suppliers (Patterson, Henry Schein, Burkhart, etc.) to ensure all rough-in dimensions, utility specs, and clearances meet manufacturer requirements. ADA compliant throughout."
      testimonialsHeading="What Houston Dentists Are Saying"
      testimonials={[
        {
          quote: "Zain at Qamar Construction understood dental operatory layout better than any contractor I'd spoken to. The plumbing rough-ins, air lines, and cabinetry blocking were all perfectly placed. My Patterson rep was impressed — and they've seen a lot of builds.",
          name: 'Dr. Lena Tran',
          title: 'Owner & General Dentist',
          practice: 'Tran Family Dental — Sugar Land, TX',
          initials: 'LT',
        },
        {
          quote: "We opened our second location in The Woodlands and Qamar handled the full build-out. Eight operatories, a central sterile room, digital imaging suite — all done on time and on budget. Zain kept us updated every step of the way.",
          name: 'Dr. Ahmed Farooq',
          title: 'Owner',
          practice: 'Farooq Orthodontics — The Woodlands, TX',
          initials: 'AF',
        },
        {
          quote: "As a first-time practice owner, I was nervous about the build process. Zain walked me through everything — from the lease review to the final punch list. Qamar Construction made opening my own dental office feel manageable.",
          name: 'Dr. Samantha Cole',
          title: 'Owner & Pediatric Dentist',
          practice: 'Bright Smiles Pediatric Dentistry — Pearland, TX',
          initials: 'SC',
        },
      ]}
    />
  )
}
