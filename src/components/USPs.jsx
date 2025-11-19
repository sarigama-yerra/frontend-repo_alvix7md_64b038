import React from 'react'

export default function USPs() {
  const points = [
    { title: 'Broad Expertise', desc: 'Residential, commercial, and industrial electrical projects.' },
    { title: 'Safety First', desc: 'All work ECS‑graded and compliant with UK electrical regulations.' },
    { title: 'Fast & Flexible', desc: 'Evening, weekend, and emergency slots available.' },
    { title: 'Transparent Pricing', desc: 'Clear quotes upfront with no hidden fees.' },
    { title: 'Friendly, Local Service', desc: 'Experienced electricians who care about your property.' },
  ]
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Our Customers Keep Coming Back</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold">{p.title}</p>
              <p className="text-slate-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
