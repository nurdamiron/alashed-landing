"use client"

import { useState, useEffect } from "react"

export default function BentoAlashedEdu() {
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
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg animate-spin-slow">
          <svg width="20" height="20" fill="white">
            <path d="M10 3l7 4v6l-7 4-7-4V7l7-4z" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-sm">AI Copilot</h4>
          <p className="text-xs text-gray-600">Генерирует документы ГОСО 2026</p>
        </div>
      </div>

      <div className="space-y-3">
        {documents.map((doc, index) => (
          <div
            key={doc.id}
            className="bg-white rounded-lg p-3 shadow-md animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-900">{doc.name}</span>
              {doc.status === "completed" && (
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center animate-scale-in">
                  <svg width="12" height="12" fill="none">
                    <path d="M2 6l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              )}
              {doc.status === "generating" && (
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              )}
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-400 ease-out ${doc.status === "completed" ? "bg-green-500" : "bg-blue-500"}`}
                style={{ width: `${doc.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out backwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
