import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define translations
const resources = {
  en: {
    translation: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      partners: 'Partners',
      publishers: 'Publishers',
      contact: 'Contact',
      acml: 'ACML2I2S',
      brandSubtitle: 'ACML INTEGRATRED INFORMATION SOLUTION & SYSTEMS',
      toggleTheme: 'Toggle theme',
      toggleMenu: 'Toggle menu',
      language: 'Language',
      theme: 'Theme'
    }
  },
  ar: {
    translation: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      partners: 'شركاؤنا',
      publishers: 'الناشرون',
      contact: 'اتصل بنا',
      acml: 'أكمل 2I2S',
      brandSubtitle: 'أكمل للحلول و النظم المتكاملة',
      toggleTheme: 'تبديل المظهر',
      toggleMenu: 'تبديل القائمة',
      language: 'اللغة',
      theme: 'المظهر'
    }
  },
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'en', // Default to saved language or English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

// Handle direction changes on language change
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
  localStorage.setItem('i18nextLng', lng);
});

// Set initial direction based on current language
document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = i18n.language;

export default i18n;
