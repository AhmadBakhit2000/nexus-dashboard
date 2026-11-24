import { useCallback, useEffect, useMemo, type ReactNode } from "react";
import { usePersistedState } from "../hooks/usePersistedState";
import {
  translations,
  type Language,
  type TranslationKey,
  type TranslationListKey,
} from "../i18n/translations";
import {
  FONTS,
  PALETTES,
  SettingsContext,
  type ColorKey,
  type FontKey,
  type SettingsValue,
} from "./settings";

const hasKey = (obj: object, value: unknown): boolean =>
  typeof value === "string" && Object.prototype.hasOwnProperty.call(obj, value);

const isBoolean = (v: unknown): v is boolean => typeof v === "boolean";
const isLanguage = (v: unknown): v is Language => hasKey(translations, v);
const isColorKey = (v: unknown): v is ColorKey => hasKey(PALETTES, v);
const isFontKey = (v: unknown): v is FontKey => hasKey(FONTS, v);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = usePersistedState<boolean>("nx-dark", false, isBoolean);
  const [lang, setLangState] = usePersistedState<Language>("nx-lang", "en", isLanguage);
  const [color, setColor] = usePersistedState<ColorKey>("nx-color", "purple", isColorKey);
  const [font, setFont] = usePersistedState<FontKey>("nx-font", "sans", isFontKey);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.lang = lang;
    root.style.setProperty("--p", PALETTES[color].rgb[0]);
    root.style.setProperty("--p2", PALETTES[color].rgb[1]);
    root.style.setProperty("--font", FONTS[font]);
  }, [dark, lang, color, font]);

  const setLang = useCallback(
    (next: Language) => {
      setLangState(next);
      setFont(next === "ar" ? "arabic" : "sans");
    },
    [setLangState, setFont]
  );

  const t = useCallback((key: TranslationKey) => translations[lang][key], [lang]);
  const tList = useCallback((key: TranslationListKey) => translations[lang][key], [lang]);

  const value = useMemo<SettingsValue>(
    () => ({
      dark,
      setDark,
      lang,
      setLang,
      color,
      setColor,
      font,
      setFont,
      palette: { p: PALETTES[color].hex[0], p2: PALETTES[color].hex[1] },
      isRtl: lang === "ar",
      t,
      tList,
    }),
    [dark, setDark, lang, setLang, color, setColor, font, setFont, t, tList]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}
