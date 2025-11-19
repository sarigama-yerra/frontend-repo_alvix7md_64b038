import React from 'react'

export default function FooterCTA({ companyName, phone, email }) {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-slate-900 to-slate-950 p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready for a Safe, Reliable Electrician?</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Whether it’s a minor repair, major installation, or regular maintenance, {companyName} is ready to help. Fast, friendly, and fully certified electricians who do the job right.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#quote" className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300">
              Get a Free Quote
            </a>
            <div className="text-sm text-slate-300">
              <span className="mr-4">Phone: {phone || '[PHONE NUMBER]'}</span>
              <span className="mr-4">Email: {email || '[EMAIL ADDRESS]'}</span>
              <span>Socials: [Social Links]</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
