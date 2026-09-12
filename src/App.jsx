import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Terminal,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Cpu,
} from "lucide-react";


import fertilizerShopImage from "./assets/Fertilizer-shop.png";
import airBookingImage from "./assets/air-booking.png";
import fitBuddyImage from "./assets/Fitbuddy.png";
import aibusinessImage from "./assets/ai-business.png";

// Custom SVG Icons for Brand Logos (Avoids lucide-react version mismatch)
const Github = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const Linkedin = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// ==========================================
// 📝 DATA CONFIGURATION
// สามารถปรับเปลี่ยนข้อมูลส่วนตัว ผลงาน และคำตอบ Vibe Coding ได้ที่นี่
// ==========================================
const DATA = {
  personal: {
    name: "Supachai Sungsirin",
    role: "Computer Science Student | Full-Stack & AI Developer",
    university: "มหาวิทยาลัยศรีปทุม (Sripatum University)",
    headline:
      "Building business-oriented web applications and AI-powered solutions.",
    intro:
      "กำลังศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ มุ่งมั่นที่จะก้าวสู่การเป็น Junior Full-Stack Developer พร้อมสำหรับการฝึกงานและสหกิจศึกษา มีความหลงใหลในการใช้เทคโนโลยีและ AI เพื่อสร้างคุณค่าและแก้ปัญหาจริง",
    email: "supachaisun.dev@gmail.com",
    github: "https://github.com/Supachai-Sungsirin",
    linkedin: "https://www.linkedin.com/in/supachai-sungsirin-56219a436/",
    resume:
      "https://drive.google.com/file/d/1pPh_X2JQsqo73B_uEchAYVQ8HXU0Y39e/view?usp=sharing",
  },
  skills: [
    {
      category: "Web Development",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      items: [
        "HTML5 / CSS3",
        "JavaScript",
        "Responsive Web Design",
        "React.js",
        "ASP.NET Core",
      ],
    },
    {
      category: "Backend & Database",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      items: [
        "C#",
        "ASP.NET Core",
        "RESTful APIs",
        "SQL / Database Design",
        "CRUD Operations",
      ],
    },
    {
      category: "AI & Automation",
      icon: <Cpu className="w-6 h-6 text-emerald-500" />,
      items: ["Python", "RAG", "LLM", "NLP", "n8n", "Ollama", "Pinecone"],
    },
    {
      category: "Dev Tools",
      icon: <Terminal className="w-6 h-6 text-orange-500" />,
      items: [
        "Git / GitHub",
        "Postman",
        "VS Code",
        "Jupyter Notebook",
        "AI-assisted Development",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Fertilizer Shop",
      type: "Featured Project",
      badge: "Business Management System",

      problem:
        "ร้านค้าต้องการระบบช่วยจัดการสินค้าและข้อมูลภายในร้านให้เป็นระบบมากขึ้น",

      solution:
        "พัฒนา Web Application สำหรับจัดการหน้าร้านและระบบ Inventory เพื่อช่วยจัดการข้อมูลสินค้าและการดำเนินงาน",

      role: "Full-Stack / Web Application Developer",

      tech: ["ASP.NET Core", "C#", "HTML"],

      outcome:
        "ได้พัฒนาระบบในรูปแบบ Business-oriented Web Application และฝึกการออกแบบระบบจัดการข้อมูลสำหรับธุรกิจ",

      github: "https://github.com/Supachai-Sungsirin/fertilizer-shop",

      demo: "#",

      image: fertilizerShopImage,
    },

    {
      id: 2,
      title: "Air Technician Booking System",
      type: "Featured Project",
      badge: "Booking & Scheduling System",

      problem:
        "ธุรกิจบริการซ่อมเครื่องปรับอากาศต้องการระบบสำหรับให้ลูกค้าจองบริการและช่วยจัดการตารางงาน",

      solution: "พัฒนาแพลตฟอร์มออนไลน์สำหรับการจองบริการและจัดตารางงานช่างแอร์",

      role: "Web Application Developer",

      tech: ["JavaScript", "HTML", "CSS"],

      outcome:
        "ได้พัฒนาระบบ Booking Workflow และระบบจัดการข้อมูลสำหรับธุรกิจบริการ",

      github:
        "https://github.com/Supachai-Sungsirin/airtechnician-booking-system",

      demo: "#",

      image: airBookingImage,
    },

    {
      id: 3,
      title: "FitBuddy",
      type: "AI / Machine Learning Project",
      badge: "RAG + LLM",
      problem:
        "ผู้ใช้งานต้องการคำแนะนำด้านการออกกำลังกายที่สามารถเข้าถึงข้อมูลและตอบคำถามได้อย่างมีบริบท",
      solution:
        "พัฒนา AI-powered Personal Fitness Trainer โดยใช้แนวคิด Retrieval-Augmented Generation (RAG)",
      role: "AI / Machine Learning Developer",
      tech: ["Python", "NLP", "LLM", "RAG"],
      outcome:
        "ได้เรียนรู้และประยุกต์ใช้เทคโนโลยี AI, NLP และ LLM ในการสร้างระบบผู้ช่วยอัจฉริยะ",
      github: "https://github.com/Supachai-Sungsirin/FitBuddy",
      demo: "#",
      image: fitBuddyImage,
    },

    {
      id: 4,
      title: "AI Business News Assistant",
      type: "AI Automation Project",
      badge: "RAG Automation",
      problem:
        "การติดตามข่าวเศรษฐกิจและธุรกิจจากหลายแหล่งใช้เวลา และข้อมูลอาจกระจัดกระจาย",
      solution:
        "ออกแบบ Automation Workflow ที่รวม RAG Pipeline และ LINE Messaging API เพื่อสร้างระบบสรุปข่าวและ Q&A Chatbot",
      role: "AI Automation & Workflow Developer",
      tech: ["n8n", "Ollama", "Pinecone", "HuggingFace Embeddings", "LINE API"],
      outcome:
        "ได้สร้าง Workflow ที่เชื่อมต่อ AI, Vector Database และ Messaging Platform เพื่อทำงานแบบอัตโนมัติ",
      github: "https://github.com/Ratchawanlop/Daily-News",
      demo: "https://supachai-sungsirin.github.io/",
      image: aibusinessImage,
    },
  ],
  experience: [
    {
      id: 1,
      type: "education",
      role: "B.S. Computer Science & Software Development Innovation",
      company: "Sripatum University (SPU)",
      period: "2022 - ปัจจุบัน",
      description:
        "เน้นการเรียนรู้แบบ Project-based Learning ทั้ง Software Engineering, Data Structures, Web Technology และการประยุกต์ใช้ AI ในการพัฒนาซอฟต์แวร์",
    },
    {
      id: 2,
      type: "work",
      role: "Part-time",
      company: "Seven Eleven (7-Eleven) Thailand",
      period: "2023",
      description:
        "ทำงานพาร์ทไทม์ในร้านสะดวกซื้อ 7-Eleven โดยรับผิดชอบด้านการบริการลูกค้า การจัดเรียงสินค้า และการจัดการสต็อกสินค้า",
    },
  ],
};

// ==========================================
// 🎨 SUB-COMPONENTS
// ==========================================

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12">
    <div className="flex items-center gap-2 mb-2">
      <Sparkles className="w-5 h-5 text-blue-500" />
      <span className="text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">
        Section
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl">
        {subtitle}
      </p>
    )}
  </div>
);

// ==========================================
// 🚀 MAIN APPLICATION COMPONENT
// ==========================================
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize Dark / Light Mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-blue-500 selection:text-white">
      {/* ------------------------------------------------------------------- */}
      {/* 📍 1. NAVBAR SECTION */}
      {/* ------------------------------------------------------------------- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight flex items-center gap-2 group"
          >
            <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </span>
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent font-extrabold">
              {DATA.personal.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Dark/Light Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all duration-200 hover:scale-110"
              aria-label="Toggle Theme"
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* CTA Resume Button */}
            <a
              href={DATA.personal.resume}
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
            >
              Resume / CV
            </a>
          </div>

          {/* Mobile Buttons (Hamburger + Theme Toggle) */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-6 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium py-2 text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <a
              href={DATA.personal.resume}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full py-3 text-center rounded-xl bg-blue-600 text-white font-semibold shadow-md"
            >
              View Resume
            </a>
          </div>
        )}
      </nav>

      {/* ------------------------------------------------------------------- */}
      {/* 📍 2. HERO SECTION */}
      {/* ------------------------------------------------------------------- */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="md:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Internships & Co-op
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {DATA.personal.name}
              </span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300 mb-4">
              {DATA.personal.role}
            </p>

            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
              {DATA.personal.intro}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                View My Works <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-sm flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub Profile
              </a>
            </div>
          </div>

          {/* Hero Right Visual Element */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-600 opacity-20 blur-xl animate-pulse"></div>

              {/* Central Card */}
              <div className="relative w-full h-full rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xl backdrop-blur-xl">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    developer.js
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs sm:text-sm py-4">
                  <p className="text-purple-600 dark:text-purple-400">
                    <span className="text-blue-600 dark:text-blue-400">
                      const
                    </span>{" "}
                    developer = &#123;
                  </p>
                  <p className="pl-4 text-slate-600 dark:text-slate-300">
                    name:{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "{DATA.personal.name}"
                    </span>
                    ,
                  </p>
                  <p className="pl-4 text-slate-600 dark:text-slate-300">
                    location:{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "SPU, Thailand"
                    </span>
                    ,
                  </p>
                  <p className="pl-4 text-slate-600 dark:text-slate-300">
                    passion:
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "Web Development, AI & Automation"
                    </span>
                    ,
                  </p>
                  <p className="pl-4 text-slate-600 dark:text-slate-300">
                    status:{" "}
                    <span className="text-amber-600 dark:text-amber-400">
                      "Ready to Code 🚀"
                    </span>
                  </p>
                  <p className="text-purple-600 dark:text-purple-400">
                    &#125;;
                  </p>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800/60 p-3 rounded-xl flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Cpu className="w-4 h-4 text-blue-500" /> React + Tailwind
                    CSS
                  </span>
                  <span className="text-emerald-500 font-bold">
                    100% Responsive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 📍 3. ABOUT & EXPERIENCE SECTION */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="about"
        className="py-20 border-t border-slate-200 dark:border-slate-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Education & Experience"
            subtitle="ประวัติการศึกษาและประสบการณ์ทำงานย่อที่จะสร้างความมั่นใจให้กับองค์กร"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {DATA.experience.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    {item.type === "education" ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <Briefcase className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  {item.company}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 📍 4. SKILLS SECTION */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="skills"
        className="py-20 border-t border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-slate-900/20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Technical Skills"
            subtitle="ทักษะด้านการพัฒนาเว็บไซต์ Backend, AI และเครื่องมือที่ใช้งาน"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {DATA.skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="
            h-full
            p-7
            rounded-3xl
            bg-white
            dark:bg-slate-900
            border
            border-slate-200
            dark:border-slate-800
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-1
            hover:border-blue-500/50
            transition-all
            duration-300
          "
              >
                {/* Icon */}
                <div
                  className="
            w-12 h-12
            rounded-2xl
            bg-slate-100
            dark:bg-slate-800
            flex
            items-center
            justify-center
            mb-6
          "
                >
                  {skillGroup.icon}
                </div>

                {/* Title */}
                <h3
                  className="
            text-xl
            font-bold
            text-slate-900
            dark:text-white
            mb-5
          "
                >
                  {skillGroup.category}
                </h3>

                {/* Skills */}
                <ul className="space-y-3">
                  {skillGroup.items.map((item, i) => (
                    <li
                      key={i}
                      className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-slate-600
                  dark:text-slate-300
                  font-medium
                "
                    >
                      <CheckCircle2
                        className="
                    w-4
                    h-4
                    text-emerald-500
                    flex-shrink-0
                    mt-0.5
                  "
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------------------- */}
      {/* 📍 5. FEATURED PROJECTS SECTION */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="projects"
        className="py-20 border-t border-slate-200 dark:border-slate-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Featured Projects"
            subtitle="ผลงานเด่นที่มีรายละเอียด Problem / Solution / Role / Tech Stack ชัดเจน"
          />

          <div className="space-y-12">
            {DATA.projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        {project.type}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        • {project.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                      {project.title}
                    </h3>

                    {/* Problem / Solution Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Problem (ปัญหา)
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Solution (แนวแก้)
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Role and Outcome */}
                    <div className="space-y-3 mb-6 text-xs sm:text-sm">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">
                          Role & Responsibility:{" "}
                        </span>
                        <span className="text-slate-600 dark:text-slate-300">
                          {project.role}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          Outcome / Proof:{" "}
                        </span>
                        <span className="text-slate-600 dark:text-slate-300">
                          {project.outcome}
                        </span>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-4 h-4" /> View Source Code
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Visual Placeholder */}
                  <div className="lg:w-[340px] flex-shrink-0">
                    <div
                      className="
                        group/image
                        relative
                        w-full
                        h-[260px]
                        lg:h-full
                        min-h-[320px]
                        rounded-2xl
                        overflow-hidden
                        border
                        border-slate-200
                        dark:border-slate-700
                        bg-slate-100
                        dark:bg-slate-950
                        shadow-lg
                      "
                  >
                    {/* Screenshot */}
                      <img
                        src={project.image}
                          alt={`${project.title} Preview`}
                          className="
                          w-full
                          h-full
                          object-cover
                          object-top
                          transition-transform
                          duration-500
                          group-hover/image:scale-105
                        "
                        />

                        {/* Dark Overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-slate-950/0
                          group-hover/image:bg-slate-950/60
                          transition-all
                          duration-300
                          flex
                          items-center
                          justify-center
                          opacity-0
                          group-hover/image:opacity-100
                        "
                      >
                        <div className="text-center">
                          <Code2 className="w-10 h-10 text-white mx-auto mb-3" />

                          <p className="text-sm font-bold text-white">
                            {project.title}
                          </p>

                          <p className="text-xs text-slate-300 mt-1">
                            Project Preview
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 📍 7. CONTACT & FOOTER SECTION */}
      {/* ------------------------------------------------------------------- */}
      <footer
        id="contact"
        className="py-16 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
              Let's Connect & Work Together
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
              {DATA.personal.university} — พร้อมสำหรับการสมัครงาน
              สหกิจศึกษาและโปรเจกต์ร่วมกัน
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${DATA.personal.email}`}
              className="p-3.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:scale-110 transition-all"
              title="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:scale-110 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:scale-110 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-slate-100 dark:border-slate-900 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {DATA.personal.name}. Built with React,
          Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
