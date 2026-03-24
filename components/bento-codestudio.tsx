"use client"

import { useState, useEffect } from "react"

export default function BentoCodeStudio() {
  const [codeVisible, setCodeVisible] = useState(0)
  const [deployed, setDeployed] = useState(false)

  useEffect(() => {
    if (codeVisible < 3) {
      const timer = setTimeout(() => setCodeVisible(codeVisible + 1), 800)
      return () => clearTimeout(timer)
    } else if (!deployed) {
      const timer = setTimeout(() => setDeployed(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [codeVisible, deployed])

  return (
    <div className="w-full h-full bg-[#1e1e1e] rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-xs font-mono ml-2">led_blink.py</span>
        </div>
        {deployed && (
          <div className="flex items-center gap-1.5 animate-scale-rotate">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-semibold">Deployed</span>
          </div>
        )}
      </div>

      <div className="flex-1 font-mono text-xs space-y-1">
        {codeVisible >= 1 && (
          <div className="text-purple-400 animate-slide-in" style={{ animationDelay: '0ms' }}>
            import machine
          </div>
        )}
        {codeVisible >= 2 && (
          <div className="text-blue-400 animate-slide-in" style={{ animationDelay: '100ms' }}>
            led = machine.Pin(2)
          </div>
        )}
        {codeVisible >= 3 && (
          <div className="text-green-400 animate-slide-in" style={{ animationDelay: '200ms' }}>
            led.on()
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div
          className={`flex-1 h-2 rounded-full transition-all duration-500 ${
            deployed ? "bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse-gentle" : "bg-gray-700"
          }`}
        />
        <span className="text-gray-500 text-xs">ESP32</span>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-rotate {
          from {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out backwards;
        }

        .animate-scale-rotate {
          animation: scale-rotate 0.4s ease-out;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
