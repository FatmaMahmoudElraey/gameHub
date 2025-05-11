import React from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/css/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  
  // Check if current language is RTL
  const isRtl = i18n.language === 'ar';
  
  const changeLanguage = () => {
    // Toggle between 'en' and 'ar'
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    
    // Set the dir attribute on the html tag for RTL/LTR support
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // You might want to store the language preference
    localStorage.setItem('language', newLanguage);
  };

  return (
    <button 
      className={`language-switcher ${isRtl ? 'rtl' : 'ltr'}`}
      onClick={changeLanguage}
      aria-label={t('general.changeLanguage')}
    >
      {t('general.changeLanguage')}
    </button>
  );
};

export default LanguageSwitcher;
