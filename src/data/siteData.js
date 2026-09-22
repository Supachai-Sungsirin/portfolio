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

    github:
      "https://github.com/Ratchawanlop/Daily-News",

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

    github:
      "https://github.com/Supachai-Sungsirin/FitBuddy",

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

    github:
      "https://github.com/Supachai-Sungsirin/_warehouse",

    accent: "orange",
  },
];