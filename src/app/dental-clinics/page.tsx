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
      slug="/dental-clinics"
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
      faqs={[
        {
          question: 'How much does dental office construction cost in Houston?',
          answer: 'Dental office construction in Houston typically ranges from $100–$250 per square foot depending on the number of operatories, cabinetry quality, and specialty requirements. A 4-operatory general dentistry office generally runs $250,000–$450,000. Specialty offices (oral surgery, orthodontics) with custom equipment and higher-end finishes run more. Qamar provides a detailed estimate after reviewing your space and equipment plans.',
        },
        {
          question: 'How long does dental office construction take?',
          answer: 'A standard dental office build-out takes 3–5 months from permit issuance to opening day. Complex multi-operatory or specialty dental offices may take 5–7 months. Qamar Construction manages permitting and construction sequencing to minimize your timeline and keep your opening date on track.',
        },
        {
          question: 'Do you coordinate with dental equipment suppliers like Patterson or Henry Schein?',
          answer: 'Yes — and this is one of our key differentiators. We work directly with Patterson Dental, Henry Schein, Burkhart, and other major suppliers to confirm rough-in dimensions, vacuum line locations, air and water delivery positions, and electrical panel requirements before walls close. This prevents costly change orders during equipment installation.',
        },
        {
          question: 'Can you convert an existing commercial space into a dental office?',
          answer: 'Yes. Converting retail, medical, or office space into a dental office is a Qamar specialty. We assess the existing mechanical, electrical, and plumbing infrastructure, identify what needs to be upgraded, and produce a full scope that maximizes reuse and minimizes cost. Many dentists find conversion faster and more affordable than ground-up construction.',
        },
        {
          question: 'What is a dental operatory and how many can you build?',
          answer: 'A dental operatory is a fully equipped patient treatment room — each requires dedicated plumbing (air, water, vacuum, drain), electrical circuits for the chair and lighting, and custom cabinetry. Qamar Construction has built single-operatory suites up to 20+ operatory group practices, with layouts optimized for staff workflow and patient throughput.',
        },
        {
          question: 'Do your dental office builds meet ADA and OSHA requirements?',
          answer: "Yes. Every dental office Qamar builds is fully ADA compliant — including accessible entrances, treatment rooms, and restrooms. We also design central sterilization areas to meet OSHA bloodborne pathogen standards with proper dirty-to-clean workflow separation. These aren't add-ons — they're built into every scope from day one.",
        },
        {
          question: 'What is the best floor plan layout for a multi-operatory dental office?',
          answer: "The best dental office layout depends on the number of operatories, the doctor-to-assistant ratio, and patient volume. Common configurations include a central hallway with operatories on both sides (efficient for high volume), a pod layout grouping 2–4 chairs around a central sterilization core (ideal for multi-doctor practices), and a modified open-bay design for specialty practices like pediatric dentistry. Qamar Construction designs operatory layouts that maximize the provider's efficiency and minimize patient travel distances — both of which directly impact your daily production.",
        },
        {
          question: 'How far in advance should I contact Qamar Construction before my dental lease starts?',
          answer: "Ideally 4–6 months before your target opening date. Here's why: permit drawings take 3–4 weeks, city plan review takes 4–8 weeks (sometimes more in Houston), and construction takes 3–5 months. If you wait until after signing your lease to start planning, you risk delayed opening and paying rent on a space that isn't built yet. Qamar Construction can often begin preliminary planning and space evaluation before your lease executes — contact us as early as possible.",
        },
        {
          question: 'What is an amalgam separator and is it required in my dental office?',
          answer: "An amalgam separator is a plumbing device that captures mercury-containing amalgam waste before it enters the sewer system. The EPA requires amalgam separators in virtually all dental practices that place or remove amalgam restorations. Qamar Construction installs compliant amalgam separators as a standard part of all dental office plumbing rough-ins — it's included in our scope, not a costly add-on discovered during inspection.",
        },
        {
          question: 'Can Qamar Construction build a dental office in a medical office building in Houston?',
          answer: "Yes. We frequently build dental offices within medical office buildings (MOBs), retail centers, and professional office parks throughout Houston. We coordinate directly with building management on tenant improvement allowances, utility connections, and landlord design requirements. Many MOBs have existing dental-friendly infrastructure — we evaluate this during our initial site assessment to identify opportunities to reduce your build-out cost.",
        },
      ]}
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
