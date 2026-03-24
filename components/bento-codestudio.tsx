"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"

export default function BentoCodeStudio() {
  const [codeVisible, setCodeVisible] = useState(0)
  const [deployed, setDeployed] = useState(false)
  const shouldReduceMotion = useReducedMotion()

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
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="flex items-center gap-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-semibold">Deployed</span>
          </motion.div>
        )}
      </div>

      <div className="flex-1 font-mono text-xs space-y-1">
        {codeVisible >= 1 && (
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.15 : 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-purple-400"
          >
            import machine
          </motion.div>
        )}
        {codeVisible >= 2 && (
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.1,
              duration: shouldReduceMotion ? 0.15 : 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-blue-400"
          >
            led = machine.Pin(2)
          </motion.div>
        )}
        {codeVisible >= 3 && (
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.2,
              duration: shouldReduceMotion ? 0.15 : 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-green-400"
          >
            led.on()
          </motion.div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <motion.div
          animate={deployed ? { scale: [1, 1.2, 1] } : {}}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={`flex-1 h-2 rounded-full ${deployed ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-700"}`}
        />
        <span className="text-gray-500 text-xs">ESP32</span>
      </div>
    </div>
  )
}
