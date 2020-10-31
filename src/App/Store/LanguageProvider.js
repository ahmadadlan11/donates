import React, { createContext, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("ar")
      : i18n.changeLanguage("en");
  };
  const values = useMemo(
    () => ({
      language: i18n.language,
      toggleLanguage,
      t,
    }),
    [i18n.language]
  );
  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
