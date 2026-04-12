import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville } from "next/font/google"
import Script from "next/script"
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
      <head>
        <Script id="yandex-metrika" strategy="beforeInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108510589', 'ym');
            ym(108510589, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <StickyMobileCTA />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108510589" style={{position:"absolute", left:"-9999px"}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  )
}
