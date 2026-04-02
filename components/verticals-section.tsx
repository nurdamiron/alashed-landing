"use client"

import { motion } from "framer-motion"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal"
import { ArrowRight02Icon } from "hugeicons-react"

interface Product {
  name: string
  desc: string
  href?: string
  tag?: string
}

interface Vertical {
  label: string
  title: string
  description: string
  products: Product[]
  accent: string
  accentBg: string
}

const verticals: Vertical[] = [
  {
    label: "01",
    title: "Образование",
    description: "EdTech-платформа нового поколения для школ Казахстана. AI генерирует документацию по ГОСО 2026, ученики программируют роботов в браузере.",
    accent: "#2E9DE0",
    accentBg: "#EBF7FF",
    products: [
      { name: "Alashed EDU", desc: "AI-копилот для учителей — КМЖ, БЖБ, ТЖБ за минуты", href: "https://edu.alashed.kz" },
      { name: "CodeStudio", desc: "Браузерное IDE: Python, Scratch, Arduino, ESP32", href: "https://studio.alashed.kz" },
      { name: "Wiki", desc: "Курсы и документация по электронике", href: "https://wiki.alashed.kz" },
      { name: "Соревнования", desc: "Подготовка к Infomatrix, KazRobotics, WRO", href: "/competitions" },
    ],
  },
  {
    label: "02",
    title: "Робототехника",
    description: "Официальный импорт STEM-оборудования и дистрибуция промышленных роботов Unitree в СНГ. От Arduino до четвероногих роботов.",
    accent: "#1a1715",
    accentBg: "#F0EFEE",
    products: [
      { name: "Alash Electronics", desc: "Онлайн-магазин: Arduino, ESP32, Raspberry Pi, датчики", href: "https://alash-electronics.kz" },
      { name: "Unitree.kz", desc: "Официальный дистрибьютор роботов Unitree в СНГ", href: "https://unitree.kz" },
    ],
  },
  {
    label: "03",
    title: "Бизнес и IT",
    description: "Инструменты для разработчиков и бизнеса. IT-услуги, task-трекер с AI-интеграцией, система управления предприятием.",
    accent: "#8B5CF6",
    accentBg: "#F3F0FF",
    products: [
      { name: "Alashed IT", desc: "IT-услуги, AI-интеграции, разработка под ключ", href: "https://it.alashed.kz" },
      { name: "Tendon", desc: "Task-трекер с Claude Code интеграцией", href: "https://tendon.alashed.kz" },
      { name: "Alashed BIZ", desc: "Управление заказами, складом, фискализация", tag: "Скоро" },
    ],
  },
]

function VerticalBlock({ vertical, index }: { vertical: Vertical; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className={`w-full border-b border-[rgba(55,50,47,0.12)] ${isEven ? "" : "bg-white"}`}>
      <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[280px]">
        {/* Left: vertical info */}
        <div className={`p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-4 ${isEven ? "" : "lg:order-2"}`}>
          <div className="flex items-center gap-3">
            <span
              className="text-[11px] font-bold tracking-[0.1em] uppercase font-sans px-2 py-1 rounded"
              style={{ color: vertical.accent, backgroundColor: vertical.accentBg }}
            >
              {vertical.label}
            </span>
            <div className="h-px flex-1 bg-[rgba(55,50,47,0.08)]" />
          </div>
          <h3 className="text-[#1a1715] text-[28px] sm:text-[34px] font-normal font-serif leading-[1.15] tracking-[-0.02em]">
            {vertical.title}
          </h3>
          <p className="text-[#605A57] text-[15px] leading-[1.65] font-sans max-w-[400px]">
            {vertical.description}
          </p>
        </div>

        {/* Right: products list */}
        <div className={`p-6 sm:p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 ${isEven ? "lg:border-l" : "lg:border-r lg:order-1"} border-[rgba(55,50,47,0.12)]`}>
          <div className="flex flex-col">
            {vertical.products.map((product, i) => {
              const isExternal = product.href?.startsWith("http")
              const inner = (
                <div className="flex items-center justify-between py-3.5 group/item">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[#1a1715] text-[15px] font-semibold font-sans">{product.name}</span>
                      {product.tag && (
                        <span className="text-[10px] font-semibold text-[#605A57] bg-[rgba(55,50,47,0.06)] px-2 py-0.5 rounded-full uppercase tracking-wider font-sans">
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[#847971] text-[13px] font-normal font-sans mt-0.5">{product.desc}</p>
                  </div>
                  {product.href && (
                    <ArrowRight02Icon
                      size={16}
                      color={vertical.accent}
                      strokeWidth={2}
                      className="flex-shrink-0 ml-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200"
                    />
                  )}
                </div>
              )

              return (
                <div key={product.name}>
                  {i > 0 && <div className="h-px bg-[rgba(55,50,47,0.06)]" />}
                  {product.href ? (
                    <a
                      href={product.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="block hover:bg-[rgba(55,50,47,0.02)] -mx-2 px-2 rounded-lg transition-colors"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function VerticalsSection() {
  return (
    <div className="w-full" id="products">
      {/* Section header */}
      <div className="w-full border-b border-[rgba(55,50,47,0.12)] py-12 sm:py-16 md:py-20 px-4">
        <ScrollReveal>
          <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#605A57] text-[13px] font-medium font-sans tracking-[0.08em] uppercase"
            >
              Что мы строим
            </motion.p>
            <h2 className="text-center text-[#1a1715] text-[26px] sm:text-[34px] md:text-[42px] font-normal font-serif leading-[1.1] tracking-[-0.02em]">
              Три направления,
              <br />
              одна экосистема
            </h2>
            <p className="text-center text-[#605A57] text-[15px] sm:text-base leading-[1.65] font-sans max-w-[440px]">
              Каждое направление усиливает остальные. Данные, пользователи и процессы — связаны.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Vertical blocks */}
      <StaggerContainer staggerDelay={0.1}>
        {verticals.map((vertical, i) => (
          <StaggerItem key={vertical.title}>
            <VerticalBlock vertical={vertical} index={i} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
