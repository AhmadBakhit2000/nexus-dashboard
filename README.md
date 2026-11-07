# Nexus Dashboard

لوحة تحكم React + Vite + Tailwind CSS (Recharts + lucide-react).

## التشغيل
```bash
npm install
npm run dev      # ثم افتح الرابط الذي يظهر (عادةً http://localhost:5173)
npm run build    # بناء نسخة الإنتاج
```
يتطلب Node.js 18 أو أحدث.

## أين أعدّل؟
- معلوماتك الشخصية: `src/config/currentUser.js`
- إدارة الوضع الداكن واللغة واللون والخط: `src/context/SettingsContext.jsx`
- النصوص والترجمة: `src/i18n/translations.js`
- البيانات الوهمية: `src/data/mock.js`
- إضافة لون أساسي جديد: أضف مدخلاً في `PALETTES` داخل SettingsContext.jsx
