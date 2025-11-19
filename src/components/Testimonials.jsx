import React from 'react'

export default function Testimonials({ serviceArea, companyName }) {
  const quotes = [
    { text: 'Arrived on time, fixed everything quickly, and left the place spotless. Highly recommend!', name: 'Happy Homeowner' },
    { text: `Friendly and professional. Would definitely use ${companyName} again.`, name: 'Satisfied Customer' },
    { text: 'Excellent service and clear pricing. Felt safe knowing the team was certified and experienced.', name: 'Local Business' },
  ]
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Customers Across {serviceArea}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <figure key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
