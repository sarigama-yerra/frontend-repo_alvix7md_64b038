import React from 'react'

export default function Process({ onQuote }) {
  const steps = [
    { title: 'Book Online', desc: 'Submit your details using our simple online form.' },
    { title: 'Quick Callback', desc: 'Our friendly team will contact you to confirm your quote and schedule.' },
    { title: 'Job Completed', desc: 'Certified electricians arrive on time and complete work safely.' },
    { title: 'Peace of Mind', desc: 'All work meets UK electrical regulations with full documentation where required.' },
  ]
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Simple Process</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
                {i + 1}
              </div>
              <p className="font-semibold">{s.title}</p>
              <p className="text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
        <button onClick={onQuote} className="mt-8 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300">
          Get a Free Quote
        </button>
      </div>
    </section>
  )
}
