# Portfolio — Supachai Sungsirin

โปรเจกต์เว็บไซต์พอร์ตโฟลิโอส่วนตัวของ **Supachai Sungsirin**
นักศึกษาสาขา Computer Science จาก Sripatum University | Full-Stack & AI Developer

🔗 Repository: [github.com/Supachai-Sungsirin/portfolio](https://github.com/Supachai-Sungsirin/portfolio)

## เกี่ยวกับโปรเจกต์

เว็บไซต์พอร์ตโฟลิโอที่แสดงผลงาน (Projects), ทักษะด้านเทคโนโลยี (Tech Stack), ประวัติการศึกษา (Education) และช่องทางการติดต่อ (Contact) โดยพัฒนาด้วย React + Vite พร้อมดีไซน์ที่ทันสมัย มี dark/light mode และแอนิเมชันที่ลื่นไหล

## Tech Stack

- **React 19** — UI Library
- **Vite** — Build Tool / Dev Server
- **React Router DOM** — Routing
- **Tailwind CSS** — Styling
- **Motion** — Animation
- **Lucide React** — Icons
- **ESLint** — Code Linting

## 📁 โครงสร้างโปรเจกต์

```
portfolio/
├── public/               # ไฟล์ static เช่น favicon, รูปโปรไฟล์
├── src/
│   ├── assets/           # รูปภาพและไฟล์สื่อต่าง ๆ
│   ├── components/
│   │   ├── layout/       # Navbar และคอมโพเนนต์โครงสร้างหลัก
│   │   ├── sections/     # ส่วนต่าง ๆ ของหน้าเว็บ (Hero, Projects, Education, Contact ฯลฯ)
│   │   └── ui/           # คอมโพเนนต์ UI ย่อย (ปุ่ม, spotlight, theme toggle ฯลฯ)
│   ├── context/          # React Context (เช่น Theme)
│   ├── data/             # ข้อมูลเนื้อหาเว็บไซต์และคำแปลภาษา (siteData.js, translations.js)
│   ├── hooks/            # Custom React Hooks
│   ├── pages/            # หน้าเว็บหลัก (Home.jsx)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ วิธีติดตั้งและรันโปรเจกต์

1. Clone repository

   ```bash
   git clone https://github.com/Supachai-Sungsirin/portfolio.git
   cd portfolio
   ```

2. ติดตั้ง dependencies

   ```bash
   npm install
   ```

3. รันเซิร์ฟเวอร์สำหรับพัฒนา (Development)

   ```bash
   npm run dev
   ```

4. Build โปรเจกต์สำหรับ production

   ```bash
   npm run build
   ```

5. Preview ไฟล์ที่ build แล้ว

   ```bash
   npm run preview
   ```

6. ตรวจสอบโค้ดด้วย ESLint

   ```bash
   npm run lint
   ```

## 📬 ติดต่อ

- **GitHub:** [Supachai-Sungsirin](https://github.com/Supachai-Sungsirin)
- **LinkedIn:** [Supachai Sungsirin](https://www.linkedin.com/in/supachai-sungsirin-56219a436/)
- **Email:** supachaisun.dev@gmail.com

---

Made with ❤️ using React + Vite
