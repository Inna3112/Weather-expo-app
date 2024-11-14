import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from './en';

export const languageResources = {
  en: { translation: en },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: languageResources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
