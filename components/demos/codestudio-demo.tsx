"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const codeLines = [
  { text: "from machine import Pin", color: "#C586C0" },
  { text: "import time", color: "#C586C0" },
  { text: "", color: "" },
  { text: "led = Pin(2, Pin.OUT)", color: "#9CDCFE" },
  { text: "button = Pin(4, Pin.IN)", color: "#9CDCFE" },
  { text: "", color: "" },
  { text: "while True:", color: "#C586C0" },
  { text: "    if button.value():", color: "#C586C0" },
  { text: "        led.on()", color: "#DCDCAA" },
  { text: "        time.sleep(0.5)", color: "#DCDCAA" },
  { text: "        led.off()", color: "#DCDCAA" },
]

const outputLines = [
  { text: ">>> Подключение к ESP32...", delay: 0 },
  { text: ">>> Устройство найдено на COM3", delay: 0.3 },
  { text: ">>> Загрузка main.py...", delay: 0.6 },
  { text: ">>> ✓ Код загружен успешно", delay: 1.0 },
  { text: ">>> LED мигает при нажатии", delay: 1.4 },
]

export default function CodeStudioDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [visibleLines, setVisibleLines] = useState(0)
  const [showOutput, setShowOutput] = useState(false)
  const [showDeploy, setShowDeploy] = useState(false)

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeLines.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 180)
    return () => clearInterval(interval)
  }, [isInView])

  useEffect(() => {
    if (visibleLines >= codeLines.length) {
      const t = setTimeout(() => setShowDeploy(true), 400)
      const t2 = setTimeout(() => setShowOutput(true), 800)
      return () => { clearTimeout(t); clearTimeout(t2) }
    }
  }, [visibleLines])

  return (
    <div ref={ref} className="w-full h-full rounded-lg overflow-hidden flex flex-col bg-[#1E1E1E] border border-[rgba(255,255,255,0.06)]">
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#2D2D2D] border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[10px] text-[rgba(255,255,255,0.5)] font-mono ml-2">main.py</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={showDeploy ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#28C840]/20 border border-[#28C840]/30"
          >
            <motion.div
              animate={showDeploy ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.3 }}
              className="w-1.5 h-1.5 rounded-full bg-[#28C840]"
            />
            <span className="text-[8px] font-bold text-[#28C840] uppercase tracking-wider">ESP32</span>
          </motion.div>
        </div>
      </div>

      {/* Editor area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Code */}
        <div className="flex-1 p-2 sm:p-3 overflow-hidden">
          <div className="flex flex-col gap-0">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={i < visibleLines ? { opacity: 1 } : {}}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5 sm:gap-2 h-[16px] sm:h-[18px]"
              >
                <span className="text-[8px] sm:text-[10px] font-mono text-[rgba(255,255,255,0.2)] w-3 sm:w-4 text-right select-none">
                  {i + 1}
                </span>
                {line.text ? (
                  <span className="text-[9px] sm:text-[11px] font-mono leading-none whitespace-nowrap" style={{ color: line.color }}>
                    {line.text}
                  </span>
                ) : (
                  <span>&nbsp;</span>
                )}
              </motion.div>
            ))}
            {visibleLines > 0 && visibleLines < codeLines.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-6 w-[6px] h-[14px] bg-white/80"
              />
            )}
          </div>
        </div>

        {/* Terminal output */}
        <motion.div
          initial={{ height: 0 }}
          animate={showOutput ? { height: "auto" } : {}}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="border-t border-[rgba(255,255,255,0.06)] bg-[#1A1A1A] overflow-hidden"
        >
          <div className="p-1.5 sm:p-2 flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
              <span className="text-[8px] sm:text-[9px] font-mono text-[rgba(255,255,255,0.3)] uppercase tracking-wider">Terminal</span>
            </div>
            {outputLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={showOutput ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: line.delay, duration: 0.2 }}
                className="flex items-center overflow-hidden"
              >
                <span className={`text-[8px] sm:text-[10px] font-mono leading-relaxed truncate ${
                  line.text.includes("✓") ? "text-[#28C840]" : "text-[rgba(255,255,255,0.5)]"
                }`}>
                  {line.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
