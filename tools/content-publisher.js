#!/usr/bin/env node
/**
 * Alashed Landing — Content Publisher
 * Generates SEO/GEO/LLM-optimized articles for alashed.kz
 * Topics: STEM education Kazakhstan, Arduino/ESP32, CodeStudio, competitions, ГОСО 2026
 * Single language: Russian only (plain markdown, no MDX components)
 * Git push → GitHub Actions → FTP deploy to ps.kz
 */

require("dotenv").config({ path: require("path").join(__dirname, "../.env.local") });

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_DIR = path.join(__dirname, "..");
const STATE_FILE = path.join(REPO_DIR, "data/publisher-state.json");
const BLOG_DIR = path.join(REPO_DIR, "content/blog");
const INTERVAL_MS = 2 * 60 * 60 * 1000; // 2 hours between articles
const DAEMON = process.argv.includes("--daemon");

// ─── Topics ──────────────────────────────────────────────────────────────────
const TOPICS = [
  // ГОСО 2026 & Curriculum
  { id: "goso-2026-stem-predmety-izmenenia", category: "ГОСО 2026", title: "ГОСО 2026: какие изменения ждут STEM-предметы в школах Казахстана", tags: ["ГОСО 2026", "STEM", "учебный план", "Казахстан"] },
  { id: "goso-2026-informatika-novyi-standart", category: "ГОСО 2026", title: "Информатика по ГОСО 2026: новый стандарт и чего ждать учителям", tags: ["ГОСО 2026", "информатика", "стандарт", "учителя"] },
  { id: "goso-2026-robotehnika-shkola-kz", category: "ГОСО 2026", title: "Робототехника в школе по ГОСО 2026: что обязательно, что факультативно", tags: ["ГОСО 2026", "робототехника", "факультатив"] },
  { id: "goso-2026-tsifrovaya-gramotnost-nachalnaya", category: "ГОСО 2026", title: "Цифровая грамотность в начальных классах по ГОСО 2026: практическое руководство", tags: ["ГОСО 2026", "цифровая грамотность", "начальная школа"] },
  { id: "goso-2026-stem-otsenivanie-kriterii", category: "ГОСО 2026", title: "Критерии оценивания STEM-проектов по ГОСО 2026: примеры и шаблоны", tags: ["ГОСО 2026", "оценивание", "STEM", "критерии"] },
  { id: "goso-2026-vnedrenie-plan-direktora", category: "ГОСО 2026", title: "Как директору школы внедрить ГОСО 2026: пошаговый план на учебный год", tags: ["ГОСО 2026", "директор", "план внедрения"] },

  // Arduino / ESP32 / Hardware Projects
  { id: "esp32-wifi-home-automation-school", category: "Программирование", title: "ESP32 + Wi-Fi: система умного дома для школьного STEM-кружка", tags: ["ESP32", "Wi-Fi", "умный дом", "Arduino", "STEM"] },
  { id: "arduino-line-follower-robot-2026", category: "Программирование", title: "Робот-следователь линии на Arduino: пошаговая сборка 2026", tags: ["Arduino", "робот", "line follower", "сборка"] },
  { id: "esp32-cam-security-camera-school", category: "Программирование", title: "ESP32-CAM: камера наблюдения своими руками для школьного проекта", tags: ["ESP32-CAM", "камера", "проект", "безопасность"] },
  { id: "microbit-v2-stem-lesson-plan", category: "Программирование", title: "BBC micro:bit V2 в уроках STEM: готовые планы занятий для учителя", tags: ["micro:bit", "BBC", "уроки", "планы занятий"] },
  { id: "arduino-weather-station-outdoor", category: "Программирование", title: "Метеостанция на Arduino для улицы: BME280 + дисплей + логирование данных", tags: ["Arduino", "метеостанция", "BME280", "датчики"] },
  { id: "raspberry-pi-school-server-setup", category: "Программирование", title: "Raspberry Pi как школьный сервер: настройка за 1 вечер без бюджета", tags: ["Raspberry Pi", "сервер", "школа", "Linux"] },
  { id: "esp32-mqtt-iot-classroom-project", category: "Программирование", title: "IoT-проект для класса: ESP32 + MQTT + Node-RED — пошаговый туториал", tags: ["ESP32", "MQTT", "IoT", "Node-RED", "проект"] },
  { id: "arduino-cnc-plotter-school", category: "Программирование", title: "Мини-плоттер на Arduino: сборка ЧПУ из доступных деталей", tags: ["Arduino", "CNC", "плоттер", "ЧПУ"] },
  { id: "stm32-vs-arduino-school-comparison", category: "Программирование", title: "STM32 vs Arduino: что выбрать для школьного STEM-кружка в 2026", tags: ["STM32", "Arduino", "сравнение", "STEM"] },

  // Соревнования / Competitions
  { id: "first-lego-league-kazakhstan-2026", category: "Соревнования", title: "FIRST LEGO League 2026 в Казахстане: правила, темы, подготовка", tags: ["FIRST LEGO League", "соревнования", "Казахстан", "2026"] },
  { id: "world-robot-olympiad-kz-prep", category: "Соревнования", title: "World Robot Olympiad: как школе Казахстана попасть на международный финал", tags: ["WRO", "олимпиада", "роботы", "Казахстан"] },
  { id: "kazrobotics-2026-kategории-vozrast", category: "Соревнования", title: "KazRobotics 2026: полный разбор категорий, возраста и требований к роботам", tags: ["KazRobotics", "соревнования", "робототехника", "2026"] },
  { id: "stem-olimpiada-kz-podgotovka-6-mesyacev", category: "Соревнования", title: "Подготовка к STEM-олимпиаде за 6 месяцев: расписание и ресурсы", tags: ["олимпиада", "STEM", "подготовка", "расписание"] },
  { id: "codestudio-hack-kazakhstan-2026", category: "Соревнования", title: "CodeStudio Hackathon Kazakhstan 2026: как участвовать и выиграть", tags: ["CodeStudio", "хакатон", "Казахстан", "программирование"] },
  { id: "robotics-team-build-3-months", category: "Соревнования", title: "Собрать команду по робототехнике с нуля за 3 месяца: опыт казахстанских школ", tags: ["команда", "робототехника", "Казахстан", "опыт"] },
  { id: "online-coding-competitions-kz-2026", category: "Соревнования", title: "Онлайн-олимпиады по программированию для школьников Казахстана в 2026", tags: ["онлайн", "олимпиада", "программирование", "2026"] },

  // Alashed EDU / CodeStudio
  { id: "codestudio-python-beginner-path-2026", category: "Alashed EDU", title: "CodeStudio Python для начинающих: полный путь от нуля до проекта 2026", tags: ["CodeStudio", "Python", "начинающие", "курс"] },
  { id: "alashed-platform-teacher-guide-2026", category: "Alashed EDU", title: "Платформа Alashed: руководство учителя — классы, задания, прогресс 2026", tags: ["Alashed", "платформа", "учитель", "руководство"] },
  { id: "codestudio-scratch-primary-school", category: "Alashed EDU", title: "Scratch на CodeStudio: 10 проектов для начальной школы с пошаговым описанием", tags: ["Scratch", "CodeStudio", "начальная школа", "проекты"] },
  { id: "alashed-edu-student-progress-analytics", category: "Alashed EDU", title: "Аналитика успеваемости в Alashed EDU: как читать отчёты и помогать отстающим", tags: ["Alashed EDU", "аналитика", "успеваемость", "отчёты"] },
  { id: "codestudio-ai-course-school-kz", category: "Alashed EDU", title: "Курс по ИИ в CodeStudio для школьников: программа, задания, результаты", tags: ["CodeStudio", "ИИ", "курс", "школьники"] },
  { id: "alashed-gamification-stem-motivation", category: "Alashed EDU", title: "Геймификация в STEM-обучении: как Alashed повышает мотивацию учеников", tags: ["геймификация", "STEM", "мотивация", "Alashed"] },

  // Образование / Education Kazakhstan
  { id: "stem-shkola-almaty-reiting-2026", category: "Образование", title: "Топ STEM-школ Алматы 2026: рейтинг, программы и отзывы родителей", tags: ["STEM", "школы", "Алматы", "рейтинг", "2026"] },
  { id: "python-pervyi-urок-9-klass-kz", category: "Образование", title: "Первый урок Python в 9 классе по новому стандарту Казахстана: конспект и код", tags: ["Python", "9 класс", "урок", "Казахстан"] },
  { id: "stem-kuhnya-doma-roditelya-rebenok", category: "Образование", title: "STEM дома: 15 экспериментов на кухне для детей 7–12 лет без бюджета", tags: ["STEM дома", "эксперименты", "дети", "родители"] },
  { id: "uchitel-informatiki-burnout-kak-izbezhat", category: "Образование", title: "Выгорание учителя информатики: признаки, причины и как восстановиться", tags: ["учитель", "выгорание", "информатика", "психология"] },
  { id: "stem-granty-kazahstan-2026-ucheniki", category: "Образование", title: "Гранты и стипендии для STEM-учеников Казахстана в 2026: полный список", tags: ["гранты", "стипендии", "STEM", "Казахстан", "2026"] },
  { id: "cifrovoe-portfolio-uchenika-kz", category: "Образование", title: "Цифровое портфолио ученика в Казахстане: зачем нужно и как создать", tags: ["портфолио", "ученик", "цифровое", "Казахстан"] },
  { id: "stem-roditelskoe-sobranie-kak-provesti", category: "Образование", title: "Как провести родительское собрание по STEM: шаблон, вопросы и ответы", tags: ["родительское собрание", "STEM", "шаблон", "учитель"] },
  { id: "inclusive-stem-deti-s-ovz-kz", category: "Образование", title: "Инклюзивное STEM-образование для детей с ОВЗ в Казахстане: подходы 2026", tags: ["инклюзия", "ОВЗ", "STEM", "Казахстан"] },
  { id: "matematika-stem-proekty-7-klass", category: "Образование", title: "STEM-проекты на уроках математики в 7 классе: 8 идей с описанием", tags: ["математика", "STEM", "проекты", "7 класс"] },
  { id: "stem-letnyaya-shkola-almaty-2026", category: "Образование", title: "Летние STEM-школы в Алматы 2026: программы, стоимость, как поступить", tags: ["летняя школа", "STEM", "Алматы", "2026"] },

  // Hardware (hw) — школьное оборудование
  { id: "hw-3d-printer-school-first-setup", category: "Hardware", title: "Первый 3D-принтер в школе: выбор модели, настройка, первый урок", tags: ["3D-принтер", "школа", "настройка", "Hardware"] },
  { id: "hw-stem-lab-budget-500k-tenge", category: "Hardware", title: "STEM-кабинет за 500 000 тенге: реальный бюджет и список оборудования 2026", tags: ["STEM-кабинет", "бюджет", "тенге", "оборудование"] },
  { id: "hw-laser-cutter-school-safety", category: "Hardware", title: "Лазерный резак в школе: правила безопасности и первые проекты", tags: ["лазерный резак", "безопасность", "школа", "Hardware"] },
  { id: "hw-drone-stem-lesson-kz", category: "Hardware", title: "Дроны на уроках STEM в Казахстане: законодательство, оборудование, программа", tags: ["дрон", "STEM", "Казахстан", "урок"] },
  { id: "hw-vr-ar-school-kz-2026", category: "Hardware", title: "VR и AR в казахстанских школах 2026: реальные кейсы и стоимость внедрения", tags: ["VR", "AR", "школа", "Казахстан", "2026"] },
  { id: "hw-soldering-station-school-basics", category: "Hardware", title: "Паяльная станция в школьном кружке: базовый набор и первые упражнения", tags: ["паяльник", "пайка", "кружок", "Hardware"] },

  // Программирование
  { id: "python-turtle-10-proektov-shkola", category: "Программирование", title: "Python Turtle: 10 проектов для школьного урока с кодом и объяснениями", tags: ["Python", "Turtle", "проекты", "школа"] },
  { id: "scratch-3-igra-platformer-tutorial", category: "Программирование", title: "Scratch 3: создаём платформер — полный туториал для учеников 5–8 класса", tags: ["Scratch", "игра", "платформер", "туториал"] },
  { id: "javascript-first-game-school-kz", category: "Программирование", title: "Первая игра на JavaScript для школьника: Canvas, спрайты, управление", tags: ["JavaScript", "игра", "Canvas", "школа"] },
  { id: "git-github-school-intro-kz", category: "Программирование", title: "Git и GitHub для школьников Казахстана: зачем нужны и как начать", tags: ["Git", "GitHub", "школьники", "Казахстан"] },
  { id: "html-css-pervyi-sayt-shkola-kz", category: "Программирование", title: "Первый сайт на HTML/CSS: пошаговое руководство для школьников", tags: ["HTML", "CSS", "сайт", "школа"] },
  { id: "python-data-analysis-school-project", category: "Программирование", title: "Анализ данных на Python для школьного проекта: pandas, matplotlib, пример", tags: ["Python", "pandas", "анализ данных", "школа"] },
  { id: "blender-3d-design-school-kz", category: "Программирование", title: "Blender для школьников: бесплатный 3D-дизайн в STEM-проектах", tags: ["Blender", "3D", "дизайн", "STEM"] },
];

// ─── State ────────────────────────────────────────────────────────────────────
function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
  }
  return { topicIndex: 0, published: [] };
}

function saveState(state) {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

// ─── Perplexity API ───────────────────────────────────────────────────────────
async function generateArticle(topic) {
  const today = new Date().toISOString().slice(0, 10);

  const systemPrompt = `Ты — эксперт по STEM-образованию в Казахстане и опытный автор SEO/GEO/LLM-оптимизированных статей для образовательного портала alashed.kz.

Пиши ТОЛЬКО на чистом русском языке. Не используй английские вставки без необходимости. Не переводи содержимое на казахский.

СТИЛЬ:
- Практические советы, реальные примеры из казахстанских школ
- Данные за 2025–2026 годы (ГОСО 2026, актуальные инструменты)
- Структурированный текст: заголовки H2/H3, маркированные списки, примеры кода где уместно
- Никаких MDX-компонентов (StatGrid, InfoBox и т.д.) — только чистый Markdown
- Длина: 1200–1800 слов
- Формат: чистый Markdown без frontmatter`;

  const userPrompt = `Напиши полноценную SEO-статью для школы/учителя на тему:
«${topic.title}»

Категория: ${topic.category}
Теги: ${topic.tags.join(", ")}

Требования:
- H2 заголовки для разделов, H3 для подразделов
- Конкретные примеры применения в казахстанских школах
- Если тема связана с кодом — включи рабочий пример кода в блоке \`\`\`
- Практические советы, которые учитель может применить уже завтра
- Упомяни актуальные инструменты и ресурсы 2025–2026
- Финальный абзац: призыв к действию (изучить на Alashed EDU / попробовать на CodeStudio)

Пиши ТОЛЬКО на русском языке.`;

  const resp = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PERPLEXITY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sonar-pro",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 3000,
    }),
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Perplexity API ${resp.status}: ${err.slice(0, 200)}`);
  }

  const data = await resp.json();
  return data.choices[0].message.content.trim();
}

// ─── MDX / Markdown writer ────────────────────────────────────────────────────
function generateSlug(id) {
  return id; // already slug-ready
}

function calcReadTime(text) {
  const words = text.split(/\s+/).length;
  return Math.max(5, Math.round(words / 200));
}

const AUTHORS = ["nurdaluet-akhmatov", "beksultan-aiten", "dias-kabdualiev"];

function pickAuthor(index) {
  return AUTHORS[index % AUTHORS.length];
}

function writeMD(topic, body, authorIndex) {
  const slug = generateSlug(topic.id);
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.log(`  SKIP (exists): ${slug}`);
    return null;
  }

  const today = new Date().toISOString().slice(0, 10);
  const readTime = calcReadTime(body);
  const author = pickAuthor(authorIndex);
  const tagsJson = JSON.stringify(topic.tags);

  const frontmatter = `---
title: "${topic.title.replace(/"/g, '\\"')}"
description: "${body.slice(0, 160).replace(/\n/g, " ").replace(/"/g, '\\"').trim()}..."
category: "${topic.category}"
date: "${today}"
readTime: ${readTime}
author: "${author}"
tags: ${tagsJson}
image: "/blog/default-stem.webp"
---

`;

  fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.writeFileSync(filePath, frontmatter + body, "utf8");
  console.log(`  WROTE: ${slug}.mdx (${readTime} min read)`);
  return slug;
}

// ─── Git Push ─────────────────────────────────────────────────────────────────
function gitPush(slug) {
  try {
    if (!GITHUB_TOKEN) {
      console.log("  SKIP git push: GITHUB_TOKEN not set");
      return;
    }
    const file = `content/blog/${slug}.mdx`;
    if (!fs.existsSync(path.join(REPO_DIR, file))) return;

    execSync(`git -C "${REPO_DIR}" config user.email "bot@alashed.kz"`, { stdio: "pipe" });
    execSync(`git -C "${REPO_DIR}" config user.name "Alashed Bot"`, { stdio: "pipe" });
    execSync(
      `git -C "${REPO_DIR}" remote set-url origin https://${GITHUB_TOKEN}@github.com/nurdamiron/alashed-landing.git`,
      { stdio: "pipe" }
    );
    execSync(`git -C "${REPO_DIR}" add ${file}`, { stdio: "pipe" });
    execSync(`git -C "${REPO_DIR}" commit -m "feat(content): add ${slug}"`, { stdio: "pipe" });
    execSync(`git -C "${REPO_DIR}" push origin main`, { stdio: "pipe" });
    console.log(`  GIT PUSH OK: ${slug}`);
  } catch (e) {
    console.error(`  WARN git push: ${e.message.slice(0, 200)}`);
  }
}

// ─── Run one cycle ────────────────────────────────────────────────────────────
async function runCycle() {
  if (!PERPLEXITY_API_KEY) {
    console.error("ERROR: PERPLEXITY_API_KEY not set");
    return;
  }

  const state = loadState();
  const remaining = TOPICS.filter((t) => !state.published.includes(t.id));

  if (remaining.length === 0) {
    console.log("All topics published! Nothing to do.");
    return;
  }

  const topic = TOPICS[state.topicIndex % TOPICS.length];
  // Skip already published
  if (state.published.includes(topic.id)) {
    state.topicIndex++;
    saveState(state);
    return;
  }

  console.log(`\n[${new Date().toISOString()}] Generating: ${topic.title}`);

  try {
    const body = await generateArticle(topic);
    const slug = writeMD(topic, body, state.topicIndex);

    if (slug) {
      state.published.push(topic.id);
      saveState(state);
      gitPush(slug);
    }

    state.topicIndex++;
    saveState(state);
  } catch (err) {
    console.error(`  ERROR: ${err.message}`);
  }
}

// ─── Entry point ──────────────────────────────────────────────────────────────
if (DAEMON) {
  console.log(`Alashed Landing Publisher started (daemon mode, interval: ${INTERVAL_MS / 60000} min)`);
  runCycle();
  setInterval(runCycle, INTERVAL_MS);
} else {
  // Single run (for testing)
  runCycle().then(() => {
    console.log("Done.");
  });
}
