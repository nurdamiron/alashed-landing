"use client"

import { motion } from "framer-motion"
import ScrollReveal from "@/components/motion/scroll-reveal"
import {
  ArrowRight02Icon,
  CodeIcon,
  ChipIcon,
  Clock01Icon,
  Briefcase01Icon,
  SearchList01Icon,
  GridViewIcon,
  StarIcon,
} from "hugeicons-react"
import EduDemo from "@/components/demos/edu-demo"
import CodeStudioDemo from "@/components/demos/codestudio-demo"
import HardwareDemo from "@/components/demos/hardware-demo"
import type { ReactNode } from "react"

/* ───────────────────────── product data ───────────────────────── */

interface Product {
  id: string
  name: string
  href: string
  label: string
  headline: string
  description: string
  accent: string
  accentBg: string
  tag?: string
  visual: "edu" | "codestudio" | "hardware" | "unitree" | "it" | "tendon" | "wiki" | "biz"
}

const products: Product[] = [
  {
    id: "edu",
    name: "Alashed EDU",
    href: "https://edu.alashed.kz",
    label: "Alashed EDU",
    headline: "AI-копилот для учителей",
    description:
      "Генерация КМЖ, ФО, БЖБ, ТЖБ за минуты. AI знает ГОСО 2026, профиль учителя и успеваемость класса.",
    accent: "#2E9DE0",
    accentBg: "#EBF7FF",
    visual: "edu",
  },
  {
    id: "codestudio",
    name: "CodeStudio",
    href: "https://studio.alashed.kz",
    label: "CodeStudio",
    headline: "Браузерное IDE для робототехники",
    description:
      "Python, JavaScript, Scratch + Arduino, ESP32, Micro:bit. Деплой на реальное железо, не симулятор.",
    accent: "#10B981",
    accentBg: "#ECFDF5",
    visual: "codestudio",
  },
  {
    id: "electronics",
    name: "Alash Electronics",
    href: "https://alash-electronics.kz",
    label: "Alash Electronics",
    headline: "Официальный импорт STEM-оборудования",
    description:
      "Arduino, ESP32, Raspberry Pi, датчики, роботы — с доставкой по всему Казахстану. Прямой импорт без посредников.",
    accent: "#F59E0B",
    accentBg: "#FFFBEB",
    visual: "hardware",
  },
  {
    id: "unitree",
    name: "Unitree.kz",
    href: "https://unitree.kz",
    label: "Unitree.kz",
    headline: "Дистрибьютор роботов Unitree в СНГ",
    description:
      "Четвероногие роботы, гуманоиды, промышленная робототехника. Официальный дистрибьютор для всего СНГ.",
    accent: "#1a1715",
    accentBg: "#F7F5F3",
    visual: "unitree",
  },
  {
    id: "it",
    name: "Alashed IT",
    href: "https://it.alashed.kz",
    label: "Alashed IT",
    headline: "IT-услуги и AI-интеграции",
    description:
      "Разработка, консалтинг, внедрение AI-решений под ключ. От архитектуры до продакшена.",
    accent: "#6366F1",
    accentBg: "#EEF2FF",
    visual: "it",
  },
  {
    id: "tendon",
    name: "Tendon",
    href: "https://tendon.alashed.kz",
    label: "Tendon",
    headline: "Task-трекер для разработчиков",
    description:
      "Интеграция с Claude Code, фокус-сессии, стендапы, ревью. Управление задачами прямо из терминала.",
    accent: "#8B5CF6",
    accentBg: "#F5F3FF",
    visual: "tendon",
  },
  {
    id: "wiki",
    name: "Wiki Alashed",
    href: "https://wiki.alashed.kz",
    label: "Wiki Alashed",
    headline: "Документация и курсы",
    description:
      "Обучающие материалы по электронике и робототехнике. От Arduino до ESP32 — шаг за шагом.",
    accent: "#059669",
    accentBg: "#ECFDF5",
    visual: "wiki",
  },
  {
    id: "biz",
    name: "Alashed BIZ",
    href: "#",
    label: "Alashed BIZ",
    headline: "Управление бизнесом",
    description:
      "Заказы, склад, поставщики, фискализация через Webkassa. PWA-приложение для бизнеса.",
    accent: "#D97706",
    accentBg: "#FFFBEB",
    tag: "Скоро",
    visual: "biz",
  },
]

/* ───────────────────── inline visual placeholders ───────────────────── */

function UnitreeVisual() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#1a1715] via-[#2a2520] to-[#0d0c0b] flex items-center justify-center">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
      />
      <div className="relative flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center backdrop-blur-sm">
          <StarIcon size={36} color="rgba(255,255,255,0.7)" strokeWidth={1.2} />
        </div>
        <span className="text-white/80 text-[22px] font-bold tracking-[0.2em] uppercase font-sans">
          Unitree
        </span>
        <span className="text-white/30 text-[11px] font-sans tracking-widest uppercase">
          Robotics
        </span>
      </div>
    </div>
  )
}

function ITVisual() {
  const codePattern = [
    { text: "const ai = new AlashedAI({", color: "#C586C0" },
    { text: '  model: "gpt-4o",', color: "#CE9178" },
    { text: "  stream: true,", color: "#9CDCFE" },
    { text: "});", color: "#C586C0" },
    { text: "", color: "" },
    { text: "const result = await ai.run({", color: "#DCDCAA" },
    { text: '  task: "analyze",', color: "#CE9178" },
    { text: "  data: payload,", color: "#9CDCFE" },
    { text: "});", color: "#DCDCAA" },
  ]

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#312E81] via-[#3730A3] to-[#1E1B4B] flex flex-col">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      {/* Top bar */}
      <div className="relative flex items-center gap-2 px-4 py-3 border-b border-white/[0.08]">
        <CodeIcon size={14} color="rgba(255,255,255,0.5)" strokeWidth={1.5} />
        <span className="text-white/50 text-[10px] font-mono">integration.ts</span>
      </div>
      {/* Code lines */}
      <div className="relative flex-1 p-4 flex flex-col gap-0.5">
        {codePattern.map((line, i) => (
          <div key={i} className="flex items-center gap-3 h-[18px]">
            <span className="text-[9px] font-mono text-white/20 w-3 text-right select-none">
              {i + 1}
            </span>
            {line.text ? (
              <span className="text-[10px] sm:text-[11px] font-mono whitespace-nowrap" style={{ color: line.color }}>
                {line.text}
              </span>
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
        ))}
      </div>
      {/* Status bar */}
      <div className="relative flex items-center justify-between px-4 py-2 border-t border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
          <span className="text-white/40 text-[9px] font-mono">AI Engine Ready</span>
        </div>
        <span className="text-white/30 text-[9px] font-mono">TypeScript</span>
      </div>
    </div>
  )
}

function TendonVisual() {
  const columns = [
    {
      title: "To Do",
      count: 3,
      tasks: [
        { text: "Настроить CI/CD", tag: "ops", tagColor: "#F59E0B" },
        { text: "Ревью PR #42", tag: "review", tagColor: "#6366F1" },
        { text: "Написать тесты", tag: "dev", tagColor: "#10B981" },
      ],
    },
    {
      title: "In Progress",
      count: 2,
      tasks: [
        { text: "API интеграция", tag: "dev", tagColor: "#10B981" },
        { text: "Стендап-бот", tag: "feature", tagColor: "#8B5CF6" },
      ],
    },
    {
      title: "Done",
      count: 2,
      tasks: [
        { text: "Auth модуль", tag: "dev", tagColor: "#10B981" },
        { text: "Деплой v2.1", tag: "ops", tagColor: "#F59E0B" },
      ],
    },
  ]

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#0F0B1A] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <GridViewIcon size={14} color="#A78BFA" strokeWidth={1.5} />
          <span className="text-white/70 text-[11px] font-semibold font-sans">Tendon Board</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
          <span className="text-[8px] font-bold text-[#A78BFA] uppercase tracking-wider">Live</span>
        </div>
      </div>
      {/* Columns */}
      <div className="flex-1 p-3 grid grid-cols-3 gap-2 overflow-hidden">
        {columns.map((col, ci) => (
          <div key={ci} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between px-1.5 mb-1">
              <span className="text-white/50 text-[9px] font-semibold font-sans uppercase tracking-wider">
                {col.title}
              </span>
              <span className="text-white/25 text-[9px] font-mono">{col.count}</span>
            </div>
            {col.tasks.map((task, ti) => (
              <div
                key={ti}
                className="px-2.5 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] flex flex-col gap-1"
              >
                <span className="text-white/70 text-[9px] sm:text-[10px] font-sans leading-tight">
                  {task.text}
                </span>
                <span
                  className="text-[7px] font-bold uppercase tracking-wider self-start px-1.5 py-0.5 rounded"
                  style={{
                    color: task.tagColor,
                    backgroundColor: `${task.tagColor}15`,
                  }}
                >
                  {task.tag}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function WikiVisual() {
  const docLines = [
    { type: "heading", text: "ESP32: Подключение датчика DHT22" },
    { type: "meta", text: "Обновлено 28.03.2026  ·  5 мин чтения" },
    { type: "text", text: "Подключите DHT22 к пину GPIO4 с резистором 10K." },
    { type: "code-label", text: "Пример кода:" },
    { type: "code", text: "from dht import DHT22" },
    { type: "code", text: "from machine import Pin" },
    { type: "code", text: "" },
    { type: "code", text: "sensor = DHT22(Pin(4))" },
    { type: "code", text: "sensor.measure()" },
    { type: "code", text: "print(sensor.temperature())" },
  ]

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-white border border-[rgba(55,50,47,0.08)] flex flex-col">
      {/* Nav bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[rgba(55,50,47,0.06)] bg-[#FAFAF9]">
        <div className="flex items-center gap-2">
          <SearchList01Icon size={14} color="#059669" strokeWidth={1.5} />
          <span className="text-[11px] font-semibold text-[#37322F] font-sans">Wiki Alashed</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#059669]/10">
          <span className="text-[8px] font-bold text-[#059669] uppercase tracking-wider">ESP32</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 p-4 flex flex-col gap-2 overflow-hidden">
        {docLines.map((line, i) => {
          if (line.type === "heading")
            return (
              <h4 key={i} className="text-[13px] sm:text-[15px] font-semibold text-[#1a1715] font-sans leading-tight">
                {line.text}
              </h4>
            )
          if (line.type === "meta")
            return (
              <p key={i} className="text-[9px] text-[#605A57]/60 font-sans -mt-1">
                {line.text}
              </p>
            )
          if (line.type === "text")
            return (
              <p key={i} className="text-[10px] sm:text-[11px] text-[#605A57] font-sans leading-relaxed mt-1">
                {line.text}
              </p>
            )
          if (line.type === "code-label")
            return (
              <p key={i} className="text-[9px] text-[#059669] font-semibold font-sans mt-1 uppercase tracking-wider">
                {line.text}
              </p>
            )
          if (line.type === "code")
            return (
              <div key={i} className={`flex items-center gap-2 ${i === 4 ? "mt-0.5 px-3 py-0 rounded-t-lg bg-[#1a1715]" : "px-3 py-0 bg-[#1a1715]"} ${i === docLines.length - 1 ? "rounded-b-lg pb-1.5" : ""} ${i === 4 ? "pt-1.5" : ""}`}>
                <span className="text-[9px] font-mono text-white/20 w-2 text-right select-none">
                  {i - 3}
                </span>
                {line.text ? (
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#A5D6A7] whitespace-nowrap">
                    {line.text}
                  </span>
                ) : (
                  <span className="h-[14px]">&nbsp;</span>
                )}
              </div>
            )
          return null
        })}
      </div>
    </div>
  )
}

function BizVisual() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#FFFBEB] via-white to-[#FEF3C7] border border-[rgba(217,119,6,0.12)] flex items-center justify-center">
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-white/40 z-10" />
      {/* Faded mockup behind */}
      <div className="absolute inset-4 rounded-xl border border-[rgba(217,119,6,0.08)] bg-white/60 flex flex-col overflow-hidden opacity-40">
        <div className="px-4 py-3 border-b border-[rgba(217,119,6,0.06)] flex items-center gap-2">
          <Briefcase01Icon size={14} color="#D97706" strokeWidth={1.5} />
          <span className="text-[11px] font-semibold text-[#37322F]/60 font-sans">Alashed BIZ</span>
        </div>
        <div className="flex-1 p-3 grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="rounded-lg bg-[#D97706]/[0.04] border border-[#D97706]/[0.06] h-16" />
          ))}
        </div>
      </div>
      {/* Coming soon badge */}
      <div className="relative z-20 flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-[#D97706]/10 border border-[#D97706]/20 flex items-center justify-center">
          <Briefcase01Icon size={28} color="#D97706" strokeWidth={1.2} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#D97706] text-[13px] font-bold font-sans tracking-wide">
            Alashed BIZ
          </span>
          <span className="px-3 py-1 rounded-full bg-[#D97706]/10 border border-[#D97706]/15 text-[#D97706] text-[10px] font-bold uppercase tracking-widest">
            Скоро
          </span>
        </div>
      </div>
    </div>
  )
}

/* ───────────────────────── visual router ───────────────────────── */

function ProductVisual({ type }: { type: Product["visual"] }) {
  switch (type) {
    case "edu":
      return <EduDemo />
    case "codestudio":
      return <CodeStudioDemo />
    case "hardware":
      return <HardwareDemo />
    case "unitree":
      return <UnitreeVisual />
    case "it":
      return <ITVisual />
    case "tendon":
      return <TendonVisual />
    case "wiki":
      return <WikiVisual />
    case "biz":
      return <BizVisual />
  }
}

/* ───────────────────── icon per product ───────────────────────── */

function productIcon(id: string, color: string): ReactNode {
  const props = { size: 14, color, strokeWidth: 1.5 }
  switch (id) {
    case "edu":
      return <SearchList01Icon {...props} />
    case "codestudio":
      return <CodeIcon {...props} />
    case "electronics":
      return <ChipIcon {...props} />
    case "unitree":
      return <StarIcon {...props} />
    case "it":
      return <CodeIcon {...props} />
    case "tendon":
      return <Clock01Icon {...props} />
    case "wiki":
      return <SearchList01Icon {...props} />
    case "biz":
      return <Briefcase01Icon {...props} />
    default:
      return null
  }
}

/* ───────────────────────── section row ───────────────────────── */

function ProductSection({ product, index }: { product: Product; index: number }) {
  const isEven = index % 2 === 1
  const bg = index % 2 === 0 ? "bg-white" : "bg-[#F7F5F3]"
  const isComingSoon = !!product.tag

  return (
    <section
      id={`product-${product.id}`}
      className={`relative w-full ${bg} overflow-hidden`}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-10 lg:gap-16`}
        >
          {/* ── Text side ── */}
          <div className="flex-1 flex flex-col items-start max-w-[500px]">
            {/* Accent label */}
            <ScrollReveal animation="fadeUp" delay={0}>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${product.accent}12` }}
                >
                  {productIcon(product.id, product.accent)}
                </div>
                <span
                  className="text-[12px] font-bold uppercase tracking-[0.1em] font-sans"
                  style={{ color: product.accent }}
                >
                  {product.name}
                </span>
                {product.tag && (
                  <span
                    className="ml-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest"
                    style={{
                      color: product.accent,
                      backgroundColor: `${product.accent}15`,
                      border: `1px solid ${product.accent}25`,
                    }}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h2 className="text-[#1a1715] text-[26px] sm:text-[32px] lg:text-[40px] font-normal font-serif leading-[1.1] tracking-[-0.025em] mb-4">
                {product.headline}
              </h2>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-[#605A57] text-[14px] sm:text-[16px] leading-[1.7] font-sans mb-8 max-w-[440px]">
                {product.description}
              </p>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal animation="fadeUp" delay={0.3}>
              {isComingSoon ? (
                <div className="flex items-center gap-2 text-[#605A57]/50 text-[14px] font-sans">
                  <Clock01Icon size={16} color="#605A57" strokeWidth={1.5} />
                  <span>Запуск в 2026</span>
                </div>
              ) : (
                <motion.a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-sans text-[14px] font-semibold transition-colors"
                  style={{ color: product.accent }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <span className="border-b border-current/0 group-hover:border-current transition-[border-color] duration-200">
                    {product.href.replace("https://", "")}
                  </span>
                  <ArrowRight02Icon size={16} color={product.accent} strokeWidth={2} />
                </motion.a>
              )}
            </ScrollReveal>
          </div>

          {/* ── Visual side ── */}
          <div className="flex-1 w-full max-w-[560px]">
            <ScrollReveal animation="scaleIn" delay={0.15}>
              <div
                className="relative w-full rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08),0_0_0_1px_rgba(55,50,47,0.04)]"
                style={{ minHeight: "340px", aspectRatio: "4/3" }}
              >
                <ProductVisual type={product.visual} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── main export ───────────────────────── */

export default function ProductsShowcase() {
  return (
    <div>
      {products.map((product, i) => (
        <ProductSection key={product.id} product={product} index={i} />
      ))}
    </div>
  )
}
