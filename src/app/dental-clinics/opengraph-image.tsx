import { ImageResponse } from 'next/og'

export const alt = 'Dental Office Construction in Houston, TX — Qamar Construction'
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
        <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: '100%', background: '#60a5fa' }} />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 40, height: 2, background: '#c9a84c', marginRight: 16 }} />
          <span style={{ color: '#c9a84c', fontSize: 18, letterSpacing: '0.2em', fontWeight: 600 }}>
            DENTAL CLINICS — HOUSTON, TX
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: '#f0f0f0', fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
            Dental Office
          </span>
          <span style={{ color: '#60a5fa', fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
            Construction
          </span>
          <span style={{ color: '#9ca3af', fontSize: 24, marginTop: 20 }}>
            Expert operatory build-outs, new practices &amp; full remodels — turnkey design-build
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#f0f0f0', fontSize: 28, fontWeight: 700, letterSpacing: '0.08em' }}>QAMAR </span>
            <span style={{ color: '#c9a84c', fontSize: 28, fontWeight: 700, letterSpacing: '0.08em', marginLeft: 8 }}>CONSTRUCTION</span>
          </div>
          <span style={{ color: '#9ca3af', fontSize: 18 }}>medicaldentaldesignbuild.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
