import { MetadataRoute } from 'next'

const base = 'https://medicaldentaldesignbuild.com'

// Use static dates — new Date() would change every build and mislead crawlers
const PHASE1 = new Date('2026-04-09')
const PHASE2 = new Date('2026-04-20')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: base,                             lastModified: PHASE2, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services`,               lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/medical-clinics`,        lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/dental-clinics`,         lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/urgent-care`,            lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`,                  lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,                lastModified: PHASE1, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/locations`,              lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.75 },

    // City landing pages
    { url: `${base}/locations/houston`,       lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/locations/katy`,          lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/locations/sugar-land`,    lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/locations/the-woodlands`, lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/locations/pearland`,      lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/locations/cypress`,       lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/locations/pasadena`,      lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/locations/league-city`,   lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/locations/missouri-city`, lastModified: PHASE2, changeFrequency: 'monthly', priority: 0.75 },
  ]
}
