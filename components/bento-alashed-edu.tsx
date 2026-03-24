"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"

export default function BentoAlashedEdu() {
  const shouldReduceMotion = useReducedMotion()
  const [documents, setDocuments] = useState([
    { id: 1, name: "КМЖ", status: "completed", progress: 100 },
    { id: 2, name: "ФО", status: "generating", progress: 60 },
    { id: 3, name: "БЖБ", status: "pending", progress: 0 },
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setDocuments((prev) =>
        prev.map((doc) => {
          if (doc.status === "generating") {
            if (doc.progress >= 100) {
              return { ...doc, status: "completed", progress: 100 }
            }
            return { ...doc, progress: Math.min(doc.progress + 10, 100) }
          }
          if (doc.status === "pending" && prev.find((d) => d.id === doc.id - 1)?.status === "completed") {
            return { ...doc, status: "generating", progress: 10 }
          }
          return doc
        })
      )
    }, 200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg"
        >
          <svg width="20" height="20" fill="white">
            <path d="M10 3l7 4v6l-7 4-7-4V7l7-4z" />
          </svg>
        </motion.div>
        <div>
          <h4 className="font-bold text-gray-900 text-sm">AI Copilot</h4>
          <p className="text-xs text-gray-600">Генерирует документы ГОСО 2026</p>
        </div>
      </div>

      <div className="space-y-3">
        {documents.map((doc) => (
          <motion.div
            key={doc.id}
            initial={{ x: shouldReduceMotion ? 0 : -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: shouldReduceMotion ? 0 : doc.id * 0.15,
              duration: shouldReduceMotion ? 0.2 : 0.4,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="bg-white rounded-lg p-3 shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-900">{doc.name}</span>
              {doc.status === "completed" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
                >
                  <svg width="12" height="12" fill="none">
                    <path d="M2 6l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </motion.div>
              )}
              {doc.status === "generating" && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
                />
              )}
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${doc.progress}%` }}
                transition={{
                  duration: shouldReduceMotion ? 0.15 : 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={`h-full ${doc.status === "completed" ? "bg-green-500" : "bg-blue-500"}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
