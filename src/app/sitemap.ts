import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://qamar.53printers.com'
  return [
    { url: base,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/medical-clinics`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/dental-clinics`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/urgent-care`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/locations`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
