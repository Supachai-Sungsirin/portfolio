export const siteData = {
  personal: {
    name: "Supachai Sungsirin",
    shortName: "Supachai.",
    role: "Computer Science Student | Full-Stack & AI Developer",
    university: "Sripatum University",
    status: "Open for Co-op",
    email: "supachaisun.dev@gmail.com",
    github: "https://github.com/Supachai-Sungsirin",
    linkedin: "https://www.linkedin.com/in/supachai-sungsirin-56219a436/",
    resume:
      "https://drive.google.com/file/d/1pPh_X2JQsqo73B_uEchAYVQ8HXU0Y39e/view?usp=sharing",
  },

  navigation: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
  ],

  moreLinks: [
    { label: "Tech Stack", href: "#stack" },
    { label: "Education", href: "#education" },
    { label: "GitHub", href: "https://github.com/Supachai-Sungsirin", external: true },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1pPh_X2JQsqo73B_uEchAYVQ8HXU0Y39e/view?usp=sharing",
      external: true,
    },
    { label: "Contact", href: "#contact" },
  ],
};

export const projects = [
  {
    id: "air-technician",

    title: "Air Technician\nBooking System",

    category: "Full-Stack Application",

    description:
      "A role-based booking platform connecting customers, technicians, and administrators.",

    longDescription:
      "A full-stack service booking platform designed to connect customers with approved air-conditioning technicians based on location and service requirements.",

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
      "A role-based POS and inventory management system for a fertilizer shop.",

    technologies: [
      "ASP.NET Core",
      "C#",
      "MySQL",
      "Entity Framework",
    ],

    highlights: [
      "Automated daily business news collection",
      "AI-powered news summarization",
      "RAG-based question answering",
      "Pinecone vector database",
      "LINE Messaging API integration",
      "n8n workflow automation",
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
      "An automated AI business news assistant that delivers daily news digests and answers questions through a RAG-powered LINE chatbot.",

    longDescription:
      "An automated AI news system that fetches business news, summarizes content with an LLM, stores knowledge in a vector database, and answers user questions through a RAG-powered LINE chatbot.",

    technologies: [
      "n8n",
      "Pinecone",
      "Ollama",
      "LINE API",
      "NewsAPI",
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
      "An AI-powered personal fitness assistant using Retrieval-Augmented Generation.",

    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "FAISS",
    ],

    github:
      "https://github.com/Supachai-Sungsirin/FitBuddy",

    accent: "purple",
  },


  {
    id: "warehouse",

    title: "Warehouse\nManagement System",

    shortTitle: "Warehouse System",

    category: "Full-Stack Application",

    description:
      "A role-based warehouse management system for inventory and stock operations.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
    ],

    github:
      "https://github.com/Supachai-Sungsirin/_warehouse",

    accent: "orange",
  },

];