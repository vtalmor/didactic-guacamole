import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translations.json";
import esTranslation from "./locales/es/translations.json";

const languages = ["en", "es"];

const resources = {
  en: {
    translation: enTranslation
  },
  es: {
    translation: esTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    fallbacks: true,
    fallbackLng: "es",
    resources,
    keySeparator: ".",
    whitelist: languages,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
