import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville } from "next/font/google"
import "./globals.css"
import StickyMobileCTA from "../components/sticky-mobile-cta"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Alashed - STEM-экосистема для школ Казахстана",
  description:
    "AI-помощник для учителей, браузерное IDE для информатики и робототехники, официальный импорт оборудования — всё в одной платформе.",
  icons: {
    icon: "/alashed-logo.svg",
    apple: "/alashed-logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${libreBaskerville.variable} antialiased`}>
      <head />
      <body className="font-sans antialiased">
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  )
}
