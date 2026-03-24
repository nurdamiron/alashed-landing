"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"

export default function BentoJournal() {
  const [activeRow, setActiveRow] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const students = [
    { name: "Темирлан А.", grade: 5, color: "bg-green-500" },
    { name: "Айгерим К.", grade: 5, color: "bg-green-500" },
    { name: "Асель Н.", grade: 4, color: "bg-blue-500" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % students.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-gray-900 text-sm">Электронный журнал</h4>
          <p className="text-xs text-gray-600">5 "А" • Информатика</p>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full"
        />
      </div>

      <div className="flex-1 space-y-2">
        {students.map((student, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: activeRow === index ? (shouldReduceMotion ? 1 : 1.03) : 1,
              backgroundColor: activeRow === index ? "#ffffff" : "#f0fdf4",
            }}
            transition={{
              duration: shouldReduceMotion ? 0.15 : 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="p-3 rounded-lg border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-900">{student.name}</span>
              <motion.div
                animate={{
                  scale: activeRow === index ? (shouldReduceMotion ? 1 : 1.15) : 1,
                }}
                transition={{
                  type: shouldReduceMotion ? "tween" : "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className={`w-7 h-7 rounded-lg ${student.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
              >
                {student.grade}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2">
        <div className="flex-1 bg-white rounded-lg p-2 text-center border border-green-200">
          <div className="text-sm font-bold text-green-600">92%</div>
          <div className="text-xs text-gray-600">Успев.</div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-2 text-center border border-green-200">
          <div className="text-sm font-bold text-green-600">4.7</div>
          <div className="text-xs text-gray-600">Ср. балл</div>
        </div>
      </div>
    </div>
  )
}
