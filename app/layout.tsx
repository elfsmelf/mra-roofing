import type React from "react"
import type { Metadata } from "next"
import { Poppins, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "MRA Roofing | Metal Roof Replacements Brisbane & Gold Coast",
  description:
    "Brisbane & Gold Coast's trusted metal roofing specialists. COLORBOND® roof replacements, certified asbestos removal, industry standard workmanship warranty. Free quotes in 24 hours. Call 1300 080 883.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="//cdn.dni.nimbata.com/56902072857.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`font-sans antialiased ${_poppins.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
