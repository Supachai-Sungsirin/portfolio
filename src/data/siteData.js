export const siteData = {
  personal: {
    name: "Supachai Sungsirin",
    shortName: "Supachai.",
    role: "Computer Science Student | Full-Stack & AI Developer",
    university: "Sripatum University",
    status: "Open for Co-op",
    email: "supachaisun.dev@gmail.com",
    github: "https://github.com/Supachai-Sungsirin",
    linkedin:
      "https://www.linkedin.com/in/supachai-sungsirin-56219a436/",
    resume:
      "https://drive.google.com/file/d/1pPh_X2JQsqo73B_uEchAYVQ8HXU0Y39e/view?usp=sharing",
  },

  navigation: [
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "About",
      href: "#about",
    },
  ],

  moreLinks: [
    {
      label: "Tech Stack",
      href: "#stack",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "GitHub",
      href: "https://github.com/Supachai-Sungsirin",
      external: true,
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1pPh_X2JQsqo73B_uEchAYVQ8HXU0Y39e/view?usp=sharing",
      external: true,
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
};

export const projects = [
  {
    id: "air-technician",
    featured: true,

    title: "Air Technician\nBooking System",
    shortTitle: "Air Technician Booking System",

    category: "Full-Stack Application",

    description:
      "A role-based service booking platform connecting customers with approved air-conditioning technicians.",

    longDescription:
      "A full-stack service booking platform designed to manage customer requests, technician availability, and administrative approval workflows. The system matches customers with technicians based on service requirements and district.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    highlights: [
      "JWT authentication",
      "Google OAuth authentication",
      "Role-based access control",
      "Technician approval workflow",
      "Customer booking system",
      "District-based technician matching",
    ],

    translations: {
      th: {
        title: "ระบบจองช่างแอร์\nและบริการ",
        shortTitle: "ระบบจองช่างแอร์",
        category: "ระบบ Full-Stack",
        description:
          "แพลตฟอร์มจองบริการที่เชื่อมต่อลูกค้ากับช่างแอร์ที่ผ่านการอนุมัติ พร้อมระบบจัดการสิทธิ์การใช้งาน",
        longDescription:
          "แพลตฟอร์มจองบริการแบบ Full-Stack สำหรับจัดการคำขอใช้บริการของลูกค้า ตารางงานของช่าง และกระบวนการอนุมัติโดยผู้ดูแลระบบ โดยสามารถจับคู่ลูกค้ากับช่างตามประเภทบริการและพื้นที่",
        highlights: [
          "การยืนยันตัวตนด้วย JWT",
          "การเข้าสู่ระบบด้วย Google OAuth",
          "การควบคุมสิทธิ์ตามบทบาท",
          "ระบบอนุมัติช่าง",
          "ระบบจองบริการสำหรับลูกค้า",
          "การจับคู่ช่างตามพื้นที่",
        ],
      },

      en: {
        title: "Air Technician\nBooking System",
        shortTitle: "Air Technician Booking System",
        category: "Full-Stack Application",
        description:
          "A role-based service booking platform connecting customers with approved air-conditioning technicians.",
        longDescription:
          "A full-stack service booking platform designed to manage customer requests, technician availability, and administrative approval workflows. The system matches customers with technicians based on service requirements and district.",
        highlights: [
          "JWT authentication",
          "Google OAuth authentication",
          "Role-based access control",
          "Technician approval workflow",
          "Customer booking system",
          "District-based technician matching",
        ],
      },
    },

    github:
      "https://github.com/Supachai-Sungsirin/airtechnician-booking-system",

    accent: "blue",
  },

  {
    id: "fertilizer-shop",

    title: "Fertilizer\nShop",
    shortTitle: "Fertilizer Shop",

    category: "Business Management System",

    description:
      "A role-based business management system for sales, inventory, purchasing, and customer operations.",

    longDescription:
      "A business management system developed for a fertilizer shop, covering day-to-day operations across owners, managers, cashiers, and customers. The system brings sales, inventory, purchasing, promotions, and customer points into a single application.",

    technologies: [
      "ASP.NET Core",
      "C#",
      "MySQL",
      "Entity Framework",
    ],

    highlights: [
      "Role-based access control",
      "POS and sales management",
      "Inventory management",
      "Purchase order management",
      "Stock and expiry tracking",
      "Promotion and discount management",
    ],

    translations: {
      th: {
        title: "ระบบจัดการ\nร้านปุ๋ย",
        shortTitle: "ระบบจัดการร้านปุ๋ย",
        category: "ระบบจัดการธุรกิจ",
        description:
          "ระบบจัดการธุรกิจแบบกำหนดสิทธิ์สำหรับการขาย สินค้าคงคลัง การจัดซื้อ และการจัดการลูกค้า",
        longDescription:
          "ระบบจัดการธุรกิจสำหรับร้านปุ๋ยที่ครอบคลุมการทำงานของเจ้าของร้าน ผู้จัดการ แคชเชียร์ และลูกค้า โดยรวมระบบการขาย สินค้าคงคลัง การจัดซื้อ โปรโมชั่น และคะแนนสะสมของลูกค้าไว้ในแอปพลิเคชันเดียว",
        highlights: [
          "การควบคุมสิทธิ์ตามบทบาท",
          "ระบบ POS และการจัดการการขาย",
          "การจัดการสินค้าคงคลัง",
          "การจัดการใบสั่งซื้อ",
          "ติดตามสต็อกและวันหมดอายุ",
          "การจัดการโปรโมชั่นและส่วนลด",
        ],
      },

      en: {
        title: "Fertilizer\nShop",
        shortTitle: "Fertilizer Shop",
        category: "Business Management System",
        description:
          "A role-based business management system for sales, inventory, purchasing, and customer operations.",
        longDescription:
          "A business management system developed for a fertilizer shop, covering day-to-day operations across owners, managers, cashiers, and customers. The system brings sales, inventory, purchasing, promotions, and customer points into a single application.",
        highlights: [
          "Role-based access control",
          "POS and sales management",
          "Inventory management",
          "Purchase order management",
          "Stock and expiry tracking",
          "Promotion and discount management",
        ],
      },
    },

    github:
      "https://github.com/Supachai-Sungsirin/fertilizer-shop",

    accent: "green",
  },

  {
    id: "daily-news",

    title: "AI Business News\nAssistant",
    shortTitle: "Daily News AI",

    category: "AI Automation / RAG",

    description:
      "An automated business-news assistant that summarizes daily content and supports question answering through RAG.",

    longDescription:
      "An automated AI news pipeline that collects business news, generates summaries with an LLM, stores knowledge in a vector database, and provides retrieval-augmented question answering through a LINE chatbot.",

    technologies: [
      "n8n",
      "Pinecone",
      "Ollama",
      "LINE API",
      "NewsAPI",
    ],

    highlights: [
      "Automated business news collection",
      "AI-powered news summarization",
      "RAG-based question answering",
      "Pinecone vector database",
      "LINE Messaging API integration",
      "n8n workflow automation",
    ],

    translations: {
      th: {
        title: "ผู้ช่วยข่าวธุรกิจ\nด้วย AI",
        shortTitle: "ผู้ช่วยข่าวธุรกิจด้วย AI",
        category: "AI Automation / RAG",
        description:
          "ผู้ช่วยข่าวธุรกิจอัตโนมัติที่สรุปข่าวประจำวันและรองรับการถามตอบผ่านระบบ RAG",
        longDescription:
          "Pipeline ข่าวธุรกิจอัตโนมัติที่รวบรวมข่าว สร้างสรุปด้วย LLM จัดเก็บองค์ความรู้ในฐานข้อมูลเวกเตอร์ และรองรับการถามตอบแบบ Retrieval-Augmented Generation ผ่าน LINE Chatbot",
        highlights: [
          "รวบรวมข่าวธุรกิจอัตโนมัติ",
          "สรุปข่าวด้วย AI",
          "ตอบคำถามด้วยระบบ RAG",
          "ฐานข้อมูลเวกเตอร์ Pinecone",
          "เชื่อมต่อ LINE Messaging API",
          "ทำ Workflow Automation ด้วย n8n",
        ],
      },

      en: {
        title: "AI Business News\nAssistant",
        shortTitle: "Daily News AI",
        category: "AI Automation / RAG",
        description:
          "An automated business-news assistant that summarizes daily content and supports question answering through RAG.",
        longDescription:
          "An automated AI news pipeline that collects business news, generates summaries with an LLM, stores knowledge in a vector database, and provides retrieval-augmented question answering through a LINE chatbot.",
        highlights: [
          "Automated business news collection",
          "AI-powered news summarization",
          "RAG-based question answering",
          "Pinecone vector database",
          "LINE Messaging API integration",
          "n8n workflow automation",
        ],
      },
    },

    github: "https://github.com/Ratchawanlop/Daily-News",

    accent: "cyan",
  },

  {
    id: "fitbuddy",

    title: "FitBuddy",
    shortTitle: "FitBuddy",

    category: "AI / RAG Application",

    description:
      "An AI-powered fitness assistant that retrieves relevant knowledge to support conversational responses.",

    longDescription:
      "An AI-powered fitness assistant built around a Retrieval-Augmented Generation pipeline. The application retrieves relevant information from a fitness knowledge base before generating conversational responses.",

    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "FAISS",
    ],

    highlights: [
      "Retrieval-Augmented Generation",
      "LangChain pipeline",
      "FAISS vector search",
      "Fitness knowledge retrieval",
      "AI-powered conversational responses",
    ],

    translations: {
      th: {
        title: "FitBuddy",
        shortTitle: "FitBuddy",
        category: "AI / RAG Application",
        description:
          "ผู้ช่วยด้านฟิตเนสที่ใช้ AI และการค้นคืนข้อมูลจากฐานความรู้เพื่อสนับสนุนการตอบคำถามแบบสนทนา",
        longDescription:
          "ผู้ช่วยด้านฟิตเนสที่พัฒนาด้วยกระบวนการ Retrieval-Augmented Generation โดยระบบจะค้นคืนข้อมูลที่เกี่ยวข้องจากฐานความรู้ด้านฟิตเนสก่อนนำมาใช้ในการสร้างคำตอบแบบสนทนาด้วย AI",
        highlights: [
          "Retrieval-Augmented Generation",
          "LangChain pipeline",
          "FAISS vector search",
          "การค้นคืนข้อมูลจากฐานความรู้ด้านฟิตเนส",
          "การตอบคำถามแบบสนทนาด้วย AI",
        ],
      },

      en: {
        title: "FitBuddy",
        shortTitle: "FitBuddy",
        category: "AI / RAG Application",
        description:
          "An AI-powered fitness assistant that retrieves relevant knowledge to support conversational responses.",
        longDescription:
          "An AI-powered fitness assistant built around a Retrieval-Augmented Generation pipeline. The application retrieves relevant information from a fitness knowledge base before generating conversational responses.",
        highlights: [
          "Retrieval-Augmented Generation",
          "LangChain pipeline",
          "FAISS vector search",
          "Fitness knowledge retrieval",
          "AI-powered conversational responses",
        ],
      },
    },

    github: "https://github.com/Supachai-Sungsirin/FitBuddy",

    accent: "purple",
  },

  {
    id: "warehouse",

    title: "Warehouse\nManagement System",
    shortTitle: "Warehouse Management System",

    category: "Full-Stack Application",

    description:
      "A role-based warehouse management system for products, inventory, and stock movement operations.",

    longDescription:
      "A full-stack warehouse management system designed to organize product records, inventory, stock movements, and warehouse operations through role-based access control.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
    ],

    highlights: [
      "Role-based access control",
      "Product management",
      "Inventory management",
      "Stock movement tracking",
      "Warehouse operations",
    ],

    translations: {
      th: {
        title: "ระบบจัดการ\nคลังสินค้า",
        shortTitle: "ระบบจัดการคลังสินค้า",
        category: "ระบบ Full-Stack",
        description:
          "ระบบจัดการคลังสินค้าแบบกำหนดสิทธิ์สำหรับจัดการสินค้า สต็อก และการเคลื่อนไหวของสินค้า",
        longDescription:
          "ระบบจัดการคลังสินค้าแบบ Full-Stack สำหรับจัดการข้อมูลสินค้า สินค้าคงคลัง การเคลื่อนไหวของสต็อก และการดำเนินงานภายในคลังสินค้า โดยมีการควบคุมการเข้าถึงตามบทบาทของผู้ใช้งาน",
        highlights: [
          "การควบคุมสิทธิ์ตามบทบาท",
          "การจัดการข้อมูลสินค้า",
          "การจัดการสินค้าคงคลัง",
          "การติดตามการเคลื่อนไหวของสต็อก",
          "การจัดการการดำเนินงานภายในคลังสินค้า",
        ],
      },

      en: {
        title: "Warehouse\nManagement System",
        shortTitle: "Warehouse Management System",
        category: "Full-Stack Application",
        description:
          "A role-based warehouse management system for products, inventory, and stock movement operations.",
        longDescription:
          "A full-stack warehouse management system designed to organize product records, inventory, stock movements, and warehouse operations through role-based access control.",
        highlights: [
          "Role-based access control",
          "Product management",
          "Inventory management",
          "Stock movement tracking",
          "Warehouse operations",
        ],
      },
    },

    github: "https://github.com/Supachai-Sungsirin/_warehouse",

    accent: "orange",
  },
];