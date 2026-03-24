"use client"

import { useState, useEffect } from "react"

export default function BentoJournal() {
  const [activeRow, setActiveRow] = useState(0)

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
        <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>

      <div className="flex-1 space-y-2">
        {students.map((student, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 ${
              activeRow === index
                ? "scale-[1.03] bg-white"
                : "bg-[#f0fdf4]"
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-900">{student.name}</span>
              <div
                className={`w-7 h-7 rounded-lg ${student.color} flex items-center justify-center text-white font-bold text-sm shadow-md transition-transform duration-300 ${
                  activeRow === index ? "scale-115" : ""
                }`}
              >
                {student.grade}
              </div>
            </div>
          </div>
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

      <style jsx>{`
        .scale-115 {
          transform: scale(1.15);
        }
      `}</style>
    </div>
  )
}
