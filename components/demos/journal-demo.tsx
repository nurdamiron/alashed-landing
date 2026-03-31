"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const students = [
  { name: "Асанов А.", grades: [5, 4, 5, 5, 4], avg: 4.6, attendance: "98%" },
  { name: "Бекова Д.", grades: [4, 5, 4, 3, 5], avg: 4.2, attendance: "95%" },
  { name: "Касымов Н.", grades: [5, 5, 5, 4, 5], avg: 4.8, attendance: "100%" },
  { name: "Мухтарова С.", grades: [3, 4, 4, 4, 3], avg: 3.6, attendance: "92%" },
  { name: "Нуров Т.", grades: [4, 4, 5, 5, 4], avg: 4.4, attendance: "96%" },
]

function GradeCell({ grade, delay, isVisible }: { grade: number; delay: number; isVisible: boolean }) {
  const color = grade >= 5 ? "text-[#28C840] bg-[#28C840]/8" :
                grade >= 4 ? "text-[#2E9DE0] bg-[#2E9DE0]/8" :
                grade >= 3 ? "text-[#F5A623] bg-[#F5A623]/8" :
                "text-[#FF5F57] bg-[#FF5F57]/8"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, type: "spring", stiffness: 500, damping: 20 }}
      className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold font-sans ${color}`}
    >
      {grade}
    </motion.div>
  )
}

export default function JournalDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showStats, setShowStats] = useState(false)

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setShowStats(true), 2000)
      return () => clearTimeout(t)
    }
  }, [isInView])

  return (
    <div ref={ref} className="w-full h-full rounded-lg overflow-hidden bg-white border border-[rgba(55,50,47,0.08)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(55,50,47,0.06)] bg-[#FAFAF9]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="2" y="1" width="6" height="8" rx="0.5" stroke="white" strokeWidth="0.8"/>
              <path d="M4 3h2M4 5h2M4 7h1" stroke="white" strokeWidth="0.6" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[11px] font-semibold text-[#37322F] font-sans">Журнал · 7Б</span>
        </div>
        <span className="text-[9px] text-[#605A57] font-sans">Информатика</span>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-hidden">
        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex items-center gap-0 px-2 py-1.5 border-b border-[rgba(55,50,47,0.06)] bg-[#FAFAF9]"
        >
          <span className="w-[72px] text-[8px] font-medium text-[#605A57] uppercase tracking-wider font-sans flex-shrink-0">Ученик</span>
          {["10.03", "12.03", "14.03", "17.03", "19.03"].map((d, i) => (
            <span key={i} className="w-6 text-center text-[8px] text-[#605A57] font-mono flex-shrink-0">{d}</span>
          ))}
          <span className="w-8 text-center text-[8px] font-medium text-[#605A57] uppercase font-sans flex-shrink-0 ml-1">СР</span>
          <span className="flex-1 text-right text-[8px] font-medium text-[#605A57] uppercase font-sans">%</span>
        </motion.div>

        {/* Rows */}
        <div className="flex flex-col">
          {students.map((student, si) => (
            <motion.div
              key={si}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + si * 0.12, duration: 0.35 }}
              className="flex items-center gap-0 px-2 py-1 border-b border-[rgba(55,50,47,0.03)] hover:bg-[#F7F5F3]/50 transition-colors"
            >
              <span className="w-[72px] text-[10px] text-[#37322F] font-medium font-sans truncate flex-shrink-0">
                {student.name}
              </span>
              {student.grades.map((grade, gi) => (
                <div key={gi} className="w-6 flex justify-center flex-shrink-0">
                  <GradeCell
                    grade={grade}
                    delay={0.5 + si * 0.12 + gi * 0.08}
                    isVisible={isInView}
                  />
                </div>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={showStats ? { opacity: 1 } : {}}
                transition={{ delay: si * 0.05, duration: 0.3 }}
                className={`w-8 text-center text-[10px] font-bold font-sans flex-shrink-0 ml-1 ${
                  student.avg >= 4.5 ? "text-[#28C840]" : student.avg >= 4 ? "text-[#2E9DE0]" : "text-[#F5A623]"
                }`}
              >
                {student.avg}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={showStats ? { opacity: 1 } : {}}
                transition={{ delay: si * 0.05 + 0.1, duration: 0.3 }}
                className="flex-1 text-right text-[9px] text-[#605A57] font-sans"
              >
                {student.attendance}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom summary */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={showStats ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="px-3 py-2 border-t border-[rgba(55,50,47,0.06)] bg-[#FAFAF9] flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
            <span className="text-[8px] text-[#605A57] font-sans">Средний балл: 4.32</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2E9DE0]" />
            <span className="text-[8px] text-[#605A57] font-sans">Посещаемость: 96.2%</span>
          </div>
        </div>
        <motion.div
          animate={showStats ? { scale: [0.8, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
          className="px-1.5 py-0.5 rounded bg-[#28C840]/10 border border-[#28C840]/20"
        >
          <span className="text-[8px] font-bold text-[#28C840] font-sans">AI: +12% за четверть</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
