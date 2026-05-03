import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Burn Rate Predictor — Know Your Runway Before It\'s Too Late',
  description: 'Connect your financial tools and predict cash runway based on burn rate and growth trends. Built for startup founders and CFOs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cac0ffd4-8391-47ab-9d08-eba3973a5195"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
