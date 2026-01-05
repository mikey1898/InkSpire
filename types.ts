export type Language = 'en' | 'zh';

export type Platform = 'jimeng' | 'midjourney' | 'dalle' | 'stable_diffusion';

export interface TattooStyle {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  imagePlaceholder: string;
}

export interface PromptPair {
  en: string;
  zh: string;
}

export interface GeneratedData {
  designConcept: string;
  prompts: Record<Platform, PromptPair>;
}

export interface PromptResponse {
  generatedData: GeneratedData | null;
  error: string | null;
}
