import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n/translations";

/**
 * ====================================================================
 * SettingsContext — القلب الذي يدير حالة الواجهة كلها
 * ====================================================================
 * أربع حالات (State) أساسية، كلها تُحفظ في localStorage وتُستعاد عند فتح الصفحة:
 *
 * 1) dark  (true/false)  → الوضع الداكن.
 *    نضيف/نزيل الفئة "dark" على <html>، فتعمل كل فئات dark:* في Tailwind
 *    (يتطلب darkMode: "class" في tailwind.config.js).
 *
 * 2) lang  ("en" | "ar") → اللغة.
 *    نضبط dir="rtl" و lang="ar" على <html> فينعكس التخطيط كاملاً.
 *    الدالة t("key") تقرأ النص من translations.js حسب اللغة الحالية.
 *    وعند تبديل اللغة يتغير الخط تلقائياً (عربي ← Tajawal، إنجليزي ← Sans).
 *
 * 3) color ("purple" | "blue" | "green") → اللون الأساسي.
 *    نكتب قيمته كمتغيرات CSS (--p, --p2) على <html>، وTailwind يقرأها
 *    عبر bg-primary و text-primary. أما الرسوم (Recharts) فتأخذ اللون
 *    الجاهز من palette لأنها تحتاج قيمة HEX مباشرة.
 *
 * 4) font ("sans" | "arabic") → الخط.
 *    نكتب عائلة الخط في المتغير --font على <html>، والـ body يستخدمه.
 * ====================================================================
 */

// ألوان RGB (للمتغيرات) وHEX (للرسوم البيانية)
export const PALETTES = {
  purple: { rgb: ["91 71 209", "139 124 246"], hex: ["#5b47d1", "#8b7cf6"] },
  blue: { rgb: ["37 99 235", "96 165 250"], hex: ["#2563eb", "#60a5fa"] },
  green: { rgb: ["5 150 105", "52 211 153"], hex: ["#059669", "#34d399"] },
};

export const FONTS = {
  sans: '"Plus Jakarta Sans", system-ui, sans-serif',
  arabic: '"Tajawal", "Cairo", system-ui, sans-serif',
};

const SettingsContext = createContext(null);

// قراءة قيمة محفوظة بأمان (قد يمنع المتصفح الوصول إلى localStorage)
const load = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

export function SettingsProvider({ children }) {
  const [dark, setDark] = useState(() => load("nx-dark", false));
  const [lang, setLang] = useState(() => load("nx-lang", "en"));
  const [color, setColor] = useState(() => load("nx-color", "purple"));
  const [font, setFont] = useState(() => load("nx-font", "sans"));

  // تطبيق الإعدادات على عنصر <html> كلما تغيّرت أي حالة
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);                     // الوضع الداكن
    root.dir = lang === "ar" ? "rtl" : "ltr";                // اتجاه الصفحة
    root.lang = lang;
    root.style.setProperty("--p", PALETTES[color].rgb[0]);   // اللون الأساسي
    root.style.setProperty("--p2", PALETTES[color].rgb[1]);
    root.style.setProperty("--font", FONTS[font]);           // الخط

    try {
      localStorage.setItem("nx-dark", JSON.stringify(dark));
      localStorage.setItem("nx-lang", JSON.stringify(lang));
      localStorage.setItem("nx-color", JSON.stringify(color));
      localStorage.setItem("nx-font", JSON.stringify(font));
    } catch { /* نتجاهل أخطاء التخزين */ }
  }, [dark, lang, color, font]);

  // تبديل اللغة مع ضبط الخط المناسب تلقائياً (يمكن للمستخدم تغييره بعدها)
  const changeLang = (next) => {
    setLang(next);
    setFont(next === "ar" ? "arabic" : "sans");
  };

  const value = useMemo(
    () => ({
      dark, setDark,
      lang, setLang: changeLang,
      color, setColor,
      font, setFont,
      palette: { p: PALETTES[color].hex[0], p2: PALETTES[color].hex[1] },
      isRtl: lang === "ar",
      t: (key) => translations[lang][key] ?? key, // دالة الترجمة
    }),
    [dark, lang, color, font]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

// خطاف مختصر يستخدمه أي مكوّن للوصول إلى الإعدادات
export const useSettings = () => useContext(SettingsContext);
