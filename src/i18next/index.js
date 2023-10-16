import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import en from "./en.json";

import fr from "./fr.json";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      fr: {
        translation: fr
      }
    },
    lng: "en",
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: "/{{lng}}.json"
    }
  });

export default i18n;
