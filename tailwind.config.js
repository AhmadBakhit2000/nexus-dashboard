/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  // الوضع الداكن عبر الفئات: عند وجود الفئة "dark" على <html>
  // تعمل كل فئات dark:* (مثل dark:bg-slate-900). الفئة تُضاف/تُزال من SettingsContext.
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // اللون الأساسي يقرأ من متغيرات CSS (--p و --p2) التي يضبطها SettingsContext.
        // لذلك bg-primary / text-primary / border-primary تتغير فوراً عند اختيار لون آخر.
        // الصيغة rgb(var(--p) / <alpha-value>) تسمح باستخدام الشفافية مثل bg-primary/10.
        primary: "rgb(var(--p) / <alpha-value>)",
        primary2: "rgb(var(--p2) / <alpha-value>)",
      },
      fontFamily: {
        // الخط الفعّال يُضبط من السياق عبر المتغير --font، وهذه الخيارات احتياطية.
        sans: ["var(--font)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        arabic: ["Tajawal", "Cairo", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
