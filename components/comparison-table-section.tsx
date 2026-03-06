const features = [
  { name: "AI-генерация КМЖ, БЖБ, ТЖБ", alashed: true, kundelik: false, manual: false },
  { name: "Привязка к ОМ-кодам ГОСО 2026", alashed: true, kundelik: false, manual: false },
  { name: "Электронный журнал", alashed: true, kundelik: true, manual: false },
  { name: "Браузерное IDE для робототехники", alashed: true, kundelik: false, manual: false },
  { name: "Официальный импорт оборудования", alashed: true, kundelik: false, manual: false },
  { name: "Аналитика для директора", alashed: true, kundelik: "partial", manual: false },
  { name: "Геймификация для учеников", alashed: true, kundelik: false, manual: false },
  { name: "Подготовка к соревнованиям", alashed: true, kundelik: false, manual: false },
  { name: "B2B тендеры и госзакупки", alashed: true, kundelik: true, manual: false },
  { name: "Бесплатный тариф", alashed: true, kundelik: false, manual: true },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-5 h-5 rounded-full bg-[#EBF7FF] flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2 2 4-4" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    )
  }
  if (value === "partial") {
    return (
      <div className="flex justify-center">
        <div className="w-5 h-5 rounded-full bg-[#FEF3C7] flex items-center justify-center">
          <div className="w-2 h-0.5 bg-[#D97706] rounded-full" />
        </div>
      </div>
    )
  }
  return (
    <div className="flex justify-center">
      <div className="w-5 h-5 rounded-full bg-[rgba(55,50,47,0.06)] flex items-center justify-center">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M2 2l4 4M6 2L2 6" stroke="rgba(55,50,47,0.30)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}

export default function ComparisonTableSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] flex flex-col justify-start items-center gap-4">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[#5BB8F5]/30">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="4" height="10" rx="0.5" stroke="#2E9DE0" strokeWidth="1"/>
              <rect x="7" y="1" width="4" height="10" rx="0.5" stroke="#2E9DE0" strokeWidth="1"/>
            </svg>
            <div className="text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Сравнение
            </div>
          </div>
          <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Alashed vs альтернативы
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Почему просто Кунделік или ручной подход уже не достаточно.
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="self-stretch flex justify-center items-start overflow-x-auto">
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block flex-shrink-0">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-[560px] border-l border-r border-[rgba(55,50,47,0.12)]">
          {/* Table header */}
          <div className="grid grid-cols-4 border-b border-[rgba(55,50,47,0.12)] bg-[rgba(55,50,47,0.02)]">
            <div className="px-6 py-4 text-[rgba(55,50,47,0.50)] text-xs font-semibold uppercase tracking-wide font-sans border-r border-[rgba(55,50,47,0.12)]">
              Функция
            </div>
            <div className="px-4 py-4 text-center border-r border-[rgba(55,50,47,0.12)]">
              <div className="text-[#1A6FA8] text-sm font-bold font-sans">Alashed</div>
              <div className="text-[#2E9DE0] text-[10px] font-semibold font-sans">полная платформа</div>
            </div>
            <div className="px-4 py-4 text-center border-r border-[rgba(55,50,47,0.12)]">
              <div className="text-[#37322F] text-sm font-semibold font-sans">Кунделік</div>
              <div className="text-[rgba(55,50,47,0.50)] text-[10px] font-normal font-sans">журнал</div>
            </div>
            <div className="px-4 py-4 text-center">
              <div className="text-[#37322F] text-sm font-semibold font-sans">Вручную</div>
              <div className="text-[rgba(55,50,47,0.50)] text-[10px] font-normal font-sans">без системы</div>
            </div>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 border-b border-[rgba(55,50,47,0.06)] ${index % 2 === 0 ? "" : "bg-[rgba(55,50,47,0.01)]"}`}
            >
              <div className="px-6 py-3.5 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans border-r border-[rgba(55,50,47,0.08)]">
                {feature.name}
              </div>
              <div className="px-4 py-3.5 border-r border-[rgba(55,50,47,0.08)]">
                <Cell value={feature.alashed} />
              </div>
              <div className="px-4 py-3.5 border-r border-[rgba(55,50,47,0.08)]">
                <Cell value={feature.kundelik} />
              </div>
              <div className="px-4 py-3.5">
                <Cell value={feature.manual} />
              </div>
            </div>
          ))}
        </div>

        <div className="w-12 self-stretch relative overflow-hidden hidden md:block flex-shrink-0">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
