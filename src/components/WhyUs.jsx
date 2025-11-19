import React from 'react'

export default function WhyUs({ companyName }) {
  return (
    <section className="relative bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose {companyName}?</h2>
          <p className="mt-4 text-slate-300">
            At {companyName}, we treat every job like it’s in our own home. Combining years of experience, certifications, and a personal approach, we ensure every project is completed safely and to the highest standards.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Certified & Trained',
              desc: 'All team members are ECS‑graded electricians with regular professional training.'
            },
            {
              title: 'Proven Reliability',
              desc: 'Serving the area for residential, commercial, and industrial electrical needs.'
            },
            { title: 'Transparent Pricing', desc: 'Clear quotes with no hidden charges.' },
            { title: 'Flexible & Responsive', desc: 'Rapid response times with convenient scheduling.' },
            { title: 'Customer‑Centric', desc: 'Friendly service, clear communication, and attention to detail.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
