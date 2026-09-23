import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    return savedLanguage === "en" ? "en" : "th";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);

    document.documentElement.lang = language;

    document.title =
      language === "th"
        ? "ศุภชัย สังข์ศิรินทร์ — Full-Stack & AI Developer"
        : "Supachai Sungsirin — Full-Stack & AI Developer";

    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.setAttribute(
        "content",
        language === "th"
          ? "ศุภชัย สังข์ศิรินทร์ นักศึกษาวิทยาการคอมพิวเตอร์และนักพัฒนา Full-Stack & AI"
          : "Supachai Sungsirin — Computer Science student and Full-Stack & AI Developer."
      );
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "th" ? "en" : "th"
    );
  };

  const value = useMemo(
    () => ({
      language,
      isThai: language === "th",
      isEnglish: language === "en",
      toggleLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}