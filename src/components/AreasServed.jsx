import React from 'react'

export default function AreasServed({ serviceArea, locations = [] }) {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Serving All of {serviceArea}</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          We provide local, reliable electricians across {serviceArea}, including {locations.length ? locations.join(', ') : '[LOCATION 1], [LOCATION 2], [LOCATION 3], [LOCATION 4], [LOCATION 5]'} and everywhere in between.
        </p>
        <button className="mt-8 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300">
          Get a Free Quote
        </button>
      </div>
    </section>
  )
}
