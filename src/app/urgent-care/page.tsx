import type { Metadata } from 'next'
import { Clock, LayoutDashboard, Activity, BedDouble, Car, Zap } from 'lucide-react'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Urgent Care Center Construction — Houston, TX',
  description: 'Qamar Construction builds urgent care facilities throughout Houston and the surrounding metro. Fast-track, turnkey design-build for new urgent care centers that need to open on schedule.',
}

export default function UrgentCarePage() {
  return (
    <ServicePageTemplate
      tag="Urgent Care Facilities"
      slug="/urgent-care"
      heroImage="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1920&q=80"
      heroTitle="Urgent Care Center |Construction| in Houston"
      heroSub="Speed to market matters in urgent care. Qamar delivers fast-track design-build for urgent care facilities — fully code-compliant, patient-ready, and built to handle high-volume walk-in traffic from day one."
      scopeHeading="Urgent Care Facilities We Build"
      scopeItems={[
        { icon: Clock,          title: 'Freestanding Urgent Care Centers', description: 'Ground-up construction for standalone urgent care clinics with high-visibility retail locations and ADA-compliant patient access.' },
        { icon: LayoutDashboard,title: 'Multi-Room Treatment Facilities',  description: 'High-capacity urgent care with 6–15+ treatment rooms, optimized triage flow, and separate waiting zones.' },
        { icon: Activity,       title: 'Occupational Health Clinics',      description: 'Employer-focused clinics with drug testing rooms, physical exam areas, and occupational therapy spaces.' },
        { icon: BedDouble,      title: 'Observation & Extended Care',      description: 'Hybrid urgent care with short-stay observation rooms and IV infusion areas for more complex same-day cases.' },
        { icon: Car,            title: 'Retail / Strip Center Conversions',description: 'Turn vacant retail or commercial space into a fully operational urgent care center — a Qamar specialty.' },
        { icon: Zap,            title: 'Urgent Care Expansions',           description: 'Adding treatment rooms, expanding waiting areas, or opening a second location with consistent brand standards.' },
      ]}
      steps={[
        { number: '01', title: 'Site Assessment',      description: 'We evaluate the chosen location for structural feasibility, utility access, ADA compliance, and zoning — before you sign the lease.' },
        { number: '02', title: 'Fast-Track Design',    description: 'Urgent care requires speed. Our team produces permit-ready drawings on an accelerated timeline without sacrificing compliance.' },
        { number: '03', title: 'Permitting',           description: 'We manage all city permits, fire marshal approvals, and Texas DSHS requirements so nothing slows the build.' },
        { number: '04', title: 'Construction',         description: 'Phased where possible to allow partial operations or minimize disruption to adjacent tenants.' },
        { number: '05', title: 'Turnkey Opening',      description: 'Certificate of occupancy, punch list complete, equipment installed — your urgent care center is ready to see patients.' },
      ]}
      features={[
        { title: 'Speed to Open',              description: 'Every week of delay costs revenue. Our fast-track process is designed to get you open ahead of schedule.' },
        { title: 'High-Traffic Design',        description: 'Waiting room sizing, intake flow, and parking access designed for urgent care volume patterns.' },
        { title: 'Retail-to-Medical Conversion',description: 'We specialize in converting shell retail space to fully functional urgent care — often faster than ground-up.' },
        { title: 'Imaging & Lab Ready',        description: 'X-ray rooms with radiation shielding, dedicated lab spaces, and proper utility rough-ins from day one.' },
        { title: 'Full Code Compliance',       description: 'Texas DSHS, local fire codes, NFPA 101, and ADA standards handled in full — no surprises at inspection.' },
        { title: 'Signage & Exterior',         description: 'High-visibility exterior signage, canopy, and drive-up design to attract walk-in traffic from day one.' },
      ]}
      compliance="Urgent care construction in Texas requires coordination with the Texas DSHS Health Facility Licensing Program, local fire marshals, and ADA accessibility compliance. We manage the entire regulatory process."
      faqs={[
        {
          question: 'How long does it take to build an urgent care center in Houston?',
          answer: 'A retail-to-urgent-care conversion typically takes 3–5 months from permit issuance to certificate of occupancy. Ground-up construction runs 6–10 months. Qamar Construction specializes in fast-track urgent care builds — time to open is a core part of our process, and we consistently deliver ahead of schedule for Houston-area operators.',
        },
        {
          question: 'Can you convert a vacant retail or strip center space into an urgent care facility?',
          answer: "Yes — retail-to-medical conversion is one of Qamar's specialties. We evaluate the existing shell, assess HVAC, electrical, and plumbing infrastructure, and produce a full conversion scope including treatment rooms, triage, imaging, lab, and ADA-compliant patient flow. Most clients find conversion faster and more cost-effective than ground-up construction.",
        },
        {
          question: 'What permits are required to open an urgent care center in Texas?',
          answer: 'Urgent care centers in Texas require local building permits, a certificate of occupancy, fire marshal approval, and registration with the Texas Department of State Health Services (DSHS) as an outpatient health care facility. Qamar Construction manages all of these permits and agency submissions in-house so you never have to navigate the regulatory process alone.',
        },
        {
          question: 'How much does urgent care center construction cost in Houston?',
          answer: 'Urgent care construction in Houston ranges from $150–$300+ per square foot depending on treatment room count, imaging equipment, and finish level. A 3,000–5,000 sq ft facility with 8–10 treatment rooms and an x-ray room typically runs $450,000–$900,000. Qamar provides a detailed estimate after reviewing your space and program requirements.',
        },
        {
          question: 'Do you build urgent care centers for franchise or multi-location operators?',
          answer: "Yes. Qamar Construction works with both independent operators opening their first urgent care and regional franchise operators expanding across Houston. We understand brand standard requirements and can replicate layouts and finish packages across multiple sites with consistent quality and timeline.",
        },
        {
          question: 'Do urgent care facilities require radiation shielding for x-ray rooms?',
          answer: 'Yes. Texas DSHS requirements and federal standards mandate lead-lined or equivalent radiation shielding for any room housing x-ray or fluoroscopy equipment. Qamar designs and builds these rooms to meet all state and federal radiation protection standards, and we coordinate directly with your imaging equipment vendor to confirm shielding specifications before construction begins.',
        },
        {
          question: 'What is the ideal size for an urgent care center in Houston?',
          answer: 'Most successful urgent care centers in Houston range from 2,500 to 5,000 square feet, depending on anticipated patient volume and the number of treatment rooms. A typical 3,000–3,500 sq ft layout supports 8–10 treatment rooms with reception, triage, imaging, lab, and provider stations. High-volume operators or multi-service facilities may require 5,000–8,000 sq ft. Qamar Construction can evaluate any space and help you design a layout that maximizes your patient throughput per square foot.',
        },
        {
          question: 'What are the Texas DSHS requirements for urgent care centers?',
          answer: 'In Texas, urgent care centers that provide certain services (including IV therapy, x-ray, or extended observation) may need to register with the Texas Department of State Health Services (DSHS) as an outpatient health care facility. This triggers specific construction standards for room sizes, ventilation, plumbing fixtures, and finishes. Qamar Construction is experienced with DSHS outpatient facility requirements and builds to these standards from day one — avoiding costly retrofits at the end of the project.',
        },
        {
          question: 'How do I choose the right location for an urgent care center in the Houston area?',
          answer: 'The best urgent care locations in Houston share common characteristics: high-traffic retail corridors with easy in-and-out access, proximity to residential density, visible signage opportunities, and ample parking (minimum 5–6 spaces per 1,000 sq ft). Strip centers and inline retail spaces are ideal because patients associate urgent care with easy accessibility. Qamar Construction will evaluate any potential site before you sign a lease — assessing structural suitability for medical conversion, utility infrastructure, and ADA accessibility at no charge.',
        },
        {
          question: 'Can Qamar Construction build a second or third urgent care location that matches our existing design?',
          answer: "Yes. Multi-location consistency is a Qamar specialty. We document your first location's layout, finish specifications, signage standards, and MEP design so that every subsequent location delivers the same patient experience. Whether you're a franchise operator with national brand standards or an independent group expanding to a second site, we replicate quality and design with precision across every location.",
        },
      ]}
      testimonialsHeading="What Urgent Care Operators Are Saying"
      testimonials={[
        {
          quote: "We were converting an old retail space into a 10-room urgent care center and needed someone who could move fast. Zain from Qamar Construction had the permit drawings ready in two weeks and we were open in under four months. That's unheard of in this market.",
          name: 'Marcus Williams',
          title: 'Regional Director of Operations',
          practice: 'CareNow Urgent Care — Houston Metro',
          initials: 'MW',
        },
        {
          quote: "Qamar Construction handled our second urgent care location in Cypress from concept to certificate of occupancy. Zain was on-site regularly and kept the project on track. The x-ray room shielding and lab rough-ins were done perfectly the first time.",
          name: 'Dr. Fatima Al-Hassan',
          title: 'Physician Owner',
          practice: 'Quick Med Urgent Care — Cypress, TX',
          initials: 'FA',
        },
        {
          quote: "I brought Zain in to evaluate a strip center space and within a week he had a full scope, timeline, and budget ready. Qamar Construction's knowledge of urgent care-specific requirements — DSHS, fire marshal, ADA — saved us months of back-and-forth.",
          name: 'Derek Nguyen',
          title: 'Practice Administrator',
          practice: 'NextCare Urgent Care — Missouri City, TX',
          initials: 'DN',
        },
      ]}
    />
  )
}
