import { useSettings, PALETTES, FONTS } from "../../context/SettingsContext";

/**
 * قائمة تخصيص المظهر: اختيار اللون الأساسي والخط.
 * عند الضغط نستدعي setColor / setFont من السياق، فيعيد SettingsContext
 * كتابة المتغيرات --p و --font على <html> وتتغير الواجهة كلها فوراً.
 */
export default function CustomizerMenu() {
  const { t, color, setColor, font, setFont } = useSettings();
  return (
    <div className="absolute end-4 top-16 z-20 w-60 rounded-xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-800">
      <p className="mb-2 text-xs text-slate-400">{t("color")}</p>
      <div className="mb-4 flex gap-2">
        {Object.keys(PALETTES).map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            title={t(c)}
            aria-label={t(c)}
            className={`h-8 w-8 rounded-full ring-offset-2 dark:ring-offset-slate-800 ${color === c ? "ring-2 ring-slate-400" : ""}`}
            style={{ background: PALETTES[c].hex[0] }}
          />
        ))}
      </div>

      <p className="mb-2 text-xs text-slate-400">{t("font")}</p>
      <div className="flex gap-2">
        {[["sans", "Sans"], ["arabic", "عربي"]].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFont(key)}
            style={{ fontFamily: FONTS[key] }}
            className={`flex-1 rounded-lg border py-1.5 text-sm ${
              font === key
                ? "border-transparent bg-primary text-white"
                : "border-slate-200 dark:border-slate-600 dark:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
