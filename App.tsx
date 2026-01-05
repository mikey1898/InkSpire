import React, { useState } from 'react';
import Header from './components/Header';
import StyleSelector from './components/StyleSelector';
import PromptResult from './components/PromptResult';
import { generateTattooPrompt } from './services/geminiService';
import { GeneratedData, Language } from './types';
import { ArrowRight, Loader2, Sparkles, RotateCcw } from 'lucide-react';
import { TATTOO_STYLES, TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('zh'); // Default to Chinese as requested
  const [keywords, setKeywords] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>('auto');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const t = TRANSLATIONS[language];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keywords.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const styleObj = TATTOO_STYLES.find(s => s.id === selectedStyle);
      // Always pass the English style name to the AI for consistent generation instructions
      const styleName = styleObj ? styleObj.name.en : 'Auto Match';
      
      const data = await generateTattooPrompt(keywords, styleName);
      setResult(data);
    } catch (err) {
      setError(t.errorGen);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setKeywords('');
    setResult(null);
    setError(null);
    // Note: We intentionally do not reset the style selection as sticky settings are usually better UX
  };

  return (
    <div className="min-h-screen bg-ink-950 text-white font-sans selection:bg-gold-500 selection:text-black">
      <Header language={language} onLanguageChange={setLanguage} />

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Controls */}
          <div className="lg:col-span-5 space-y-8">
            
            <form onSubmit={handleGenerate} className="space-y-8">
              {/* Input Section */}
              <div className="space-y-4">
                <h3 className="text-ink-200 font-serif text-lg border-l-2 border-gold-500 pl-3">
                  {t.subjectTitle}
                </h3>
                <div className="relative">
                    <input
                        type="text"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder={t.subjectPlaceholder}
                        className="w-full bg-ink-900 border border-ink-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder-ink-600 text-lg shadow-inner"
                    />
                    <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-600 w-5 h-5 pointer-events-none" />
                </div>
                <p className="text-xs text-ink-500">
                  {t.subjectHelp}
                </p>
              </div>

              {/* Style Section */}
              <StyleSelector 
                selectedStyle={selectedStyle} 
                onSelect={setSelectedStyle} 
                language={language}
              />

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 rounded-lg border border-ink-700 bg-ink-900 text-ink-400 hover:text-white hover:border-ink-500 hover:bg-ink-800 transition-all flex items-center justify-center"
                  title={t.resetBtn}
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button
                  type="submit"
                  disabled={loading || !keywords.trim()}
                  className={`
                    flex-1 py-4 px-6 rounded-lg font-serif font-bold tracking-widest text-lg flex items-center justify-center gap-3 shadow-lg transition-all transform hover:-translate-y-1
                    ${loading || !keywords.trim() 
                      ? 'bg-ink-800 text-ink-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-gold-600 to-gold-500 text-ink-950 hover:shadow-gold-500/20'}
                  `}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin w-6 h-6" />
                      <span>{t.generatingBtn}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.generateBtn}</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {error && (
              <div className="p-4 bg-red-900/20 border border-red-900/50 text-red-400 rounded-lg text-sm text-center">
                {error}
              </div>
            )}
            
            {/* Disclaimer */}
            <div className="text-center pt-8 border-t border-ink-800">
                <p className="text-xs text-ink-600">
                    {t.disclaimer}
                </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Results */}
          <div className="lg:col-span-7">
            {result ? (
              <PromptResult data={result} language={language} />
            ) : (
              // Empty State
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-ink-800 rounded-2xl bg-ink-900/30 text-ink-600 p-8 text-center">
                <div className="w-20 h-20 bg-ink-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <Sparkles className="w-8 h-8 opacity-20" />
                </div>
                <h3 className="text-xl font-serif text-ink-400 mb-2">{t.emptyTitle}</h3>
                <p className="max-w-xs mx-auto">
                  {t.emptyText}
                </p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
