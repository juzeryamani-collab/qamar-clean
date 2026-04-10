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
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
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
      faqs={[
        {
          question: 'How much does medical clinic construction cost in Houston?',
          answer: 'Medical clinic construction in Houston typically ranges from $80–$200+ per square foot for tenant improvement build-outs, depending on complexity. A 2,000–5,000 sq ft primary care clinic generally runs $200,000–$700,000. Specialty clinics with imaging suites, surgical rooms, or complex MEP systems cost more. Qamar Construction provides a detailed, itemized estimate after a free consultation — call (832) 766-9246.',
        },
        {
          question: 'How long does it take to build a medical clinic in Houston?',
          answer: 'Most medical clinic build-outs take 3–6 months from permit approval to certificate of occupancy. The timeline depends on scope, existing conditions, and permit complexity. Ground-up construction runs 8–14 months. Qamar Construction manages the full permitting process to minimize delays and get your practice open as fast as possible.',
        },
        {
          question: 'Do you handle permits and inspections for medical facilities?',
          answer: 'Yes. Qamar Construction manages all city building permits, Texas DSHS requirements, fire marshal inspections, and zoning approvals in-house. We have deep experience navigating Houston medical facility permitting and handle everything so you never have to coordinate with multiple agencies.',
        },
        {
          question: 'What is included in a turnkey medical clinic build?',
          answer: 'Our turnkey service covers everything from initial design and space planning through permitting, full construction, MEP systems (mechanical, electrical, plumbing), cabinetry, finishes, and final inspections. You receive a certificate of occupancy and a patient-ready facility — one contract, one team, zero hand-off friction.',
        },
        {
          question: 'Do you build medical clinics in Houston suburbs like Katy, Sugar Land, or The Woodlands?',
          answer: 'Yes. Qamar Construction serves the full Greater Houston metropolitan area including Katy, Sugar Land, Pearland, The Woodlands, Cypress, Pasadena, League City, Missouri City, and all communities within a 40-mile radius of Houston.',
        },
        {
          question: 'Can Qamar Construction help first-time medical practice owners?',
          answer: "Absolutely. We work with first-time practice owners regularly and guide you through every stage — from evaluating a lease space before you sign, to coordinating with your equipment vendors on exact utility rough-in specs. Many clients tell us Qamar was the most valuable partner in their entire practice launch.",
        },
      ]}
      testimonialsHeading="What Houston Physicians Are Saying"
      testimonials={[
        {
          quote: "Zain and the Qamar Construction team built out our 4,200 sq ft primary care clinic in Katy from a bare shell. They handled everything — permits, MEP, equipment coordination. We opened two weeks ahead of schedule. Couldn't ask for more.",
          name: 'Dr. Khalid Mansour',
          title: 'Owner & Physician',
          practice: 'Mansour Family Medicine — Katy, TX',
          initials: 'KM',
        },
        {
          quote: "I've worked with other contractors in the Houston market and nobody comes close to Qamar's level of detail. Zain personally walked me through every stage of our specialty clinic build. The ADA compliance and patient flow were exactly what we needed.",
          name: 'Dr. Priya Nair',
          title: 'Medical Director',
          practice: 'Houston Dermatology & Skin Center',
          initials: 'PN',
        },
        {
          quote: "Our multi-physician practice needed a full gut renovation without shutting down. Zain phased the construction perfectly — we kept seeing patients the entire time. Qamar Construction exceeded every expectation.",
          name: 'Dr. Robert Castillo',
          title: 'Managing Partner',
          practice: 'Castillo & Associates Internal Medicine',
          initials: 'RC',
        },
      ]}
    />
  )
}
