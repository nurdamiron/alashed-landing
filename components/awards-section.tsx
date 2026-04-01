import { StarIcon } from "hugeicons-react"

const awards = [
  {
    iconPath: "M6 1l1.2 2.4 2.7.4-1.95 1.9.46 2.7L6 7.25 3.57 8.44l.46-2.7L2.1 3.84l2.7-.4L6 1z",
    title: "Infomatrix Asia",
    subtitle: "Партнёр соревнования",
    desc: "Помогаем школам готовить команды к международному уровню",
    color: "#D97706",
    bg: "#FEF3C7",
  },
  {
    iconPath: "M2 10V7a4 4 0 018 0v3M1 10h10M6 10v2",
    title: "KazRobotics",
    subtitle: "Соорганизатор",
    desc: "Национальные соревнования по робототехнике среди школьников",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    iconPath: "M2 2h8v6H2zM4 8v2M8 8v2M3 11h6",
    title: "ITFest Kazakhstan",
    subtitle: "Технический партнёр",
    desc: "Ежегодный IT-фестиваль для молодёжи Казахстана",
    color: "#1A6FA8",
    bg: "#EBF7FF",
  },
  {
    iconPath: "M6 1C3.2 1 1 3.2 1 6s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zM6 3v3l2 1",
    title: "WRO",
    subtitle: "World Robot Olympiad",
    desc: "Поддержка участия казахстанских школ в мировых соревнованиях",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    iconPath: "M1 9V3a1 1 0 011-1h8a1 1 0 011 1v6M1 6h10M4 2v4M7 2v4",
    title: "ГОСО 2026",
    subtitle: "Полное соответствие",
    desc: "Платформа проверена на соответствие новым государственным стандартам",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    iconPath: "M3 5h6M3 7h4M1 1h10v10H1zM8 5v4",
    title: "Arduino",
    subtitle: "Official Partner",
    desc: "Официальный авторизованный партнёр в Казахстане",
    color: "#00979D",
    bg: "#ECFDF5",
  },
]

export default function AwardsSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] flex flex-col justify-start items-center gap-4">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[#5BB8F5]/30">
            <StarIcon size={12} color="#2E9DE0" />
            <div className="text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Партнёрства
            </div>
          </div>
          <div className="self-stretch text-center text-[#49423D] text-2xl md:text-[28px] font-semibold leading-tight font-sans tracking-tight">
            Признание и партнёры
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Мы активно участвуем в образовательной экосистеме Казахстана.
          </div>
        </div>
      </div>

      {/* Awards grid */}
      <div className="self-stretch flex justify-center items-start">
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-l border-r border-[rgba(55,50,47,0.12)]">
          {awards.map((award, index) => {
            const isLastRow = index >= awards.length - 3
            const isLastCol = (index + 1) % 3 === 0
            return (
              <div
                key={index}
                className={`px-8 py-8 flex flex-col gap-3 ${!isLastRow ? "border-b" : ""} ${!isLastCol ? "border-r" : ""} border-[rgba(55,50,47,0.12)]`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: award.bg }}
                >
                  <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={award.iconPath} stroke={award.color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[#37322F] text-base font-semibold leading-5 font-sans">{award.title}</div>
                  <div
                    className="text-xs font-semibold font-sans mt-0.5"
                    style={{ color: award.color }}
                  >
                    {award.subtitle}
                  </div>
                </div>
                <p className="text-[rgba(55,50,47,0.65)] text-sm font-normal leading-5 font-sans">
                  {award.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
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
