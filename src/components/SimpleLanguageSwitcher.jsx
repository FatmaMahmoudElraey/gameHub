import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import '../assets/css/SimpleLanguageSwitcher.css';

const SimpleLanguageSwitcher = () => {
  // Get language and toggleLanguage from context
  const { language, toggleLanguage } = useLanguage();

  // Enhanced button with modern design & smooth transition
  return (
    <button 
      className={`simple-language-switcher ${language === 'ar' ? 'rtl' : 'ltr'}`}
      onClick={toggleLanguage}
      aria-label="Change Language"
    >
      {language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

export default SimpleLanguageSwitcher;
