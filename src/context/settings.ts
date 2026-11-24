import { createContext } from "react";
import type { Language, TranslationKey, TranslationListKey } from "../i18n/translations";

export const PALETTES = {
  purple: { rgb: ["91 71 209", "139 124 246"], hex: ["#5b47d1", "#8b7cf6"] },
  blue: { rgb: ["37 99 235", "96 165 250"], hex: ["#2563eb", "#60a5fa"] },
  green: { rgb: ["5 150 105", "52 211 153"], hex: ["#059669", "#34d399"] },
} as const;

export const FONTS = {
  sans: '"Plus Jakarta Sans", system-ui, sans-serif',
  arabic: '"Tajawal", "Cairo", system-ui, sans-serif',
} as const;

export type ColorKey = keyof typeof PALETTES;
export type FontKey = keyof typeof FONTS;

export interface Palette {
  p: string;
  p2: string;
}

export interface SettingsValue {
  dark: boolean;
  setDark: (value: boolean) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  color: ColorKey;
  setColor: (color: ColorKey) => void;
  font: FontKey;
  setFont: (font: FontKey) => void;
  palette: Palette;
  isRtl: boolean;
  t: (key: TranslationKey) => string;
  tList: (key: TranslationListKey) => string[];
}

export const SettingsContext = createContext<SettingsValue | null>(null);
