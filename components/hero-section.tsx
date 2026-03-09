export function HeroSection() {
  return (
    <section className="relative pt-[216px] pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Content */}
          <div className="max-w-[937px] flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[748px] text-center text-[#37322f] text-5xl md:text-[80px] font-normal leading-tight md:leading-[96px] font-serif">
                Полная STEM-экосистема
                <br />
                для школ Казахстана
              </h1>
              <p className="max-w-[506px] text-center text-[#37322f]/80 text-lg font-medium leading-7">
                AI-помощник для учителей, браузерное IDE для робототехники,
                официальный импорт оборудования — всё в одной платформе.
              </p>
            </div>
          </div>

          {/* Trust bar */}
          <div className="flex items-center gap-2 text-[rgba(55,50,47,0.60)] text-sm font-medium">
            <span className="inline-flex items-center gap-1">ГОСО 2026 <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            <span className="w-1 h-1 rounded-full bg-[rgba(55,50,47,0.30)]"></span>
            <span>50+ школ</span>
            <span className="w-1 h-1 rounded-full bg-[rgba(55,50,47,0.30)]"></span>
            <span>Казахстан</span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center gap-4">
            <a
              href="https://edu.alashed.kz"
              className="h-10 px-12 bg-[#5BB8F5] hover:bg-[#2E9DE0] text-white rounded-full font-semibold text-sm transition-colors flex items-center gap-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
            >
              Попробовать бесплатно
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="h-10 px-8 bg-white hover:bg-[#F7F5F3] text-[#37322F] rounded-full font-medium text-sm transition-colors flex items-center shadow-[0px_1px_2px_rgba(55,50,47,0.12)]"
            >
              Запросить демо
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
