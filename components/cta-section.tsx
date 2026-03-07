"use client"

export default function CTASection() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[586px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-2xl md:text-[32px] font-semibold leading-tight font-sans tracking-tight">
              Готовы трансформировать вашу школу?
            </div>
            <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
              Присоединяйтесь к пилоту 2025–2026. AI-документы, CodeStudio,
              <br />
              официальное оборудование — всё в одной платформе.
            </div>
          </div>
          <div className="w-full max-w-[497px] flex flex-col justify-center items-center gap-12">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="https://edu.alashed.kz/login" className="h-10 px-12 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full flex items-center gap-2 shadow-[0px_1px_3px_rgba(91,184,245,0.40)]">
                <span className="text-white text-[13px] font-semibold font-sans">Попробовать бесплатно</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="mailto:dias@alashed.kz" className="h-10 px-8 bg-white hover:bg-[#F7F5F3] text-[#37322F] rounded-full font-medium text-[13px] flex items-center shadow-[0px_1px_2px_rgba(55,50,47,0.12)] transition-colors">
                Связаться с командой
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
