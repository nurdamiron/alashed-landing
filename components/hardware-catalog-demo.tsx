"use client"

import { useEffect, useState } from "react"

interface HardwareCatalogDemoProps {
  width?: number | string
  height?: number | string
  className?: string
}

export default function HardwareCatalogDemo({
  width = "100%",
  height = "100%",
  className = ""
}: HardwareCatalogDemoProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setHoveredCard(index)
      index = (index + 1) % 3
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const products = [
    {
      name: "Arduino Uno",
      price: "15,000₸",
      stock: true,
      gradient: "from-cyan-500 to-blue-600",
      description: "Микроконтроллер для обучения"
    },
    {
      name: "ESP32",
      price: "8,500₸",
      stock: true,
      gradient: "from-purple-500 to-pink-600",
      description: "Wi-Fi + Bluetooth модуль"
    },
    {
      name: "Raspberry Pi",
      price: "45,000₸",
      stock: false,
      gradient: "from-orange-500 to-red-600",
      description: "Одноплатный компьютер"
    },
  ]

  return (
    <div className={className} style={{ width, height }}>
      <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl p-6 flex flex-col border border-[rgba(55,50,47,0.06)] shadow-[0px_2px_8px_rgba(55,50,47,0.08)]">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-[#37322F] mb-1">Каталог оборудования</h3>
          <p className="text-sm text-[#605A57]">Прямая поставка от производителя</p>
        </div>

        {/* Products */}
        <div className="flex-1 flex flex-col gap-3">
          {products.map((product, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer border border-gray-100 ${
                hoveredCard === index ? "scale-[1.02] -translate-y-0.5" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-600 ${
                    hoveredCard === index ? "rotate-360" : ""
                  }`}
                >
                  <svg width="28" height="28" fill="none">
                    <rect x="7" y="7" width="14" height="14" rx="1.5" stroke="white" strokeWidth="2" />
                    <circle cx="10" cy="10" r="1.5" fill="white" />
                    <circle cx="18" cy="10" r="1.5" fill="white" />
                    <circle cx="10" cy="18" r="1.5" fill="white" />
                    <circle cx="18" cy="18" r="1.5" fill="white" />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h4 className="font-bold text-[#37322F] mb-0.5">{product.name}</h4>
                  <p className="text-xs text-[#605A57] mb-2">{product.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-[#37322F]">{product.price}</span>
                    <div
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${
                        product.stock ? "bg-green-100" : "bg-yellow-100"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          product.stock ? "bg-green-500 animate-pulse" : "bg-yellow-500"
                        }`}
                      />
                      <span className={`text-xs font-semibold ${
                        product.stock ? "text-green-700" : "text-yellow-700"
                      }`}>
                        {product.stock ? "В наличии" : "Под заказ"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Add Button */}
                <div
                  className={`px-4 py-2 bg-gradient-to-r ${product.gradient} text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-200 ${
                    hoveredCard === index ? "opacity-100 scale-100" : "opacity-0 scale-80"
                  }`}
                >
                  Добавить
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3 text-center shadow border border-gray-100 transition-all duration-200 hover:scale-105 hover:border-purple-200">
            <div className="text-2xl font-bold text-[#37322F]">120+</div>
            <div className="text-xs text-[#605A57]">SKU в каталоге</div>
          </div>

          <div className="bg-white rounded-lg p-3 text-center shadow border border-gray-100 transition-all duration-200 hover:scale-105 hover:border-purple-200">
            <div className="text-2xl font-bold text-[#37322F]">7-14</div>
            <div className="text-xs text-[#605A57]">дней доставка</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rotate-360 {
          transform: rotate(360deg);
        }
      `}</style>
    </div>
  )
}
