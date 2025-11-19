import React from 'react'

export default function Testimonials({ serviceArea, companyName }) {
  const quotes = [
    { text: 'Arrived on time, fixed everything quickly, and left the place spotless. Highly recommend!', name: 'Happy Homeowner' },
    { text: `Friendly and professional. Would definitely use ${companyName} again.`, name: 'Satisfied Customer' },
    { text: 'Excellent service and clear pricing. Felt safe knowing the team was certified and experienced.', name: 'Local Business' },
  ]
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Customers Across {serviceArea}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <figure key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-slate-200">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
