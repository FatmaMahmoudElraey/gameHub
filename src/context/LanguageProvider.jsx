import React, { useState, useEffect } from 'react';
import { LanguageContext } from './LanguageContext.jsx';

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    // Initialize from localStorage
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    updateDocumentDirection(savedLanguage);
  }, []);
  
  // Function to update document direction
  const updateDocumentDirection = (lang) => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.body.className = lang === 'ar' ? 'rtl' : 'ltr';
  };
  
  // Function to toggle language
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    updateDocumentDirection(newLanguage);
    
    // No page reload - React will handle re-rendering components
  };
  
  // Value to be provided to consumers
  const value = {
    language,
    toggleLanguage
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
