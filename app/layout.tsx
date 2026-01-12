import type React from "react"
import type { Metadata } from "next"
import { Poppins, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "MRA Roofing | Metal Roof Replacements Brisbane & Gold Coast",
  description:
    "Brisbane & Gold Coast's trusted metal roofing specialists. COLORBOND® roof replacements, certified asbestos removal, 7-year workmanship warranty. Free quotes in 24 hours. Call 1300 080 883.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_poppins.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
