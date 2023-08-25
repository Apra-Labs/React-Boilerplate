import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en/en.json';
import es from './es/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    },
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;