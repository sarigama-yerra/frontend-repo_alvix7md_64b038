import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ companyName, serviceArea, onQuote }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs font-medium tracking-wide text-sky-200">
            Friendly, Qualified Local Electricians
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-white">Done Properly, First Time</span>
          </h1>
          <p className="mt-6 text-lg text-sky-100/90">
            Trusted by homeowners, landlords, and businesses across {serviceArea}. Our ECS‑qualified electricians provide fast, reliable, and safe electrical solutions — from small repairs to full installations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onQuote} className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300">
              Get a Free Quote
            </button>
            <div className="text-xs text-sky-200/80">
              • ECS‑graded • Evenings & weekends • Transparent pricing
            </div>
          </div>

          {/* Quick points */}
          <ul className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm text-sky-100/90 sm:grid-cols-2">
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">ECS‑graded, highly trained electricians</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">Flexible scheduling: evenings, weekends, bank holidays</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">Transparent pricing with no hidden fees</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">Residential, commercial, and industrial services</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
