import React from 'react'

export default function FAQ() {
  const faqs = [
    { q: 'How often should I get an EICR inspection?', a: 'Every 5 years for most residential properties, or sooner if the property is older or rented.' },
    { q: 'Do I need a certified electrician to install an EV charger?', a: 'Yes — UK regulations require ECS-graded electricians for safe installation.' },
    { q: 'What are the benefits of ECS-graded electricians?', a: 'ECS-graded electricians are certified, trained, and regulated to meet UK electrical standards, ensuring your safety and compliance.' },
    { q: 'Can you handle both residential and commercial projects?', a: 'Absolutely — we work on homes, offices, shops, and industrial facilities.' },
  ]
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQ / Knowledge Base</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((f, idx) => (
            <div key={f.q} className={`p-6 ${idx !== faqs.length - 1 ? 'border-b border-slate-200' : ''}`}>
              <p className="font-semibold">{f.q}</p>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
