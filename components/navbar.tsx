"use client"

import { useState, useRef, useEffect } from "react"

const products = [
  {
    name: "Alashed EDU",
    desc: "AI-генерация КМЖ, БЖБ, ТЖБ с привязкой к ГОСО 2026",
    href: "https://edu.alashed.kz",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12M2 8h8M2 12h5" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="13" cy="11" r="2.5" stroke="#2E9DE0" strokeWidth="1.25"/>
        <path d="M14.8 13.8l1.5 1.5" stroke="#2E9DE0" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "CodeStudio",
    desc: "Браузерное IDE: Python, JS, Scratch — деплой на Arduino",
    href: "https://studio.alashed.kz",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M5 5L2 8l3 3M11 5l3 3-3 3M9 4l-2 8" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Hardware",
    desc: "Официальный импорт Arduino, ESP32, Raspberry Pi в КЗ",
    href: "/hardware",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="5" width="12" height="7" rx="1" stroke="#2E9DE0" strokeWidth="1.25"/>
        <path d="M5 5V4a3 3 0 016 0v1" stroke="#2E9DE0" strokeWidth="1.25"/>
        <path d="M5 9h2M9 9h2" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Соревнования",
    desc: "Подготовка к Infomatrix, KazRobotics, WRO",
    href: "/competitions",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5L8 2z" stroke="#2E9DE0" strokeWidth="1.25" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const solutions = [
  {
    name: "Для учителей",
    desc: "AI-ассистент, который знает ГОСО и ваш класс",
    href: "/for-teachers",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="3" stroke="#2E9DE0" strokeWidth="1.25"/>
        <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5" stroke="#2E9DE0" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Для директоров",
    desc: "Аналитика школы, инвентарь и отчётность в одном дашборде",
    href: "/for-directors",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="5" height="5" rx="1" stroke="#2E9DE0" strokeWidth="1.25"/>
        <rect x="9" y="2" width="5" height="5" rx="1" stroke="#2E9DE0" strokeWidth="1.25"/>
        <rect x="2" y="9" width="5" height="5" rx="1" stroke="#2E9DE0" strokeWidth="1.25"/>
        <path d="M9 11.5h5M11.5 9v5" stroke="#2E9DE0" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Для учеников",
    desc: "CodeStudio, геймификация и соревнования",
    href: "/for-students",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 5L2 8l2 3M12 5l2 3-2 3M7 4l-1.5 8" stroke="#2E9DE0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function DropdownMenu({ items }: { items: typeof products }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-[0px_8px_32px_rgba(55,50,47,0.12),0px_0px_0px_1px_rgba(55,50,47,0.06)] overflow-hidden z-50">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="flex items-start gap-3 px-4 py-3 hover:bg-[#F7F5F3] transition-colors group border-b border-[rgba(55,50,47,0.06)] last:border-b-0"
        >
          <div className="w-8 h-8 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0 mt-0.5">
            {item.icon}
          </div>
          <div>
            <div className="text-[#37322F] text-sm font-semibold font-sans leading-tight">{item.name}</div>
            <div className="text-[rgba(55,50,47,0.55)] text-xs font-normal font-sans leading-4 mt-0.5">{item.desc}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"products" | "solutions" | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDropdown = (menu: "products" | "solutions") => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(menu)
  }

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  // Close mobile menu on route scroll
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      {/* Horizontal divider line behind pill */}
      <div className="w-full h-0 absolute left-0 top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white] z-10 hidden lg:block" />

      <div ref={navRef} className="w-full flex justify-center items-center z-30 relative">
        {/* Pill */}
        <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] lg:max-w-[760px] h-10 sm:h-11 px-3 sm:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] shadow-[0px_0px_0px_2px_white] rounded-[50px] flex justify-between items-center">

          {/* Left: logo + nav links */}
          <div className="flex items-center gap-1">
            <a href="/" className="flex items-center flex-shrink-0">
              <img src="/alashed-wide-logo.svg" alt="Alashed" className="h-5 sm:h-6 w-auto" />
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-0.5 ml-4">
              {/* Products */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("products")}
                onMouseLeave={closeDropdown}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] font-medium font-sans transition-colors ${
                    openMenu === "products" ? "text-[#37322F] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.10)]" : "text-[rgba(49,45,43,0.70)] hover:text-[#37322F]"
                  }`}
                  onClick={() => setOpenMenu(openMenu === "products" ? null : "products")}
                >
                  Продукты
                  <span className={`transition-transform duration-200 ${openMenu === "products" ? "rotate-180" : ""}`}>
                    <ChevronDown />
                  </span>
                </button>
                <div className={`transition-all duration-200 ${openMenu === "products" ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"}`}>
                  {openMenu === "products" && <DropdownMenu items={products} />}
                </div>
              </div>

              {/* Solutions */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("solutions")}
                onMouseLeave={closeDropdown}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] font-medium font-sans transition-colors ${
                    openMenu === "solutions" ? "text-[#37322F] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.10)]" : "text-[rgba(49,45,43,0.70)] hover:text-[#37322F]"
                  }`}
                  onClick={() => setOpenMenu(openMenu === "solutions" ? null : "solutions")}
                >
                  Решения
                  <span className={`transition-transform duration-200 ${openMenu === "solutions" ? "rotate-180" : ""}`}>
                    <ChevronDown />
                  </span>
                </button>
                <div className={`transition-all duration-200 ${openMenu === "solutions" ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"}`}>
                  {openMenu === "solutions" && <DropdownMenu items={solutions} />}
                </div>
              </div>

              <a href="/blog" className="px-3 py-1.5 text-[13px] font-medium font-sans text-[rgba(49,45,43,0.70)] hover:text-[#37322F] transition-colors rounded-full">
                Блог
              </a>
              <a href="#contact" className="px-3 py-1.5 text-[13px] font-medium font-sans text-[rgba(49,45,43,0.70)] hover:text-[#37322F] transition-colors rounded-full">
                О нас
              </a>
            </div>
          </div>

          {/* Right: CTA buttons + hamburger */}
          <div className="flex items-center gap-2">
            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-2">
              <a href="https://edu.alashed.kz" className="px-3 md:px-[14px] py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] rounded-full text-[#37322F] text-[13px] font-medium font-sans hover:bg-[#F0EFEE] transition-colors">
                Войти
              </a>
              <a href="https://edu.alashed.kz" className="px-3 md:px-[14px] py-[6px] bg-[#5BB8F5] rounded-full text-white text-[13px] font-medium font-sans hover:bg-[#2E9DE0] transition-colors whitespace-nowrap">
                Попробовать бесплатно
              </a>
            </div>

            {/* Mobile: just "Войти" + burger */}
            <a href="https://edu.alashed.kz" className="sm:hidden px-3 py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] rounded-full text-[#37322F] text-xs font-medium font-sans">
              Войти
            </a>
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
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        {/* Drawer */}
        <div className={`absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-[0px_8px_40px_rgba(55,50,47,0.16)] overflow-hidden transition-all duration-300 ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}>
          {/* Products */}
          <div className="px-4 pt-4 pb-2">
            <div className="text-[10px] font-semibold font-sans text-[rgba(55,50,47,0.40)] uppercase tracking-widest mb-2">Продукты</div>
            {products.map((item, i) => (
              <a key={i} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2.5 hover:bg-[#F7F5F3] rounded-xl px-2 -mx-2 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[#37322F] text-sm font-semibold font-sans">{item.name}</div>
                  <div className="text-[rgba(55,50,47,0.50)] text-xs font-sans">{item.desc}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="h-px bg-[rgba(55,50,47,0.08)] mx-4" />

          {/* Solutions */}
          <div className="px-4 py-3">
            <div className="text-[10px] font-semibold font-sans text-[rgba(55,50,47,0.40)] uppercase tracking-widest mb-2">Решения</div>
            {solutions.map((item, i) => (
              <a key={i} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2 hover:bg-[#F7F5F3] rounded-xl px-2 -mx-2 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-[#37322F] text-sm font-medium font-sans">{item.name}</span>
              </a>
            ))}
          </div>

          <div className="h-px bg-[rgba(55,50,47,0.08)] mx-4" />

          {/* Blog + About */}
          <div className="px-4 py-3 flex flex-col gap-1">
            <a href="/blog" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2.5 hover:bg-[#F7F5F3] rounded-xl px-2 -mx-2 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 3h10M2 6.5h7M2 10h5" stroke="#2E9DE0" strokeWidth="1.25" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-[#37322F] text-sm font-medium font-sans">Блог</span>
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2.5 hover:bg-[#F7F5F3] rounded-xl px-2 -mx-2 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="5" r="2.5" stroke="#2E9DE0" strokeWidth="1.25"/>
                  <path d="M2 13c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#2E9DE0" strokeWidth="1.25" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-[#37322F] text-sm font-medium font-sans">О нас</span>
            </a>
          </div>

          <div className="h-px bg-[rgba(55,50,47,0.08)] mx-4" />

          {/* Bottom CTAs */}
          <div className="px-4 py-4 flex flex-col gap-2">
            <a
              href="https://edu.alashed.kz"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans text-center"
            >
              Попробовать бесплатно
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 bg-[rgba(55,50,47,0.05)] hover:bg-[rgba(55,50,47,0.08)] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans text-center"
            >
              Запросить демо
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
