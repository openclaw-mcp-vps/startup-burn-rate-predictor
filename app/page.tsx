export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Finance
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Predict Your Runway<br />
          <span className="text-[#58a6ff]">Before It Runs Out</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect Stripe, QuickBooks, or your bank account. Get real-time burn rate analysis, cash flow projections, and alerts when your runway drops below your threshold.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200"
        >
          Start Predicting — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Stripe Integration', 'QuickBooks Sync', 'Bank Feeds', 'Scenario Modeling', 'Runway Alerts', 'Trend Analysis'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-2 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to stay ahead of your burn</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Connect unlimited financial accounts',
              'Real-time burn rate dashboard',
              'Cash runway projections (3/6/12 mo)',
              'Scenario modeling (best/worst/base)',
              'Configurable runway alerts via email',
              'Spending category breakdown',
              'CSV & PDF export',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Which financial tools does it connect to?',
              a: 'We support Stripe, QuickBooks, and direct bank account connections via Plaid. More integrations are added regularly based on user requests.',
            },
            {
              q: 'How accurate are the runway predictions?',
              a: 'Predictions use your actual transaction history combined with trend analysis algorithms. Accuracy improves with more historical data — typically within 5% for 90-day projections.',
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. Cancel anytime from your account dashboard with no questions asked. You keep access until the end of your billing period.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Burn Rate Predictor. Built for founders who plan ahead.
      </footer>
    </main>
  )
}
