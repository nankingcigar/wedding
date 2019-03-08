/*
 * @Author: Chao Yang
 * @Date: 2019-03-08 12:38:06
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 15:27:32
 */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import resources from "./locale";

const search = window.location.search;
const params = new URLSearchParams(search);
const lang = params.get("lng") as string | undefined;

i18n.on("languageChanged", (lng: string) => {
  document.title = i18n.t("title");
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    defaultNS: "common",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    lng: lang,
    ns: "common",
    resources
  });

export default i18n;
