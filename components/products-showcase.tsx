"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
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
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const specs = [
    { label: "Go2", detail: "15kg", delay: 1.0 },
    { label: "H1", detail: "Humanoid", delay: 1.6 },
    { label: "G1", detail: "Industrial", delay: 2.2 },
  ]

  return (
    <div
      ref={ref}
      className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#1a1715] via-[#2a2520] to-[#0d0c0b] flex items-center justify-center"
    >
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
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
      />

      {/* Robot silhouette */}
      <div className="relative flex flex-col items-center">
        {/* Body */}
        <motion.div
          className="w-16 h-24 rounded-lg bg-white/[0.08] border border-white/[0.12] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Head */}
          <motion.div
            className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-5 rounded-t-lg bg-white/[0.10] border border-white/[0.12] border-b-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
          {/* Eye dots */}
          <motion.div
            className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>

        {/* Walking legs — 4 dots that alternate up/down */}
        <div className="flex gap-3 mt-2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-white/70"
              animate={isInView ? {
                y: [0, -8, 0, 8, 0],
              } : {}}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Ground line */}
        <motion.div
          className="w-32 h-px bg-white/10 mt-3"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        {/* Floating specs */}
        <div className="flex gap-4 mt-6">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-0.5"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: spec.delay, duration: 0.5 }}
            >
              <span className="text-white/80 text-[11px] font-bold font-sans tracking-wide">
                {spec.label}
              </span>
              <span className="text-white/30 text-[9px] font-sans">
                {spec.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ITVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [showDeployed, setShowDeployed] = useState(false)

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

  useEffect(() => {
    if (!isInView) return
    const timer = setTimeout(() => setShowDeployed(true), (codePattern.length * 0.18 + 0.6) * 1000)
    return () => clearTimeout(timer)
  }, [isInView, codePattern.length])

  return (
    <div
      ref={ref}
      className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#312E81] via-[#3730A3] to-[#1E1B4B] flex flex-col"
    >
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
      {/* Code lines — typed in sequentially */}
      <div className="relative flex-1 p-4 flex flex-col gap-0.5">
        {codePattern.map((line, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 h-[18px]"
            initial={{ opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.18 + 0.3, duration: 0.3, ease: "easeOut" }}
          >
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
            {/* Blinking cursor on the last line */}
            {i === codePattern.length - 1 && !showDeployed && (
              <motion.span
                className="inline-block w-[6px] h-[12px] bg-white/70 ml-0.5"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 1] }}
              />
            )}
          </motion.div>
        ))}

        {/* Deployed badge */}
        <AnimatePresence>
          {showDeployed && (
            <motion.div
              className="flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-md bg-[#10B981]/15 border border-[#10B981]/25 self-start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <motion.path
                  d="M2.5 6L5 8.5L9.5 3.5"
                  stroke="#10B981"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
              </svg>
              <span className="text-[#10B981] text-[10px] font-mono font-semibold">Deployed</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Status bar */}
      <div className="relative flex items-center justify-between px-4 py-2 border-t border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#818CF8]"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-white/40 text-[9px] font-mono">AI Engine Ready</span>
        </div>
        <span className="text-white/30 text-[9px] font-mono">TypeScript</span>
      </div>
    </div>
  )
}

function TendonVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [phase, setPhase] = useState(0) // 0: all in ToDo, 1: one moves to InProgress, 2: it moves to Done

  interface Task {
    id: string
    text: string
    tag: string
    tagColor: string
  }

  const allTasks: Task[] = [
    { id: "t1", text: "Настроить CI/CD", tag: "ops", tagColor: "#F59E0B" },
    { id: "t2", text: "Ревью PR #42", tag: "review", tagColor: "#6366F1" },
    { id: "t3", text: "Написать тесты", tag: "dev", tagColor: "#10B981" },
  ]

  useEffect(() => {
    if (!isInView) return
    const timer1 = setTimeout(() => setPhase(1), 1500)
    const timer2 = setTimeout(() => setPhase(2), 3000)
    const timer3 = setTimeout(() => setPhase(0), 5000)
    // Loop the animation
    const interval = setInterval(() => {
      setPhase(0)
      setTimeout(() => setPhase(1), 1500)
      setTimeout(() => setPhase(2), 3000)
    }, 5000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearInterval(interval)
    }
  }, [isInView])

  const todoTasks = phase === 0 ? allTasks : phase === 1 ? [allTasks[1], allTasks[2]] : [allTasks[2]]
  const inProgressTasks = phase === 1 ? [allTasks[0]] : []
  const doneTasks = phase === 2 ? [allTasks[0], allTasks[1]] : []

  const completedCount = doneTasks.length
  const progressPercent = (completedCount / allTasks.length) * 100

  const columns = [
    { title: "To Do", tasks: todoTasks },
    { title: "In Progress", tasks: inProgressTasks },
    { title: "Done", tasks: doneTasks },
  ]

  function TaskCard({ task }: { task: Task }) {
    return (
      <motion.div
        layout
        layoutId={task.id}
        className="px-2.5 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] flex flex-col gap-1"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
      </motion.div>
    )
  }

  return (
    <div ref={ref} className="w-full h-full rounded-2xl overflow-hidden relative bg-[#0F0B1A] flex flex-col">
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

      {/* Progress bar */}
      <div className="px-4 pt-2">
        <div className="w-full h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-[#8B5CF6]"
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-white/25 text-[8px] font-mono">Progress</span>
          <span className="text-[#A78BFA] text-[8px] font-mono font-semibold">
            {completedCount}/{allTasks.length}
          </span>
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
              <span className="text-white/25 text-[9px] font-mono">{col.tasks.length}</span>
            </div>
            <AnimatePresence mode="popLayout">
              {col.tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

function WikiVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

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

  // Stagger delays: heading first, then each line progressively
  const getDelay = (i: number) => {
    if (i === 0) return 0.2 // heading slides in first
    if (i <= 2) return 0.3 + i * 0.15 // meta & text fade in
    if (i === 3) return 0.8 // code-label
    return 0.9 + (i - 4) * 0.12 // code block slides up line by line
  }

  return (
    <div
      ref={ref}
      className="w-full h-full rounded-2xl overflow-hidden relative bg-white border border-[rgba(55,50,47,0.08)] flex flex-col"
    >
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
      <div className="flex-1 p-4 flex flex-col gap-2 overflow-hidden relative">
        {docLines.map((line, i) => {
          const delay = getDelay(i)

          if (line.type === "heading")
            return (
              <motion.h4
                key={i}
                className="text-[13px] sm:text-[15px] font-semibold text-[#1a1715] font-sans leading-tight"
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay, duration: 0.4, ease: "easeOut" }}
              >
                {line.text}
              </motion.h4>
            )
          if (line.type === "meta")
            return (
              <motion.p
                key={i}
                className="text-[9px] text-[#605A57]/60 font-sans -mt-1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay, duration: 0.3 }}
              >
                {line.text}
              </motion.p>
            )
          if (line.type === "text")
            return (
              <motion.p
                key={i}
                className="text-[10px] sm:text-[11px] text-[#605A57] font-sans leading-relaxed mt-1"
                initial={{ opacity: 0, y: 6 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay, duration: 0.35 }}
              >
                {line.text}
              </motion.p>
            )
          if (line.type === "code-label")
            return (
              <motion.p
                key={i}
                className="text-[9px] text-[#059669] font-semibold font-sans mt-1 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay, duration: 0.3 }}
              >
                {line.text}
              </motion.p>
            )
          if (line.type === "code")
            return (
              <motion.div
                key={i}
                className={`flex items-center gap-2 ${i === 4 ? "mt-0.5 px-3 py-0 rounded-t-lg bg-[#1a1715]" : "px-3 py-0 bg-[#1a1715]"} ${i === docLines.length - 1 ? "rounded-b-lg pb-1.5" : ""} ${i === 4 ? "pt-1.5" : ""}`}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay, duration: 0.3, ease: "easeOut" }}
              >
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
              </motion.div>
            )
          return null
        })}

        {/* Scroll indicator */}
        <motion.div
          className="absolute right-2 top-1/3 flex flex-col items-center gap-0.5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.4 }}
        >
          <motion.div
            className="w-1 h-6 rounded-full bg-[#059669]/20 relative overflow-hidden"
          >
            <motion.div
              className="w-full h-2 rounded-full bg-[#059669]/50"
              animate={isInView ? { y: [0, 16, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function BizVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [typedText, setTypedText] = useState("")
  const fullText = "Coming 2025"

  useEffect(() => {
    if (!isInView) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setTypedText(fullText.slice(0, i))
      if (i >= fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [isInView])

  // Generate floating particle positions (deterministic)
  const particles = Array.from({ length: 12 }, (_, i) => ({
    x: (i * 37 + 13) % 100,
    y: (i * 53 + 7) % 100,
    size: 2 + (i % 3),
    delay: i * 0.3,
    duration: 3 + (i % 3),
  }))

  return (
    <div
      ref={ref}
      className="w-full h-full rounded-2xl overflow-hidden relative bg-[#1a1510] flex items-center justify-center"
    >
      {/* Animated rotating border gradient */}
      <div className="absolute inset-0 rounded-2xl p-px overflow-hidden">
        <motion.div
          className="absolute inset-[-50%] rounded-2xl"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, #D97706 25%, transparent 50%, #D97706 75%, transparent 100%)",
          }}
          animate={isInView ? { rotate: 360 } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-[1px] rounded-2xl bg-[#1a1510]" />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#D97706]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: 0,
          }}
          animate={isInView ? {
            opacity: [0, 0.4, 0],
            y: [0, -20, 0],
            x: [0, (i % 2 === 0 ? 8 : -8), 0],
          } : {}}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* BIZ text with pulse */}
        <motion.div
          className="text-[#D97706] text-[48px] font-bold font-sans tracking-[0.3em]"
          animate={isInView ? {
            textShadow: [
              "0 0 20px rgba(217,119,6,0)",
              "0 0 40px rgba(217,119,6,0.3)",
              "0 0 20px rgba(217,119,6,0)",
            ],
          } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          BIZ
        </motion.div>

        {/* Typing effect for "Coming 2025" */}
        <div className="flex items-center h-5">
          <span className="text-[#D97706]/60 text-[12px] font-mono tracking-widest uppercase">
            {typedText}
          </span>
          <motion.span
            className="inline-block w-[5px] h-[14px] bg-[#D97706]/60 ml-0.5"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 1] }}
          />
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
