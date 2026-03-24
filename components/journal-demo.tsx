"use client"

import { useEffect, useState } from "react"

interface JournalDemoProps {
  width?: number | string
  height?: number | string
  className?: string
}

export default function JournalDemo({
  width = "100%",
  height = "100%",
  className = ""
}: JournalDemoProps) {
  const [activeStudent, setActiveStudent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStudent((prev) => (prev + 1) % 4)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const students = [
    { name: "Темирлан А.", grades: [5, 5, 4, 5], avg: 4.8 },
    { name: "Айгерим К.", grades: [5, 4, 5, 5], avg: 4.8 },
    { name: "Асель Н.", grades: [4, 5, 5, 4], avg: 4.5 },
    { name: "Арман С.", grades: [5, 4, 4, 5], avg: 4.5 },
  ]

  const gradeColors: Record<number, string> = {
    5: "bg-green-500",
    4: "bg-blue-500",
    3: "bg-yellow-500",
  }

  return (
    <div className={className} style={{ width, height }}>
      <div className="w-full h-full bg-white rounded-2xl p-6 flex flex-col border border-[rgba(55,50,47,0.06)] shadow-[0px_2px_8px_rgba(55,50,47,0.08)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-bold text-[#37322F]">Электронный журнал</h3>
            <p className="text-xs text-[#605A57]">5 "А" • Информатика</p>
          </div>
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>

        {/* Students List */}
        <div className="flex-1 space-y-2">
          {students.map((student, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg border border-gray-200 transition-all duration-200 ${
                activeStudent === index ? "scale-[1.02] bg-[#f0f9ff]" : "bg-white"
              }`}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              <div className="flex-1">
                <div className="font-semibold text-[#37322F] text-sm">{student.name}</div>
              </div>

              {/* Grades */}
              <div className="flex gap-1.5">
                {student.grades.map((grade, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-lg ${gradeColors[grade]} text-white flex items-center justify-center text-sm font-bold shadow-sm transition-all duration-200 hover:scale-110 hover:rotate-3 cursor-default ${
                      activeStudent === index ? "scale-100" : "scale-90"
                    }`}
                    style={{
                      transitionDelay: activeStudent === index ? `${i * 60}ms` : "0ms",
                    }}
                  >
                    {grade}
                  </div>
                ))}
              </div>

              {/* Average */}
              <div className="w-12 text-center">
                <div className="text-sm font-bold text-purple-600">{student.avg}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-4 flex gap-3">
          <div className="flex-1 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 text-center border border-green-200 transition-all duration-200 hover:scale-105 hover:border-green-300">
            <div className="text-lg font-bold text-green-700">92%</div>
            <div className="text-xs text-green-600">Успеваемость</div>
          </div>

          <div className="flex-1 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 text-center border border-blue-200 transition-all duration-200 hover:scale-105 hover:border-blue-300">
            <div className="text-lg font-bold text-blue-700">4.7</div>
            <div className="text-xs text-blue-600">Средний балл</div>
          </div>
        </div>
      </div>
    </div>
  )
}
