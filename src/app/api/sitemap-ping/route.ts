import { NextResponse } from 'next/server'

const SITEMAP_URL = 'https://medicaldentaldesignbuild.com/sitemap.xml'

export async function GET() {
  const endpoints = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  ]

  const results = await Promise.allSettled(
    endpoints.map((url) => fetch(url, { method: 'GET', cache: 'no-store' }))
  )

  const summary = results.map((r, i) => ({
    engine: i === 0 ? 'google' : 'bing',
    url: endpoints[i],
    status: r.status === 'fulfilled' ? r.value.status : 'error',
    ok: r.status === 'fulfilled' ? r.value.ok : false,
  }))

  return NextResponse.json({
    pinged: summary,
    sitemap: SITEMAP_URL,
    timestamp: new Date().toISOString(),
  })
}
