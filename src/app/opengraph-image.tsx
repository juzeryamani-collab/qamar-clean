import { ImageResponse } from 'next/og'

export const alt = 'Qamar Construction — Medical & Dental Facility Builder, Houston TX'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a1e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 72px',
          position: 'relative',
        }}
      >
        {/* Left gold bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: '100%', background: '#c9a84c' }} />

        {/* Top: brand tag */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 40, height: 2, background: '#c9a84c', marginRight: 16 }} />
          <span style={{ color: '#c9a84c', fontSize: 18, letterSpacing: '0.2em', fontWeight: 600 }}>
            HOUSTON, TX — HEALTHCARE FACILITY BUILDER
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: '#f0f0f0', fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Medical &amp; Dental
          </span>
          <span style={{ color: '#c9a84c', fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Design-Build
          </span>
          <span style={{ color: '#9ca3af', fontSize: 26, marginTop: 20, fontWeight: 400 }}>
            Turnkey construction for medical clinics, dental offices &amp; urgent care
          </span>
        </div>

        {/* Bottom: company name + URL */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#f0f0f0', fontSize: 30, fontWeight: 700, letterSpacing: '0.08em' }}>QAMAR </span>
            <span style={{ color: '#c9a84c', fontSize: 30, fontWeight: 700, letterSpacing: '0.08em', marginLeft: 8 }}>CONSTRUCTION</span>
          </div>
          <span style={{ color: '#9ca3af', fontSize: 18 }}>medicaldentaldesignbuild.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
