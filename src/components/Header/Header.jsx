import { useState } from "react";
import { Search, Bell, Gift, PlusCircle, Sun, Moon, Palette } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";
import { currentUser } from "../../config/currentUser";
import { ghostBtn } from "../common/styles";
import CustomizerMenu from "./CustomizerMenu";

export default function Header() {
  const { t, dark, setDark, lang, setLang, isRtl } = useSettings();
  const [open, setOpen] = useState(false); // فتح/إغلاق قائمة التخصيص

  // الاسم والدور يُقرآن من currentUser حسب اللغة الحالية
  const name = isRtl ? currentUser.nameAr : currentUser.name;
  const role = isRtl ? currentUser.roleAr : currentUser.role;

  return (
    <header className="relative flex h-16 items-center gap-3 border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex w-full max-w-xs items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700">
        <Search size={16} className="text-slate-400" />
        <input placeholder={t("search")} className="w-full bg-transparent text-sm outline-none dark:text-white" />
        <kbd className="hidden text-xs text-slate-400 sm:block">⌘F</kbd>
      </div>

      <div className="flex-1" />

      {/* زر اللغة: يبدّل بين ar و en */}
      <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className={ghostBtn} aria-label={t("language")}>
        {lang === "ar" ? "EN" : "AR"}
      </button>
      {/* زر الوضع الداكن */}
      <button onClick={() => setDark(!dark)} className={ghostBtn} aria-label={t("theme")}>
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
      {/* زر قائمة التخصيص */}
      <button onClick={() => setOpen(!open)} className={ghostBtn} aria-label={t("customize")}>
        <Palette size={16} />
      </button>

      <div className="hidden items-center gap-3 text-slate-500 sm:flex">
        <Gift size={18} /><Bell size={18} /><PlusCircle size={18} />
      </div>

      <div className="flex items-center gap-2 border-s border-slate-200 ps-3 dark:border-slate-700">
        {currentUser.avatar ? (
          <img src={currentUser.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
        ) : (
          <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-bold text-white">
            {name.trim().charAt(0)}
          </div>
        )}
        <div className="hidden text-sm leading-tight md:block">
          <p className="font-semibold dark:text-white">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>

      {open && <CustomizerMenu />}
    </header>
  );
}
