import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'contact@qamarconstruction.com'

export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, company, phone, email, service, timeline, description } = body
  if (!name || !phone || !email || !service) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 })
  }

  const rows = [
    ['Name', name], ['Company', company || '—'], ['Phone', phone],
    ['Email', email], ['Service', service], ['Timeline', timeline || '—'], ['Description', description || '—'],
  ]

  try {
    await resend.emails.send({
      from: 'Qamar Construction Website <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New Quote Request: ${service} — ${name}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;background:#1a1a1a;color:#f0f0f0;padding:32px">
        <div style="border-left:4px solid #c9a84c;padding-left:16px;margin-bottom:24px">
          <h1 style="color:#c9a84c;font-size:22px;margin:0">New Project Inquiry</h1>
          <p style="color:#9ca3af;font-size:13px;margin:4px 0 0">Submitted via qamarconstruction.com</p>
        </div>
        <table style="width:100%;border-collapse:collapse">
          ${rows.map(([l, v]) => `<tr><td style="padding:10px 12px;background:#242424;border-bottom:1px solid #3a3a3a;color:#9ca3af;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:130px;vertical-align:top">${l}</td><td style="padding:10px 12px;background:#242424;border-bottom:1px solid #3a3a3a;color:#f0f0f0;font-size:14px;vertical-align:top">${v}</td></tr>`).join('')}
        </table>
        <p style="color:#9ca3af;font-size:12px;margin-top:20px">Reply to this email or call <a href="tel:${phone}" style="color:#c9a84c">${phone}</a></p>
      </div>`,
    })

    await resend.emails.send({
      from: 'Qamar Construction <onboarding@resend.dev>',
      to: [email],
      subject: 'We received your inquiry — Qamar Construction',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;background:#1a1a1a;color:#f0f0f0;padding:32px">
        <div style="border-left:4px solid #c9a84c;padding-left:16px;margin-bottom:24px">
          <h1 style="color:#c9a84c;font-size:22px;margin:0">Thank You, ${name}!</h1>
          <p style="color:#9ca3af;font-size:13px;margin:4px 0 0">Qamar Construction · Houston, TX</p>
        </div>
        <p style="color:#f0f0f0;line-height:1.7">We&apos;ve received your inquiry about <strong style="color:#c9a84c">${service}</strong> and will be in touch within <strong>1 business day</strong> to schedule your free project consultation.</p>
        <div style="background:#242424;border:1px solid #3a3a3a;padding:16px;margin:20px 0">
          <p style="margin:4px 0;font-size:14px">📞 <a href="tel:+18327669246" style="color:#c9a84c">(832) 766-9246</a></p>
          <p style="margin:4px 0;font-size:14px">💬 <a href="https://wa.me/18327669246" style="color:#c9a84c">WhatsApp</a></p>
          <p style="margin:4px 0;font-size:14px">✉️ <a href="mailto:contact@qamarconstruction.com" style="color:#c9a84c">contact@qamarconstruction.com</a></p>
        </div>
        <p style="color:#9ca3af;font-size:12px;border-top:1px solid #3a3a3a;padding-top:16px;margin-top:24px">Qamar Construction · Houston, TX · Licensed &amp; Insured</p>
      </div>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Resend error]', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
