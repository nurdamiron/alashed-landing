"use client"

import { useState, useEffect } from "react"

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white border-t border-[rgba(55,50,47,0.12)] px-4 py-3 flex gap-3 shadow-[0px_-4px_16px_rgba(55,50,47,0.10)]">
        <a
          href="https://edu.alashed.kz"
          className="flex-1 px-4 py-[10px] bg-[#5BB8F5] shadow-[0px_2px_4px_rgba(91,184,245,0.30)] rounded-[99px] flex justify-center items-center gap-2 hover:bg-[#2E9DE0] transition-colors"
        >
          <span className="text-white text-[13px] font-semibold leading-5 font-sans">Начать работу</span>
        </a>
        <a
          href="#contact"
          className="px-4 py-[10px] bg-white border border-[rgba(55,50,47,0.20)] rounded-[99px] flex justify-center items-center hover:bg-[#F7F5F3] transition-colors"
        >
          <span className="text-[#37322F] text-[13px] font-medium leading-5 font-sans">Демо</span>
        </a>
      </div>
    </div>
  )
}
