import type { Metadata } from 'next'
import {
  Clock, LayoutDashboard, ShieldCheck, Zap, Users, Activity, BedDouble, Car
} from 'lucide-react'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Urgent Care Center Construction — Houston, TX',
  description:
    'Qamar Construction builds urgent care facilities throughout Houston and the surrounding metro. Fast-track, turnkey design-build for new urgent care centers that need to open on schedule.',
  keywords: [
    'urgent care construction Houston',
    'urgent care facility builder Texas',
    'urgent care center contractor Houston',
    'build urgent care clinic Houston',
    'urgent care renovation Texas',
  ],
}

export default function UrgentCarePage() {
  return (
    <ServicePageTemplate
      tag="Urgent Care Facilities"
      heroTitle="Urgent Care Center |Construction| in Houston"
      heroSub="Speed to market matters in urgent care. Qamar delivers fast-track design-build for urgent care facilities — fully code-compliant, patient-ready, and built to handle high-volume walk-in traffic from day one."
      scopeHeading="Urgent Care Facilities We Build"
      scopeItems={[
        {
          icon: Clock,
          title: 'Freestanding Urgent Care Centers',
          description: 'Ground-up construction for standalone urgent care clinics with high-visibility retail locations and ADA-compliant patient access.',
        },
        {
          icon: LayoutDashboard,
          title: 'Multi-Room Treatment Facilities',
          description: 'High-capacity urgent care with 6–15+ treatment rooms, optimized triage flow, and separate waiting zones.',
        },
        {
          icon: Activity,
          title: 'Occupational Health Clinics',
          description: 'Employer-focused clinics with drug testing rooms, physical exam areas, and occupational therapy spaces.',
        },
        {
          icon: BedDouble,
          title: 'Observation & Extended Care',
          description: 'Hybrid urgent care with short-stay observation rooms and IV infusion areas for more complex same-day cases.',
        },
        {
          icon: Car,
          title: 'Retail/Strip Center Conversions',
          description: 'Turn vacant retail or commercial space into a fully operational urgent care center — a Qamar specialty.',
        },
        {
          icon: Zap,
          title: 'Urgent Care Expansions',
          description: 'Adding treatment rooms, expanding waiting areas, or opening a second location with consistent brand standards.',
        },
      ]}
      steps={[
        {
          number: '01',
          title: 'Site Assessment',
          description: 'We evaluate the chosen location for structural feasibility, utility access, ADA compliance, and zoning — before you sign the lease.',
        },
        {
          number: '02',
          title: 'Fast-Track Design',
          description: 'Urgent care requires speed. Our team produces permit-ready drawings on an accelerated timeline without sacrificing compliance.',
        },
        {
          number: '03',
          title: 'Permitting & Coordination',
          description: 'We manage all city permits, fire marshal approvals, and Texas DSHS requirements so nothing slows the build.',
        },
        {
          number: '04',
          title: 'Phased Construction',
          description: 'Where possible, we phase construction to allow partial operations or minimize disruption to adjacent tenants.',
        },
        {
          number: '05',
          title: 'Turnkey Opening',
          description: 'Certificate of occupancy, punch list complete, equipment installed — your urgent care center is ready to see patients.',
        },
      ]}
      features={[
        {
          title: 'Speed to Open',
          description: 'Every week of delay costs revenue. Our fast-track process is designed to get you open ahead of schedule.',
        },
        {
          title: 'High-Traffic Design',
          description: 'Waiting room sizing, intake flow, and parking access designed for urgent care volume patterns.',
        },
        {
          title: 'Retail-to-Medical Conversion',
          description: 'We specialize in converting shell retail space to fully functional urgent care — often faster than ground-up.',
        },
        {
          title: 'Imaging & Lab Ready',
          description: 'X-ray rooms with radiation shielding, dedicated lab spaces, and proper utility rough-ins from day one.',
        },
        {
          title: 'Full Code Compliance',
          description: 'Texas DSHS, local fire codes, NFPA 101, and ADA standards handled in full — no surprises at inspection.',
        },
        {
          title: 'Signage & Exterior',
          description: 'High-visibility exterior signage, canopy, and drive-up design to attract walk-in traffic from day one.',
        },
      ]}
      compliance="Urgent care construction in Texas requires coordination with the Texas DSHS Health Facility Licensing Program, local fire marshals, and ADA accessibility compliance. We manage the entire regulatory process."
    />
  )
}
