import { NextResponse } from 'next/server'

const BASE = 'https://medicaldentaldesignbuild.com'

const items = [
  {
    title: 'Medical Clinic Construction & Renovation in Houston, TX',
    link: `${BASE}/medical-clinics`,
    description:
      'Qamar Construction builds and renovates medical clinics in Houston and surrounding areas. Turnkey design-build for primary care, specialty clinics, and multi-physician practices. ADA compliant, HIPAA-ready, permit-managed.',
    pubDate: 'Mon, 09 Apr 2026 08:00:00 GMT',
  },
  {
    title: 'Dental Office Construction & Design in Houston, TX',
    link: `${BASE}/dental-clinics`,
    description:
      'Expert dental office construction and renovation across Houston. Qamar Construction specializes in operatory layout, dental-grade plumbing, cabinetry, and equipment coordination for new practices, expansions, and full remodels.',
    pubDate: 'Mon, 09 Apr 2026 08:00:00 GMT',
  },
  {
    title: 'Urgent Care Center Construction in Houston, TX',
    link: `${BASE}/urgent-care`,
    description:
      'Fast-track urgent care facility construction and retail-to-medical conversions in Houston. Qamar Construction delivers fully code-compliant, patient-ready urgent care centers built to open on schedule.',
    pubDate: 'Mon, 09 Apr 2026 08:00:00 GMT',
  },
  {
    title: 'Medical Facility Construction in Katy, TX',
    link: `${BASE}/locations/katy`,
    description:
      'Qamar Construction serves Katy, TX and surrounding I-10 West corridor communities. Medical clinic, dental office, and urgent care construction with Harris and Fort Bend County permit expertise.',
    pubDate: 'Mon, 20 Apr 2026 08:00:00 GMT',
  },
  {
    title: 'Medical Facility Construction in Sugar Land, TX',
    link: `${BASE}/locations/sugar-land`,
    description:
      'Qamar Construction builds medical and dental facilities in Sugar Land, TX. Serving Fort Bend County with First Colony, Riverstone, and Telfair area expertise.',
    pubDate: 'Mon, 20 Apr 2026 08:00:00 GMT',
  },
  {
    title: 'Medical Facility Construction in The Woodlands, TX',
    link: `${BASE}/locations/the-woodlands`,
    description:
      'Qamar Construction builds healthcare facilities in The Woodlands, TX and Montgomery County. Medical clinics, dental offices, and urgent care centers serving the I-45 North corridor.',
    pubDate: 'Mon, 20 Apr 2026 08:00:00 GMT',
  },
  {
    title: 'Medical Facility Construction in Pearland, TX',
    link: `${BASE}/locations/pearland`,
    description:
      'Qamar Construction serves Pearland, TX — one of Texas fastest-growing cities. Medical clinic, dental office, and urgent care construction in Brazoria County.',
    pubDate: 'Mon, 20 Apr 2026 08:00:00 GMT',
  },
  {
    title: 'Medical Facility Construction in Cypress, TX',
    link: `${BASE}/locations/cypress`,
    description:
      'Qamar Construction builds medical and dental facilities in Cypress, TX and the Cy-Fair area. Retail-to-medical conversions and new construction in northwest Harris County.',
    pubDate: 'Mon, 20 Apr 2026 08:00:00 GMT',
  },
]

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Qamar Construction — Medical &amp; Dental Facility Builder, Houston TX</title>
    <link>${BASE}</link>
    <description>Turnkey design-build for medical clinics, dental offices, and urgent care centers in Houston, TX and surrounding areas.</description>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} Qamar Construction</copyright>
    <managingEditor>contact@qamarconstruction.com (Qamar Construction)</managingEditor>
    <webMaster>contact@qamarconstruction.com (Qamar Construction)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE}/logo.png</url>
      <title>Qamar Construction</title>
      <link>${BASE}</link>
    </image>
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
