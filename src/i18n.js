import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translation files
import translationEN from './locales/en.js';
import translationKO from './locales/ko.js';
import translationVI from './locales/vi.js';

//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
  vi: {
    translation: translationVI,
  },
};

//i18N Initialization

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', //default language
});

export default i18n;
