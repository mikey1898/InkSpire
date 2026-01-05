import React, { useState } from 'react';
import { GeneratedData, Language, Platform } from '../types';
import { Copy, Sparkles, Image as ImageIcon, CheckCircle, Download } from 'lucide-react';
import { generateTattooPreview } from '../services/geminiService';
import { PLATFORMS, TRANSLATIONS } from '../constants';

interface PromptResultProps {
  data: GeneratedData;
  language: Language;
}

const PromptResult: React.FC<PromptResultProps> = ({ data, language }) => {
  const [copied, setCopied] = useState<string | null>(null);
  const [generatingImage, setGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [activePlatform, setActivePlatform] = useState<Platform>('jimeng');

  const t = TRANSLATIONS[language];

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleGenerateImage = async () => {
    if (generatingImage) return;
    setGeneratingImage(true);
    setImageError(null);
    try {
      // Use DALL-E English prompt as it's usually the most descriptive natural language
      // suitable for Gemini's image generation model.
      const promptToUse = data.prompts.dalle.en;
      const image = await generateTattooPreview(promptToUse + " flat 2d tattoo flash design, white background");
      setGeneratedImage(image);
    } catch (err) {
      setImageError(t.errorImage);
    } finally {
      setGeneratingImage(false);
    }
  };

  const handleDownloadImage = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `inkspire-sketch-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentPrompts = data.prompts[activePlatform];

  return (
    <div className="w-full bg-ink-900 rounded-xl border border-ink-700 overflow-hidden shadow-2xl animate-fade-in-up flex flex-col">
      {/* Header */}
      <div className="bg-ink-950 p-4 border-b border-ink-800 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-gold-500" />
        <h2 className="text-lg font-serif text-white">Blueprint Generated</h2>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-ink-800 overflow-x-auto no-scrollbar">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePlatform(p.id)}
            className={`
              flex-1 py-3 px-4 text-sm font-medium whitespace-nowrap transition-colors
              ${activePlatform === p.id 
                ? 'bg-ink-800 text-gold-500 border-b-2 border-gold-500' 
                : 'bg-ink-900 text-ink-400 hover:text-ink-200 hover:bg-ink-800'}
            `}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="p-6 space-y-6 flex-grow">
        
        {/* Concept Section */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-ink-400 uppercase tracking-wider">{t.designConcept}</label>
          <div className="p-4 bg-ink-950/50 rounded-lg border-l-4 border-purple-500 text-ink-100 italic">
            "🎨 {data.designConcept}"
          </div>
        </div>

        {/* English Prompt Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-gold-500 uppercase tracking-wider">
               {t.englishPromptLabel}
               <span className="ml-2 opacity-50 font-normal normal-case">({PLATFORMS.find(p => p.id === activePlatform)?.label})</span>
            </label>
            <button
              onClick={() => handleCopy(currentPrompts.en, 'en')}
              className="flex items-center gap-1 text-xs text-ink-300 hover:text-white transition-colors"
            >
              {copied === 'en' ? <CheckCircle className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
              {copied === 'en' ? t.copied : t.copy}
            </button>
          </div>
          <div className="p-4 bg-black rounded-lg border border-ink-700 font-mono text-sm text-green-400 leading-relaxed break-words relative group">
             {currentPrompts.en}
          </div>
        </div>

        {/* Chinese Prompt Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-ink-400 uppercase tracking-wider">
              {t.chinesePromptLabel}
               <span className="ml-2 opacity-50 font-normal normal-case">({PLATFORMS.find(p => p.id === activePlatform)?.label})</span>
            </label>
            <button
              onClick={() => handleCopy(currentPrompts.zh, 'zh')}
              className="flex items-center gap-1 text-xs text-ink-300 hover:text-white transition-colors"
            >
              {copied === 'zh' ? <CheckCircle className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
              {copied === 'zh' ? t.copied : t.copy}
            </button>
          </div>
          <div className="p-4 bg-ink-950 rounded-lg border border-ink-800 font-sans text-sm text-ink-200 leading-relaxed break-words relative group">
             {currentPrompts.zh}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button 
                onClick={handleGenerateImage}
                disabled={generatingImage}
                className="flex-1 flex items-center justify-center gap-2 bg-ink-800 hover:bg-ink-700 text-white py-3 px-4 rounded-lg border border-ink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {generatingImage ? (
                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                    <ImageIcon className="w-5 h-5" />
                )}
                {generatingImage ? t.sketchingBtn : t.visualizeBtn}
            </button>
        </div>

        {/* Image Preview Area */}
        {imageError && (
            <div className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded">{imageError}</div>
        )}
        
        {generatedImage && (
            <div className="mt-4 rounded-lg overflow-hidden border border-ink-700 bg-white relative group">
                <img src={generatedImage} alt="AI Preview" className="w-full h-auto object-cover" />
                
                {/* Download Button */}
                <button 
                    onClick={handleDownloadImage}
                    className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-gold-600 text-white p-2 rounded-lg backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    title={t.downloadBtn}
                >
                    <Download className="w-5 h-5" />
                </button>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
                    <span className="text-white font-serif tracking-widest bg-black/80 px-4 py-2 rounded">{t.previewOnly}</span>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default PromptResult;
