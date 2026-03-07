export const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  "ГОСО 2026":        { text: "#DC2626", bg: "#FEF2F2", border: "#FCA5A5" },
  "Программирование": { text: "#059669", bg: "#ECFDF5", border: "#6EE7B7" },
  "Соревнования":     { text: "#D97706", bg: "#FEF3C7", border: "#FCD34D" },
  "Alashed EDU":      { text: "#1A6FA8", bg: "#EBF7FF", border: "#5BB8F5" },
  "Образование":      { text: "#7C3AED", bg: "#F5F3FF", border: "#C4B5FD" },
  "Hardware":         { text: "#EA580C", bg: "#FFF7ED", border: "#FDBA74" },
}

export interface Author {
  name: string
  role: string
  initials: string
  color: string
  bg: string
}

export const categorySlugMap: Record<string, string> = {
  "goso-2026": "ГОСО 2026",
  "programmirovanie": "Программирование",
  "sorevnovaniya": "Соревнования",
  "alashed-edu": "Alashed EDU",
  "obrazovanie": "Образование",
  "hardware": "Hardware",
}

export const categoryToSlug: Record<string, string> = Object.fromEntries(
  Object.entries(categorySlugMap).map(([slug, name]) => [name, slug])
)

export const authors: Record<string, Author> = {
  "nurdaluet-akhmatov": {
    name: "Нурдаулет Ахматов",
    role: "CEO, Alashed",
    initials: "НА",
    color: "#1A6FA8",
    bg: "#EBF7FF",
  },
  "beksultan-aiten": {
    name: "Бексултан Айтен",
    role: "CTO, Alashed",
    initials: "БА",
    color: "#059669",
    bg: "#ECFDF5",
  },
  "dias-kabdualiev": {
    name: "Диас Кабдуалиев",
    role: "Head of Partnerships, Alashed",
    initials: "ДК",
    color: "#D97706",
    bg: "#FEF3C7",
  },
}
