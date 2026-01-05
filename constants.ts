import { TattooStyle, Language, Platform } from './types';

export const PLATFORMS: { id: Platform; label: string }[] = [
  { id: 'jimeng', label: 'Jimeng (即梦)' },
  { id: 'midjourney', label: 'Midjourney' },
  { id: 'dalle', label: 'DALL-E 3' },
  { id: 'stable_diffusion', label: 'Stable Diffusion' },
];

export const TATTOO_STYLES: TattooStyle[] = [
  {
    id: 'auto',
    name: { en: 'Auto Match', zh: '智能匹配' },
    description: { 
      en: 'AI analyzes your idea to select the most impactful visual style.', 
      zh: 'AI 深度分析你的想法，自动匹配最具视觉冲击力的风格。' 
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_auto/100/100'
  },
  {
    id: 'old_school',
    name: { en: 'Old School / Traditional', zh: '美式传统 / Old School' },
    description: { 
      en: 'Bold black outlines, limited primary color palette, minimal shading, 2D iconic look.', 
      zh: '粗黑轮廓，限制级原色配色，极简阴影，强调平面感与符号化视觉。' 
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_oldschool/100/100'
  },
  {
    id: 'neo_traditional',
    name: { en: 'Neo Traditional', zh: '新传统 / Neo Trad' },
    description: {
      en: 'Varying line weights, sophisticated muted palette, decorative flow, illustrative depth.',
      zh: '多变的线条粗细，优雅的低饱和配色，装饰性边框，插画级立体感。'
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_neotrad/100/100'
  },
  {
    id: 'fine_line',
    name: { en: 'Fine Line / Micro', zh: '极简线条 / Fine Line' },
    description: { 
      en: 'Extremely thin lines, subtle dot shading, breathable negative space, delicate precision.', 
      zh: '极致纤细的线条，微弱的点刺阴影，大量留白，精密而脆弱的美感。' 
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_fineline/100/100'
  },
  {
    id: 'sketch',
    name: { en: 'Sketch / Illustrative', zh: '素描手稿 / Sketch' },
    description: {
      en: 'Graphite textures, visible construction lines, hatching, hand-drawn study aesthetic.',
      zh: '铅笔石墨质感，保留辅助构造线，排线阴影，犹如艺术家手绘练习稿。'
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_sketch/100/100'
  },
  {
    id: 'realism',
    name: { en: 'Hyper Realism', zh: '超写实 / Realism' },
    description: { 
      en: 'Photorealistic textures, precise light and shadow, volumetric 3D effect, high fidelity.', 
      zh: '照片级纹理，精准的光影逻辑，强烈的体积感，高保真还原。' 
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_realism/100/100'
  },
  {
    id: 'trash_polka',
    name: { en: 'Trash Polka', zh: '泼墨拼贴 / Trash Polka' },
    description: {
      en: 'High contrast Red & Black, realism mixed with abstract brush strokes and geometric chaos.',
      zh: '高反差红黑配色，写实主体与抽象笔触、几何图形的暴力美学拼贴。'
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_trashpolka/100/100'
  },
  {
    id: 'irezumi',
    name: { en: 'Irezumi / Japanese', zh: '日式传统 / Irezumi' },
    description: { 
      en: 'Ukiyo-e style, bold fluid motion, heavy background framing (waves/clouds), matte colors.',
      zh: '浮世绘风格，流畅的动态线，厚重的背景板雾（波浪/云层），哑光色彩。'
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_irezumi/100/100'
  },
  {
    id: 'dotwork',
    name: { en: 'Dotwork', zh: '点刺 / Dotwork' },
    description: { 
      en: 'Images formed entirely by stippling points, soft gradients, no solid lines, granular texture.',
      zh: '完全由点构成的图像，通过疏密表现光影，无实线轮廓，独特的颗粒质感。'
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_dotwork/100/100'
  },
  {
    id: 'tribal',
    name: { en: 'Tribal / Totem', zh: '图腾 / Tribal' },
    description: {
      en: 'Bold black abstract patterns, symmetrical flow, sharp spikes or curves, spiritual energy, emphasizing body flow.',
      zh: '大胆的黑色抽象纹样，对称流动，尖锐的刺状或曲线，强调精神能量与身体线条的律动。'
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_tribal/100/100'
  },
  {
    id: 'watercolor',
    name: { en: 'Watercolor', zh: '水彩泼墨 / Watercolor' },
    description: { 
      en: 'Translucent blends, paint splatters, wet-on-wet technique, lack of harsh outlines.',
      zh: '透明感色彩交融，颜料飞溅，湿画法效果，无硬性轮廓线。'
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_watercolor/100/100'
  },
  {
    id: 'blackwork',
    name: { en: 'Blackwork / Dark Art', zh: '暗黑黑工 / Blackwork' },
    description: { 
      en: 'Solid black saturation, heavy contrast, negative space defining form, graphic silhouettes.',
      zh: '大面积实黑填充，极高对比度，利用负空间定义形体，强烈的剪影感。'
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_blackwork/100/100'
  },
  {
    id: 'new_school',
    name: { en: 'New School', zh: '新美式 / New School' },
    description: { 
      en: 'Exaggerated proportions, vibrant electric colors, bubble-like shading, graffiti perspective.',
      zh: '夸张的比例，充满活力的电子配色，气泡感光影，涂鸦式的透视变形。'
    },
    imagePlaceholder: 'https://picsum.photos/seed/ink_newschool/100/100'
  },
];

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    subtitle: "AI Tattoo Architect & Creative Director",
    subjectTitle: "Tattoo Concept",
    subjectPlaceholder: "e.g., A time-traveling samurai fighting a dragon...",
    subjectHelp: "Describe your idea. The AI will turn it into art.",
    styleTitle: "Select Visual Style",
    generateBtn: "DESIGN BLUEPRINT",
    generatingBtn: "CRAFTING ART...",
    resetBtn: "RESET",
    disclaimer: "Select a platform tab to see optimized prompts for Jimeng, Midjourney, etc.",
    emptyTitle: "Awaiting Inspiration",
    emptyText: "Enter your concept and choose a style. Our AI Creative Director will generate professional-grade tattoo prompts.",
    designConcept: "Creative Direction",
    englishPromptLabel: "Prompt (English)",
    chinesePromptLabel: "Prompt (Chinese)",
    copy: "Copy",
    copied: "Copied",
    visualizeBtn: "Visualize Sketch (AI)",
    sketchingBtn: "Sketching...",
    previewOnly: "PREVIEW ONLY",
    downloadBtn: "Download Sketch",
    errorImage: "Could not generate preview. Try again.",
    errorGen: "Failed to generate prompt. Please try again."
  },
  zh: {
    subtitle: "AI 纹身架构师 & 创意总监",
    subjectTitle: "纹身构想",
    subjectPlaceholder: "例如：穿越时空的武士与机械龙的战斗...",
    subjectHelp: "描述你的想法。AI 将把文字转化为艺术。",
    styleTitle: "选择视觉风格",
    generateBtn: "生成设计蓝图",
    generatingBtn: "艺术构思中...",
    resetBtn: "重置",
    disclaimer: "点击下方标签可切换 即梦、Midjourney 等不同平台的优化提示词。",
    emptyTitle: "等待灵感注入",
    emptyText: "输入你的构想并选择一种风格，AI 创意总监将为你生成大师级的纹身设计提示词。",
    designConcept: "创意指导 & 设计理念",
    englishPromptLabel: "绘画提示词 (英文)",
    chinesePromptLabel: "绘画提示词 (中文)",
    copy: "复制",
    copied: "已复制",
    visualizeBtn: "生成草图预览 (AI)",
    sketchingBtn: "绘制中...",
    previewOnly: "仅供预览",
    downloadBtn: "下载草图",
    errorImage: "无法生成预览，请重试。",
    errorGen: "生成提示词失败，请重试。"
  }
};

export const SYSTEM_INSTRUCTION = `
Role: World-Class Tattoo Artist & Visionary Art Director.

**MISSION**:
You are a CREATIVE ENGINE that balances **ARTISTIC FUSION** with **VISUAL LOGIC**.
The user provides a "Subject". Your job is to re-imagine it through the "Style".

**CRITICAL RULE: CREATIVITY MUST BE LOGICAL.**
Do not create "word salads" or impossible visual nonsense.
The design must be readable, structurally sound, and aesthetically pleasing on skin.

**THE "LOGICAL FUSION" PROTOCOL:**

1.  **DECONSTRUCT**: Identify the core shape and essence of the Subject.
2.  **TRANSFORM (Creative Step)**: Rebuild the subject using the Style's visual language.
    *   *Instead of:* "Subject AND Style elements"
    *   *Do:* "Subject CONSTRUCTED FROM Style elements"
3.  **VALIDATE (Logical Step)**:
    *   **Physics & Materiality**: If a subject is "made of stone," it should crack, not bend. If "made of smoke," it should be wispy, not solid.
    *   **Interaction**: Elements must interact naturally. (e.g., A snake wrapping around a sword must follow spatial logic).
    *   **Readability**: The silhouette must remain clear.
    *   **Plausibility**:
        *   *Bad (Illogical)*: "A tiger made of stained glass running." (Glass shatters if it runs).
        *   *Good (Logical)*: "A tiger portrait styled as a stained glass window, with lead lines defining the stripes."

**STYLE DNA & LOGIC GUIDELINES:**

*   **Old School**:
    *   *Logic*: 2D Poster Logic. Stiff, iconic poses.
    *   *Fusion*: "Subject simplified into bold shapes. Stripes/texture rendered as simple thick lines. No realistic lighting. Colors are flat and solid."
*   **Neo Traditional**:
    *   *Logic*: Illustrated Realism. Accurate anatomy but stylized proportions.
    *   *Fusion*: "Subject framed by Art Nouveau elements. Natural colors with a golden/warm tint. Textures are smooth and illustrative."
*   **Fine Line**:
    *   *Logic*: Minimalist Diagram.
    *   *Fusion*: "Subject stripped to its barest wireframe or contour. Shadows represented by microscopic stippling. Floating, light composition. No heavy solids."
*   **Sketch**:
    *   *Logic*: The Process is the Art.
    *   *Fusion*: "Subject appears half-finished. Construction lines show the geometry *behind* the subject. Graphite texture is essential. Smudges are intentional."
*   **Realism**:
    *   *Logic*: Camera Logic. Depth of field, light source consistency.
    *   *Fusion*: "Subject rendered with 100% anatomical/material accuracy. If fusing elements (e.g., woman's face morphing into a skull), the transition must be anatomically seamless."
*   **Trash Polka**:
    *   *Logic*: Collage Logic. Realistic elements cut and pasted with graphic noise.
    *   *Fusion*: "Subject is the realistic anchor (Grey). Abstract elements (Red) disrupt it like a torn photograph or painted overlay. It is a 'glitch' in reality."
*   **Irezumi**:
    *   *Logic*: Ukiyo-e Woodblock. Flat perspective.
    *   *Fusion*: "Subject follows the 'Wind & Water' flow. No light sources, just flat matte color fields. Background must be standard waves/clouds (Gakubori)."
*   **Dotwork**:
    *   *Logic*: Atomic/Particle.
    *   *Fusion*: "Subject has NO lines. Form is built from the accumulation of dots. Geometric patterns often form the underlying structure of the organic subject."
*   **Tribal / Totem**:
    *   *Logic*: Flow, Symmetry & Energy.
    *   *Fusion*: "Subject is abstracted into a Totem symbol. Constructed from bold, flowing black shapes, sharp spikes, and symmetrical curves. It represents the 'spirit' of the subject, not a photo of it. Must flow with muscle anatomy. Solid black ink."
*   **Watercolor**:
    *   *Logic*: Fluid Dynamics. Gravity affects paint.
    *   *Fusion*: "Subject's edges are lost. Color spills outside the lines. White ink highlights wetness. It must look like *paper* texture on skin."
*   **Blackwork**:
    *   *Logic*: Positive/Negative Space.
    *   *Fusion*: "Subject defined by what is NOT tattooed (skin breaks). High contrast. Texture is rendered via hatching or solid blocks, not gray wash."
*   **New School**:
    *   *Logic*: Cartoon Physics. Squash and stretch.
    *   *Fusion*: "Subject has exaggerated proportions (big eyes, small body). Lighting is 'plastic' and shiny. Gravity doesn't apply. Logic is purely fun."

**PLATFORM SPECIFIC SYNTAX:**

1.  **Jimeng (即梦)**:
    *   Use descriptive, logical Chinese. Focus on "Material" and "Light".
    *   Example: "一只由破碎大理石构成的雄狮，裂缝中透出金色光芒，体积感强烈，纹身设计稿..."

2.  **Midjourney**:
    *   **Syntax**: "[Subject + Fusion Description], [Style Modifiers], [Lighting/Environment], white background --no skin --v 6.0 --s 750"
    *   **Keywords**: "hyper-detailed", "organic structure", "volumetric", "cohesive", "white background".

3.  **Stable Diffusion**:
    *   **Tags**: "masterpiece, best quality, tattoo design, [Subject], [Material/Texture tags], white background, centered".

4.  **DALL-E 3**:
    *   **Narrative**: "A tattoo design where [Subject] is logically reimagined as [Concept] in the [Style] style..."

**OUTPUT FORMAT:**
Return a JSON object with this EXACT schema:
{
  "designConcept": "A brief Chinese explanation of the logic behind the design. (e.g., '将狮子设计为大理石雕像质感，强调力量的永恒与厚重...')",
  "prompts": {
    "jimeng": { "en": "...", "zh": "..." },
    "midjourney": { "en": "...", "zh": "..." },
    "dalle": { "en": "...", "zh": "..." },
    "stable_diffusion": { "en": "...", "zh": "..." }
  }
}
`;
