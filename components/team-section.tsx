const team = [
  {
    name: "Нурдаулет Ахматов",
    role: "CEO & Co-Founder",
    focus: "Auth, Users, Schools, AI (50%)",
    github: "nurdamiron",
    initials: "НА",
    color: "#1A6FA8",
    bg: "#EBF7FF",
  },
  {
    name: "Бексултан Айтен",
    role: "CTO & Co-Founder",
    focus: "Store, Support, Gamification (45%)",
    github: "Alash engineer",
    initials: "БА",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    name: "Диас Кабдуалиев",
    role: "Head of Partnerships",
    focus: "Curriculum, Lessons, B2B (5%)",
    github: "Dias Kabdualiyev",
    initials: "ДК",
    color: "#D97706",
    bg: "#FEF3C7",
  },
]

export default function TeamSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] flex flex-col justify-start items-center gap-4">
          <div className="px-[14px] py-[6px] bg-[#EBF7FF] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[#5BB8F5]/30">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="2" stroke="#2E9DE0" strokeWidth="1"/>
              <circle cx="8" cy="4" r="2" stroke="#2E9DE0" strokeWidth="1"/>
              <path d="M1 10c0-2 1.3-3 3-3h4c1.7 0 3 1 3 3" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <div className="text-[#2E9DE0] text-xs font-semibold leading-3 font-sans tracking-wide uppercase">
              Команда
            </div>
          </div>
          <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Люди за платформой
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Мы из Казахстана, строим для казахстанских школ. Знаем боль изнутри.
          </div>
        </div>
      </div>

      {/* Team cards */}
      <div className="self-stretch flex justify-center items-start">
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row border-l border-r border-[rgba(55,50,47,0.12)]">
          {team.map((member, index) => (
            <div
              key={index}
              className={`flex-1 px-8 py-10 flex flex-col gap-5 border-b md:border-b-0 ${index < team.length - 1 ? "md:border-r" : ""} border-[rgba(55,50,47,0.12)]`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold font-sans flex-shrink-0"
                  style={{ background: member.bg, color: member.color }}
                >
                  {member.initials}
                </div>
                <div>
                  <div className="text-[#37322F] text-base font-semibold leading-5 font-sans">{member.name}</div>
                  <div className="text-[#605A57] text-sm font-normal leading-5 font-sans mt-0.5">{member.role}</div>
                </div>
              </div>

              <p className="text-[rgba(55,50,47,0.70)] text-sm font-normal leading-6 font-sans">
                {member.focus}
              </p>

              <div
                className="self-start px-3 py-1 rounded-[99px] text-xs font-semibold font-sans border"
                style={{ color: member.color, background: member.bg, borderColor: `${member.color}20` }}
              >
                GitHub: {member.github}
              </div>
            </div>
          ))}
        </div>

        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
