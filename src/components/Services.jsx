import React from 'react'

export default function Services({ serviceArea, onQuote }) {
  const sections = [
    {
      heading: 'Residential Services',
      items: [
        {
          title: 'Rewiring & Consumer Unit Upgrades',
          desc: 'Modernise old wiring or upgrade your consumer unit safely. Perfect for homeowners, landlords, and tenants.'
        },
        { title: 'Lighting, Sockets & Switches', desc: 'Installation, replacement, and repairs to keep your home fully powered.' },
        { title: 'Outside Lighting & Power', desc: 'Secure and convenient external electrical solutions.' },
        { title: 'Safety Inspections & EICR Reports', desc: 'Full compliance with UK electrical standards to keep your family and property safe.' },
        { title: 'Portable Appliance Testing (PAT)', desc: 'Ensure your devices and appliances are safe and compliant.' },
      ],
    },
    {
      heading: 'Commercial & Industrial Services',
      items: [
        { title: 'Office, Shop & Warehouse Wiring', desc: 'Complete electrical solutions for commercial properties.' },
        { title: 'LED Lighting & Energy Efficiency', desc: 'Upgrade lighting systems for better energy savings and safety.' },
        { title: 'Maintenance, Fault Finding & Repairs', desc: 'Quick diagnosis and resolution of electrical issues to minimise downtime.' },
        { title: 'High‑Quality Industrial Wiring & Data Cabling', desc: 'For complex commercial or industrial electrical needs.' },
      ],
    },
    {
      heading: 'EV Charger Installation',
      items: [
        { title: 'Certified EV Charger Installation', desc: `Safe, certified EV charger installation for homes and businesses across ${serviceArea}.` },
      ],
    },
    {
      heading: 'Minor Works & Emergency Repairs',
      items: [
        { title: 'Spurs, switches & urgent fault repairs', desc: 'Handled quickly by certified electricians.' },
      ],
    },
  ]

  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Electrical Services We Offer</h2>
          <p className="mt-4 text-slate-600">
            We cover all your electrical needs across {serviceArea}, whether it’s for your home, business, or industrial site.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {sections.map((group) => (
            <div key={group.heading} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{group.heading}</h3>
              <ul className="mt-4 space-y-4">
                {group.items.map((it) => (
                  <li key={it.title}>
                    <p className="font-medium">{it.title}</p>
                    <p className="text-slate-600">{it.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button onClick={onQuote} className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  )
}
