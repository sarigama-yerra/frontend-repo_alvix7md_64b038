import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ companyName, serviceArea, onQuote }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white text-slate-900">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-sky-300/60 bg-sky-50 px-3 py-1 text-xs font-medium tracking-wide text-sky-700">
            Friendly, Qualified Local Electricians
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-slate-900">Done Properly, First Time</span>
          </h1>
          <p className="mt-6 text-lg text-slate-700">
            Trusted by homeowners, landlords, and businesses across {serviceArea}. Our ECS‑qualified electricians provide fast, reliable, and safe electrical solutions — from small repairs to full installations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onQuote} className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300">
              Get a Free Quote
            </button>
            <div className="text-xs text-slate-600">
              • ECS‑graded • Evenings & weekends • Transparent pricing
            </div>
          </div>

          {/* Quick points */}
          <ul className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <li className="rounded-lg border border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">ECS‑graded, highly trained electricians</li>
            <li className="rounded-lg border border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">Flexible scheduling: evenings, weekends, bank holidays</li>
            <li className="rounded-lg border border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">Transparent pricing with no hidden fees</li>
            <li className="rounded-lg border border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">Residential, commercial, and industrial services</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
