"use client"

import { useEffect, useState } from "react"

interface CodeStudioDemoProps {
  width?: number | string
  height?: number | string
  className?: string
}

export default function CodeStudioDemo({
  width = "100%",
  height = "100%",
  className = ""
}: CodeStudioDemoProps) {
  const [activeView, setActiveView] = useState<"editor" | "hardware">("editor")
  const [codeVisible, setCodeVisible] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveView((prev) => (prev === "editor" ? "hardware" : "editor"))
      setCodeVisible(0)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (activeView === "editor") {
      const lineTimer = setInterval(() => {
        setCodeVisible((prev) => (prev < 3 ? prev + 1 : prev))
      }, 500)
      return () => clearInterval(lineTimer)
    }
  }, [activeView])

  const codeLines = [
    { text: "import machine", color: "text-purple-400" },
    { text: "led = machine.Pin(2, machine.Pin.OUT)", color: "text-blue-400" },
    { text: "led.on()", color: "text-green-400" },
  ]

  return (
    <div className={className} style={{ width, height }}>
      <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 flex flex-col border border-slate-700 shadow-[0px_8px_24px_rgba(0,0,0,0.4)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-sm text-gray-400 font-mono">blink.py</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
            <span className="text-xs text-green-400 font-semibold">ESP32 Connected</span>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveView("editor")}
            className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeView === "editor"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-slate-700/50 text-gray-400 hover:bg-slate-700"
            }`}
          >
            Code Editor
          </button>
          <button
            onClick={() => setActiveView("hardware")}
            className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeView === "hardware"
                ? "bg-purple-500 text-white shadow-md"
                : "bg-slate-700/50 text-gray-400 hover:bg-slate-700"
            }`}
          >
            Hardware View
          </button>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeView === "editor" && (
            <div className="h-full bg-slate-800/80 rounded-lg p-4 font-mono text-sm backdrop-blur-sm border border-slate-700/50 animate-fade-in">
              <div className="space-y-2">
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 py-1 transition-all duration-300 ${
                      codeVisible > i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    }`}
                  >
                    <span className="text-gray-600 select-none w-5 text-right font-semibold">{i + 1}</span>
                    <span className={line.color}>{line.text}</span>
                  </div>
                ))}
              </div>

              {/* Deploy Button */}
              <button
                className={`mt-6 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 ${
                  codeVisible >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <svg width="14" height="14" fill="none" className="animate-bounce-gentle">
                  <path
                    d="M7 2v10M3 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Deploy to ESP32
              </button>
            </div>
          )}

          {activeView === "hardware" && (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 flex items-center justify-center mb-5 relative shadow-[0_0_20px_rgba(59,130,246,0.4)] animate-pulse-glow">
                <svg width="56" height="56" fill="none">
                  <rect x="14" y="14" width="28" height="28" rx="2" stroke="white" strokeWidth="2.5" />
                  <circle cx="21" cy="21" r="2.5" fill="white" />
                  <circle cx="35" cy="21" r="2.5" fill="white" />
                  <circle cx="21" cy="35" r="2.5" fill="white" />
                  <circle cx="35" cy="35" r="2.5" fill="white" />
                </svg>

                {/* Pulsing LED indicator */}
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 animate-pulse" />
              </div>

              <h4 className="text-white font-bold text-lg mb-2">ESP32 DevKit</h4>
              <p className="text-sm text-gray-400 mb-5">GPIO 2 • LED Blinking</p>

              <div className="flex gap-3">
                <div className="bg-slate-700/80 rounded-lg px-4 py-3 backdrop-blur-sm border border-slate-600/50">
                  <div className="text-xs text-gray-400 mb-1">Status</div>
                  <div className="text-sm font-semibold text-green-400 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Running
                  </div>
                </div>
                <div className="bg-slate-700/80 rounded-lg px-4 py-3 backdrop-blur-sm border border-slate-600/50">
                  <div className="text-xs text-gray-400 mb-1">Deploy</div>
                  <div className="text-sm font-semibold text-blue-400">1.2s</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(2px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.6);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 1.5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
