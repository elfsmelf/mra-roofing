import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Roofing Brisbane | Industrial Roofing Experts | MRA Roofing",
  description:
    "Brisbane's trusted commercial and industrial roofing specialists. Re-roofing shopping centres, warehouses, schools & more. Industry standard workmanship warranty. Free quotes. Call 1300 080 883.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
