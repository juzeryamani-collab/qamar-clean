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
