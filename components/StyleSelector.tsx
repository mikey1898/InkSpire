import React from 'react';
import { TATTOO_STYLES, TRANSLATIONS } from '../constants';
import { Check } from 'lucide-react';
import { Language } from '../types';

interface StyleSelectorProps {
  selectedStyle: string;
  onSelect: (id: string) => void;
  language: Language;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onSelect, language }) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="space-y-4">
      <h3 className="text-ink-200 font-serif text-lg border-l-2 border-gold-500 pl-3">
        {t.styleTitle}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {TATTOO_STYLES.map((style) => (
          <button
            key={style.id}
            onClick={() => onSelect(style.id)}
            type="button"
            className={`
              relative group flex flex-col items-start p-3 rounded-lg border transition-all duration-300 text-left h-full
              ${selectedStyle === style.id 
                ? 'bg-ink-800 border-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.2)]' 
                : 'bg-ink-900 border-ink-700 hover:border-ink-500 hover:bg-ink-800'}
            `}
          >
            <div className="flex justify-between w-full mb-1 gap-2">
              <span className={`font-medium text-sm leading-tight ${selectedStyle === style.id ? 'text-gold-500' : 'text-ink-100'}`}>
                {style.name[language]}
              </span>
              {selectedStyle === style.id && <Check className="w-4 h-4 text-gold-500 flex-shrink-0" />}
            </div>
            <p className="text-xs text-ink-400 line-clamp-3 leading-relaxed mt-1">
              {style.description[language]}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
