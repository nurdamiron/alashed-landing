"use client"

import { useEffect, useState } from "react"

interface AlashedEduDemoProps {
  width?: number | string
  height?: number | string
  className?: string
}

export default function AlashedEduDemo({
  width = "100%",
  height = "100%",
  className = ""
}: AlashedEduDemoProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [generatingText, setGeneratingText] = useState("")
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3)
      setShowResult(false)
      setGeneratingText("")
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (activeTab === 0) {
      const text = "5.1.2.3 - Создавать алгоритмы решения задач"
      let index = 0
      const typingTimer = setInterval(() => {
        if (index < text.length) {
          setGeneratingText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(typingTimer)
          setTimeout(() => setShowResult(true), 500)
        }
      }, 40)
      return () => clearInterval(typingTimer)
    }
  }, [activeTab])

  const tabs = [
    { id: 0, name: "КМЖ", gradient: "from-emerald-500 to-teal-600", bg: "#ECFDF5", color: "#059669" },
    { id: 1, name: "ФО", gradient: "from-blue-500 to-cyan-600", bg: "#EBF7FF", color: "#2E9DE0" },
    { id: 2, name: "БЖБ", gradient: "from-purple-500 to-pink-600", bg: "#F5F3FF", color: "#7C3AED" },
  ]

  return (
    <div className={className} style={{ width, height }}>
      <div className="w-full h-full bg-white rounded-2xl p-6 flex flex-col border border-[rgba(55,50,47,0.06)] shadow-[0px_2px_8px_rgba(55,50,47,0.08)]">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? `text-white bg-gradient-to-r ${tab.gradient} shadow-sm`
                  : "text-[#605A57] hover:bg-[#F7F5F3]"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {activeTab === 0 && (
            <div className="space-y-4 animate-fade-in">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md animate-spin-slow">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2v14M2 9h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#37322F]">AI генерирует КМЖ</div>
                  <div className="text-xs text-[#605A57]">Информатика • 5 класс</div>
                </div>
              </div>

              {/* Generation Card */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 space-y-3 border border-emerald-200/50">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-emerald-700 mb-1.5">ОМ-код ГОСО 2026</div>
                    <div className="text-sm font-mono text-emerald-900 leading-relaxed">
                      {generatingText}
                      {!showResult && <span className="ml-0.5 animate-pulse">|</span>}
                    </div>
                  </div>
                </div>

                {showResult && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" fill="none">
                          <path d="M3 7l2.5 2.5 5.5-5.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-emerald-700 mb-1">Тема урока</div>
                        <div className="text-sm text-emerald-900">Алгоритмы: линейные и разветвляющиеся</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" fill="none">
                          <path d="M3 7l2.5 2.5 5.5-5.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-emerald-700 mb-1">Цель урока</div>
                        <div className="text-sm text-emerald-900">Научить учащихся составлять простые алгоритмы</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="flex gap-3">
                <div className="flex-1 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg px-3 py-3 text-center border border-emerald-200/50">
                  <div className="text-xl font-bold text-emerald-700">45 сек</div>
                  <div className="text-xs text-emerald-600 font-medium">Время генерации</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg px-3 py-3 text-center border border-teal-200/50">
                  <div className="text-xl font-bold text-teal-700">ГОСО</div>
                  <div className="text-xs text-teal-600 font-medium">Соответствие</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="flex-1 flex items-center justify-center animate-fade-in">
              <div className="text-center max-w-xs">
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg animate-pulse-gentle">
                  <svg width="40" height="40" fill="none">
                    <path d="M10 14h20M10 20h16M10 26h20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#37322F] mb-2">Формативное оценивание</h3>
                <p className="text-sm text-[#605A57] leading-relaxed">AI создает критерии оценки по ГОСО 2026 с дескрипторами</p>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="flex-1 flex items-center justify-center animate-fade-in">
              <div className="text-center max-w-xs">
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg animate-pulse-gentle">
                  <svg width="40" height="40" fill="none">
                    <rect x="8" y="8" width="24" height="24" rx="2" stroke="white" strokeWidth="2.5" />
                    <path d="M14 20l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#37322F] mb-2">БЖБ тесты</h3>
                <p className="text-sm text-[#605A57] leading-relaxed">Автоматическая генерация вопросов с ответами и баллами</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
