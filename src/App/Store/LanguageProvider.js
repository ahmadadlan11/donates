import React, { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("ar")
      : i18n.changeLanguage("en");
  };
  return (
    <LanguageContext.Provider value={[i18n.language, toggleLanguage, t]}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
