import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState('pl');

  // Determine language from URL
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/en')) {
      setLanguage('en');
    } else {
      setLanguage('pl');
    }
  }, [location.pathname]);

  const toggleLanguage = () => {
    if (language === 'pl') {
      navigate('/en');
    } else {
      navigate('/');
    }
  };

  const setLanguageAndNavigate = (newLanguage) => {
    if (newLanguage === 'en') {
      navigate('/en');
    } else {
      navigate('/');
    }
  };

  const value = {
    language,
    setLanguage: setLanguageAndNavigate,
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 