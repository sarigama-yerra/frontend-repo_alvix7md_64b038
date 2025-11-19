import React, { useState } from 'react'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import AreasServed from './components/AreasServed'
import USPs from './components/USPs'
import FAQ from './components/FAQ'
import FooterCTA from './components/FooterCTA'

function App() {
  const [showForm, setShowForm] = useState(false)
  const companyName = '[COMPANY NAME]'
  const serviceArea = '[SERVICE AREA]'

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero with Spline */}
      <Hero companyName={companyName} serviceArea={serviceArea} onQuote={() => setShowForm(true)} />

      {/* Why Us */}
      <WhyUs companyName={companyName} />

      {/* Services Overview */}
      <Services serviceArea={serviceArea} onQuote={() => setShowForm(true)} />

      {/* Process */}
      <Process onQuote={() => setShowForm(true)} />

      {/* Testimonials */}
      <Testimonials serviceArea={serviceArea} companyName={companyName} />

      {/* Areas Served */}
      <AreasServed serviceArea={serviceArea} locations={['[LOCATION 1]', '[LOCATION 2]', '[LOCATION 3]', '[LOCATION 4]', '[LOCATION 5]']} />

      {/* USPs */}
      <USPs />

      {/* FAQ */}
      <FAQ />

      {/* Footer / Final CTA */}
      <FooterCTA companyName={companyName} phone="[PHONE NUMBER]" email="[EMAIL ADDRESS]" />

      {/* Simple quote modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Request a Free Quote</h3>
              <button className="text-slate-400 hover:text-white" onClick={() => setShowForm(false)}>✕</button>
            </div>
            <form id="quote" className="mt-4 grid gap-4">
              <input className="w-full rounded-lg border border-white/10 bg-slate-800 p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Full name" />
              <input className="w-full rounded-lg border border-white/10 bg-slate-800 p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Phone number" />
              <input className="w-full rounded-lg border border-white/10 bg-slate-800 p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Email address" />
              <textarea rows={4} className="w-full rounded-lg border border-white/10 bg-slate-800 p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Describe the work you need" />
              <button type="button" onClick={() => setShowForm(false)} className="rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-400">Submit</button>
              <p className="text-xs text-slate-400">We’ll call you back to confirm your quote and schedule.</p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
