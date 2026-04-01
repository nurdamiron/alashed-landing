"use client"

import { useState, useRef, useEffect } from "react"
import {
  SearchList01Icon,
  CodeIcon,
  ChipIcon,
  StarIcon,
  UserIcon,
  GridViewIcon,
  ArrowDown01Icon,
  Briefcase01Icon,
  News01Icon,
} from "hugeicons-react"

const products = [
  {
    name: "Alashed EDU",
    desc: "AI-генерация КМЖ, БЖБ, ТЖБ с привязкой к ГОСО 2026",
    href: "https://edu.alashed.kz",
    icon: <SearchList01Icon size={16} color="#2E9DE0" strokeWidth={1.5} />,
  },
  {
    name: "CodeStudio",
    desc: "Браузерное IDE: Python, JS, Scratch — деплой на Arduino",
    href: "https://studio.alashed.kz",
    icon: <CodeIcon size={16} color="#2E9DE0" strokeWidth={1.5} />,
  },
  {
    name: "Alash Electronics",
    desc: "Официальный импорт Arduino, ESP32, Raspberry Pi в КЗ",
    href: "https://alash-electronics.kz",
    icon: <ChipIcon size={16} color="#2E9DE0" strokeWidth={1.5} />,
  },
  {
    name: "Unitree.kz",
    desc: "Дистрибьютор роботов Unitree в СНГ",
    href: "https://unitree.kz",
    icon: <StarIcon size={16} color="#2E9DE0" strokeWidth={1.5} />,
  },
  {
    name: "Tendon",
    desc: "Task-трекер для разработчиков с AI-интеграцией",
    href: "https://tendon.alashed.kz",
    icon: <GridViewIcon size={16} color="#2E9DE0" strokeWidth={1.5} />,
  },
  {
    name: "Wiki",
    desc: "Документация и курсы по робототехнике",
    href: "https://wiki.alashed.kz",
    icon: <SearchList01Icon size={16} color="#2E9DE0" strokeWidth={1.5} />,
  },
]

const solutions = [
  {
    name: "Для учителей",
    desc: "AI-ассистент, который знает ГОСО и ваш класс",
    href: "/for-teachers",
    icon: <UserIcon size={16} color="#2E9DE0" strokeWidth={1.5} />,
  },
  {
    name: "Для директоров",
    desc: "Аналитика школы, инвентарь и отчётность в одном дашборде",
    href: "/for-directors",
    icon: <GridViewIcon size={16} color="#2E9DE0" strokeWidth={1.5} />,
  },
  {
    name: "Для учеников",
    desc: "CodeStudio, геймификация и соревнования",
    href: "/for-students",
    icon: <CodeIcon size={16} color="#2E9DE0" strokeWidth={1.5} />,
  },
]

function ChevronDown() {
  return <ArrowDown01Icon size={12} color="currentColor" strokeWidth={1.5} />
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

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <div className="w-full h-0 absolute left-0 top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white] z-10 hidden lg:block" />

      <div ref={navRef} className="w-full flex justify-center items-center z-30 relative">
        <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] lg:max-w-[820px] h-10 sm:h-11 px-3 sm:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] shadow-[0px_0px_0px_2px_white] rounded-[50px] flex justify-between items-center">

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

              {/* Услуги - it.alashed.kz */}
              <a
                href="https://it.alashed.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-[13px] font-medium font-sans text-[rgba(49,45,43,0.70)] hover:text-[#37322F] transition-colors rounded-full"
              >
                Услуги
              </a>

              <a href="/blog" className="px-3 py-1.5 text-[13px] font-medium font-sans text-[rgba(49,45,43,0.70)] hover:text-[#37322F] transition-colors rounded-full">
                Блог
              </a>
              <a href="#contact" className="px-3 py-1.5 text-[13px] font-medium font-sans text-[rgba(49,45,43,0.70)] hover:text-[#37322F] transition-colors rounded-full">
                О нас
              </a>
            </div>
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="#contact"
                className="px-3 md:px-[14px] py-[6px] bg-[#5BB8F5] rounded-full text-white text-[13px] font-medium font-sans hover:bg-[#2E9DE0] transition-colors whitespace-nowrap"
              >
                Оставить заявку
              </a>
            </div>

            {/* Mobile: CTA + burger */}
            <a
              href="#contact"
              className="sm:hidden px-3 py-[6px] bg-[#5BB8F5] rounded-full text-white text-xs font-medium font-sans whitespace-nowrap"
            >
              Заявка
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
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

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

          {/* Links */}
          <div className="px-4 py-3 flex flex-col gap-1">
            <a href="https://it.alashed.kz" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2.5 hover:bg-[#F7F5F3] rounded-xl px-2 -mx-2 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
                <Briefcase01Icon size={14} color="#2E9DE0" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[#37322F] text-sm font-medium font-sans block">Услуги</span>
                <span className="text-[rgba(55,50,47,0.50)] text-xs font-sans">Веб, мобайл, CRM — it.alashed.kz</span>
              </div>
            </a>
            <a href="/blog" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2.5 hover:bg-[#F7F5F3] rounded-xl px-2 -mx-2 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
                <News01Icon size={14} color="#2E9DE0" strokeWidth={1.5} />
              </div>
              <span className="text-[#37322F] text-sm font-medium font-sans">Блог</span>
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2.5 hover:bg-[#F7F5F3] rounded-xl px-2 -mx-2 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
                <UserIcon size={14} color="#2E9DE0" strokeWidth={1.5} />
              </div>
              <span className="text-[#37322F] text-sm font-medium font-sans">О нас</span>
            </a>
          </div>

          <div className="h-px bg-[rgba(55,50,47,0.08)] mx-4" />

          {/* Bottom CTA */}
          <div className="px-4 py-4 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans text-center"
            >
              Оставить заявку
            </a>
            <a
              href="https://edu.alashed.kz"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 bg-[rgba(55,50,47,0.05)] hover:bg-[rgba(55,50,47,0.08)] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans text-center"
            >
              Начать работу
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
