import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Outfit } from "next/font/google"  // 👈 importamos Outfit

// Configuramos Outfit
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
})

export const metadata: Metadata = {
  title: "Homes - Bringing Your Dream Home To Life",
  description:
    "Professional home automation and smart home services. Control everything from one place with our advanced technology solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>{children}</body>
    </html>
  )
}
