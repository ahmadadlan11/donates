import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {},
  },
  ar: {
    translation: {
      "welcome to": "مرحـبـا بـك",
    },
  },
};

const Language = ["en", "ar"];

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  debug: true,
  supportedLngs: Language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
