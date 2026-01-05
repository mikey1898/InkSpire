import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { GeneratedData } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates the tattoo prompt structured data using Gemini 3 Flash.
 */
export const generateTattooPrompt = async (
  keywords: string,
  styleName: string
): Promise<GeneratedData> => {
  try {
    // Enhanced prompt to force creative fusion AND logic
    const userPrompt = `
    Input Subject: "${keywords}"
    Selected Style: "${styleName}"
    
    Task: Create a cohesive tattoo design where the subject is creatively TRANSFORMED by the style.
    
    CRITICAL REQUIREMENTS:
    1. **Fusion**: Describe how the subject is MADE OF the style's visual elements.
    2. **Logic**: The design must be physically plausible within the art style's logic. (e.g., No "running stained glass" or "fire made of water").
    3. **Clarity**: The main subject must be instantly recognizable despite the stylization.
    4. **Cohesion**: Elements must interact naturally, not just float near each other.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            designConcept: { type: Type.STRING },
            prompts: {
              type: Type.OBJECT,
              properties: {
                jimeng: {
                  type: Type.OBJECT,
                  properties: { en: { type: Type.STRING }, zh: { type: Type.STRING } },
                  required: ["en", "zh"]
                },
                midjourney: {
                  type: Type.OBJECT,
                  properties: { en: { type: Type.STRING }, zh: { type: Type.STRING } },
                  required: ["en", "zh"]
                },
                dalle: {
                  type: Type.OBJECT,
                  properties: { en: { type: Type.STRING }, zh: { type: Type.STRING } },
                  required: ["en", "zh"]
                },
                stable_diffusion: {
                  type: Type.OBJECT,
                  properties: { en: { type: Type.STRING }, zh: { type: Type.STRING } },
                  required: ["en", "zh"]
                },
              },
              required: ["jimeng", "midjourney", "dalle", "stable_diffusion"]
            },
          },
          required: ["designConcept", "prompts"],
        },
      },
    });

    const resultText = response.text;
    if (!resultText) throw new Error("No response from AI");

    const data = JSON.parse(resultText) as GeneratedData;
    return data;
  } catch (error) {
    console.error("Error generating prompt:", error);
    throw error;
  }
};

/**
 * Generates a visual preview of the tattoo using Gemini 2.5 Flash Image.
 */
export const generateTattooPreview = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', // Using image model for generation
      contents: prompt,
      config: {
        // No specific image config needed for basic generation, 
        // default output is sufficient for preview.
        // Nano banana models do not support responseMimeType
      },
    });
    
    // Extract image from response parts
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    
    throw new Error("No image generated");
  } catch (error) {
    console.error("Error generating image preview:", error);
    throw error;
  }
};
