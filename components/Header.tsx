import React from 'react';
import { PenTool, Languages } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const t = TRANSLATIONS[language];

  return (
    <header className="flex flex-col items-center justify-center py-6 px-4 border-b border-ink-800 bg-ink-950/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="absolute right-4 top-4 md:right-8 md:top-6">
        <button
          onClick={() => onLanguageChange(language === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-700 bg-ink-900 text-ink-300 hover:text-gold-500 hover:border-gold-500 transition-all text-sm font-medium"
        >
          <Languages className="w-4 h-4" />
          <span>{language === 'en' ? '中' : 'EN'}</span>
        </button>
      </div>
      
      <div className="flex items-center gap-3">
        <PenTool className="w-8 h-8 text-gold-500" />
        <h1 className="text-3xl md:text-4xl font-serif tracking-wider text-white font-bold">
          Ink<span className="text-gold-500">Spire</span>
        </h1>
      </div>
      <p className="mt-2 text-ink-400 text-sm md:text-base font-light tracking-wide">
        {t.subtitle}
      </p>
    </header>
  );
};

export default Header;
