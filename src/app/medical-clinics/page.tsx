import type { Metadata } from 'next'
import { Stethoscope, FlaskConical, Users, Bed, ClipboardList, Zap } from 'lucide-react'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Medical Clinic Construction & Renovation — Houston, TX',
  description: 'Qamar Construction builds and renovates medical clinics in Houston and surrounding areas. Turnkey design-build for primary care, specialty clinics, and multi-physician practices.',
}

export default function MedicalClinicsPage() {
  return (
    <ServicePageTemplate
      tag="Medical Clinics"
      heroTitle="Medical Clinic Construction &amp; |Renovation| in Houston"
      heroSub="From primary care to specialty practices — Qamar handles full-scope design, permitting, and construction for medical clinic facilities of any size across the Greater Houston area."
      scopeHeading="Types of Medical Clinics We Build"
      scopeItems={[
        { icon: Stethoscope,  title: 'Primary Care Clinics',        description: 'Efficient, patient-friendly layouts for family medicine, internal medicine, and general practice offices.' },
        { icon: Users,        title: 'Multi-Physician Practices',   description: 'Scalable floor plans that accommodate multiple providers, shared clinical spaces, and future expansion.' },
        { icon: FlaskConical, title: 'Specialty Clinics',           description: 'Custom build-outs for dermatology, orthopedics, oncology, pediatrics, and other medical specialties.' },
        { icon: Bed,          title: 'Outpatient Surgery Centers',  description: 'Surgical-grade construction with specialized mechanical, electrical, and infection control requirements.' },
        { icon: ClipboardList,title: 'Diagnostic & Imaging Centers',description: 'Radiation shielding, specialized equipment pads, and lead-lined rooms for radiology and imaging facilities.' },
        { icon: Zap,          title: 'Telehealth & Hybrid Practices',description: "Modern exam rooms and tech-integrated consultation spaces for today's hybrid care delivery models." },
      ]}
      features={[
        { title: 'ADA Compliance Built-In',    description: 'Every design fully meets ADA accessibility standards for patient entrances, exam rooms, and restrooms.' },
        { title: 'Medical-Grade MEP Systems',  description: 'Specialized mechanical, electrical, and plumbing systems engineered for medical equipment loads and infection control.' },
        { title: 'Patient Flow Optimization',  description: 'Layouts designed to reduce bottlenecks, separate check-in/check-out, and maximize provider efficiency.' },
        { title: 'Fast-Track Permitting',      description: 'We manage all Houston city permits, zoning, and inspections — reducing delays so you open sooner.' },
        { title: 'HIPAA-Ready Design',         description: 'Privacy screens, soundproofing, and spatial layouts that support HIPAA compliance from the ground up.' },
        { title: 'Equipment Coordination',     description: 'We work directly with medical equipment vendors to ensure utilities, blocking, and clearances are exactly right.' },
      ]}
      compliance="We build to Texas DSHS standards, local Houston building codes, NFPA 101 Life Safety Code, and coordinate with equipment vendors on utility rough-ins. Every project is delivered permit-ready."
    />
  )
}
