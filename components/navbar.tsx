"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight02Icon } from "hugeicons-react"

const navLinks = [
  { label: "Продукты", href: "#products" },
  { label: "IT-услуги", href: "https://it.alashed.kz", external: true },
  { label: "Блог", href: "/blog" },
  { label: "О нас", href: "#contact" },
]

const productLinks = [
  { name: "Alashed EDU", desc: "AI-копилот для учителей", href: "https://edu.alashed.kz" },
  { name: "CodeStudio", desc: "Браузерное IDE", href: "https://studio.alashed.kz" },
  { name: "Alash Electronics", desc: "Импорт оборудования", href: "https://alash-electronics.kz" },
  { name: "Unitree.kz", desc: "Роботы Unitree в СНГ", href: "https://unitree.kz" },
  { name: "Tendon", desc: "Task-трекер", href: "https://tendon.alashed.kz" },
  { name: "Wiki", desc: "Курсы и документация", href: "https://wiki.alashed.kz" },
  { name: "Alashed IT", desc: "Разработка под ключ", href: "https://it.alashed.kz" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      {/* Horizontal line under navbar area */}
      <div className="w-full h-0 absolute left-0 top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white] z-10 hidden lg:block" />

      <nav ref={navRef} className="w-full flex justify-center items-center z-30 relative">
        <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] lg:max-w-[860px] h-10 sm:h-11 px-4 sm:px-5 bg-[#F7F5F3] shadow-[0px_0px_0px_2px_white] rounded-full flex justify-between items-center">

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img src="/alashed-wide-logo.svg" alt="Alashed" className="h-[18px] sm:h-5 w-auto" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="px-3 py-1.5 text-[13px] font-medium font-sans text-[#605A57] hover:text-[#1a1715] transition-colors rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:flex h-[30px] px-4 bg-[#1a1715] hover:bg-[#0a0a0a] rounded-full text-white text-[12px] font-semibold font-sans items-center transition-colors"
            >
              Связаться
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-[5px] rounded-full hover:bg-[rgba(55,50,47,0.06)] transition-colors flex-shrink-0"
              aria-label="Меню"
            >
              <span className={`block w-4 h-[1.5px] bg-[#37322F] transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-4 h-[1.5px] bg-[#37322F] transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-4 h-[1.5px] bg-[#37322F] transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-4 right-4 z-50 lg:hidden bg-white rounded-2xl shadow-[0px_8px_40px_rgba(55,50,47,0.16)] overflow-hidden"
            >
              {/* Products grid */}
              <div className="p-4">
                <p className="text-[10px] font-semibold text-[#847971] uppercase tracking-[0.1em] mb-3 font-sans">
                  Продукты
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {productLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-[#F7F5F3] transition-colors"
                    >
                      <span className="text-[#1a1715] text-[13px] font-semibold font-sans">{item.name}</span>
                      <span className="text-[#847971] text-[11px] font-sans">{item.desc}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[rgba(55,50,47,0.06)] mx-4" />

              {/* Nav links */}
              <div className="p-4 flex flex-col gap-0.5">
                {navLinks.filter(l => l.label !== "Продукты").map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-[#F7F5F3] transition-colors"
                  >
                    <span className="text-[#1a1715] text-[14px] font-medium font-sans">{link.label}</span>
                    <ArrowRight02Icon size={14} color="#847971" strokeWidth={1.5} />
                  </a>
                ))}
              </div>

              <div className="h-px bg-[rgba(55,50,47,0.06)] mx-4" />

              {/* CTA */}
              <div className="p-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full h-11 bg-[#1a1715] hover:bg-[#0a0a0a] rounded-xl text-white text-[14px] font-semibold font-sans flex items-center justify-center transition-colors"
                >
                  Связаться
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
