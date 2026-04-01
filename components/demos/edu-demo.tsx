"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const lessonPlanLines = [
  { label: "Предмет", value: "Информатика · 7 класс", delay: 0.3 },
  { label: "Тема", value: "Циклы и итерации в Python", delay: 0.6 },
  { label: "ОМ-код", value: "ИНФ.7.3.2.1 — ГОСО 2026", delay: 0.9 },
  { label: "Цель урока", value: "Применять циклы for/while для решения задач", delay: 1.2 },
]

const foTasks = [
  { text: "ФО: Напишите цикл, выводящий числа от 1 до 10", delay: 1.8 },
  { text: "ФО: Найдите ошибку в коде с бесконечным циклом", delay: 2.1 },
  { text: "БЖБ: Решите 3 задачи на вложенные циклы", delay: 2.4 },
]

function TypewriterText({ text, startDelay, isVisible }: { text: string; startDelay: number; isVisible: boolean }) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!isVisible) return
    const timer = setTimeout(() => setStarted(true), startDelay * 1000)
    return () => clearTimeout(timer)
  }, [isVisible, startDelay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(interval)
    }, 25)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[14px] bg-[#5BB8F5] animate-pulse ml-[1px] align-middle" />
      )}
    </span>
  )
}

export default function EduDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAiSpark, setShowAiSpark] = useState(false)

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setShowAiSpark(true), 200)
      return () => clearTimeout(t)
    }
  }, [isInView])

  return (
    <div ref={ref} className="w-full h-full rounded-lg overflow-hidden bg-white border border-[rgba(55,50,47,0.08)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(55,50,47,0.08)] bg-[#FAFAF9]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-[#5BB8F5] to-[#2E9DE0] flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3h6M2 5h4M2 7h3" stroke="white" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[11px] font-semibold text-[#37322F] font-sans">Alashed EDU</span>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={showAiSpark ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EBF7FF] border border-[#5BB8F5]/30"
        >
          <motion.svg
            width="10" height="10" viewBox="0 0 10 10" fill="none"
            animate={showAiSpark ? { rotate: [0, 15, -15, 0] } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <path d="M5 1l1 2.5L8.5 5 6 6l-1 2.5L4 6 1.5 5 4 3.5z" fill="#5BB8F5"/>
          </motion.svg>
          <span className="text-[9px] font-bold text-[#2E9DE0] uppercase tracking-wider">AI</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 sm:p-3 flex flex-col gap-1.5 sm:gap-2 overflow-hidden">
        {/* Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex items-start gap-2 p-1.5 sm:p-2 rounded-md bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)]"
        >
          <span className="text-[9px] sm:text-[10px] text-[#605A57] font-sans leading-relaxed">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="inline-block mr-1 align-middle flex-shrink-0"><path d="M1 4h5M4.5 2L6.5 4L4.5 6" stroke="#2E9DE0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-[#2E9DE0] font-medium align-middle">Сгенерируй КМЖ по теме &quot;Циклы в Python&quot;, 7 класс</span>
          </span>
        </motion.div>

        {/* Generated fields */}
        <div className="flex flex-col gap-1 sm:gap-1.5 mt-0.5 sm:mt-1">
          {lessonPlanLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: line.delay, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-2"
            >
              <span className="text-[8px] sm:text-[9px] font-medium text-[#2E9DE0] uppercase tracking-wider whitespace-nowrap font-sans sm:min-w-[60px]">
                {line.label}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#37322F] font-sans leading-snug">
                <TypewriterText text={line.value} startDelay={line.delay} isVisible={isInView} />
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.4 }}
          className="h-px bg-[rgba(55,50,47,0.08)] origin-left mt-1"
        />

        {/* FO tasks */}
        <div className="flex flex-col gap-0.5 sm:gap-1">
          {foTasks.map((task, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: task.delay, duration: 0.35 }}
              className="flex items-start gap-1.5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-[#EBF7FF]/50"
            >
              <motion.svg
                width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-0.5 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: task.delay + 0.2, type: "spring", stiffness: 500 }}
              >
                <rect x="1" y="1" width="8" height="8" rx="2" stroke="#5BB8F5" strokeWidth="1"/>
                <path d="M3 5l1.5 1.5L7 4" stroke="#5BB8F5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
              <span className="text-[9px] sm:text-[10px] text-[#37322F] font-sans leading-snug">{task.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
