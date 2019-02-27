/*
 * @Author: Chao Yang
 * @Date: 2019-02-26 18:30:49
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-27 15:43:44
 */
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/config/locales/{{lng}}/{{ns}}.json'
    },
    debug: true,
    defaultNS: 'common',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    ns: 'common'
  });

export default i18n;