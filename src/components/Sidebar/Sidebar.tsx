import {
  LayoutDashboard,
  ArrowLeftRight,
  Users,
  MessageCircle,
  ShoppingBag,
  FileText,
  LineChart,
  Sparkles,
  Settings,
  ShieldCheck,
  HelpCircle,
  Zap,
  ChevronsUpDown,
  type LucideIcon,
} from "lucide-react";
import { useSettings } from "../../context/useSettings";
import type { TranslationKey } from "../../i18n/translations";
import { focusRing } from "../common/styles";

interface NavItem {
  icon: LucideIcon;
  key: TranslationKey;
  badge?: string;
  active?: boolean;
}

interface NavGroup {
  key: TranslationKey;
  items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    key: "general",
    items: [
      { icon: LayoutDashboard, key: "dashboard", active: true },
      { icon: ArrowLeftRight, key: "payment" },
      { icon: Users, key: "customers" },
      { icon: MessageCircle, key: "message", badge: "8" },
    ],
  },
  {
    key: "tools",
    items: [
      { icon: ShoppingBag, key: "product" },
      { icon: FileText, key: "invoice" },
      { icon: LineChart, key: "analytics" },
      { icon: Sparkles, key: "automation", badge: "beta" },
    ],
  },
  {
    key: "support",
    items: [
      { icon: Settings, key: "settings" },
      { icon: ShieldCheck, key: "security" },
      { icon: HelpCircle, key: "help" },
    ],
  },
];

export default function Sidebar() {
  const { t } = useSettings();
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-e border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:flex">
      <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-5 dark:border-slate-800">
        <Zap size={22} className="text-primary" aria-hidden="true" />
        <span className="text-xl font-bold text-primary">Nexus</span>
      </div>

      <nav aria-label={t("navigation")} className="flex-1 overflow-y-auto px-3 py-4">
        {NAV_GROUPS.map(({ key: group, items }) => (
          <div key={group} className="mb-5">
            <p className="mb-2 px-3 text-xs text-slate-400">{t(group)}</p>
            {items.map(({ icon: Icon, key, badge, active }) => (
              <a
                key={key}
                href="#"
                aria-current={active ? "page" : undefined}
                className={`mb-0.5 flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${focusRing} ${
                  active
                    ? "bg-slate-100 font-semibold text-slate-900 dark:bg-slate-800 dark:text-white"
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                <Icon size={17} aria-hidden="true" />
                <span className="flex-1">{t(key)}</span>
                {badge === "beta" ? (
                  <span className="rounded-md bg-primary/10 px-1.5 text-xs text-primary">
                    {t("beta")}
                  </span>
                ) : badge ? (
                  <span className="rounded-md bg-slate-100 px-1.5 text-xs dark:bg-slate-800">
                    {badge}
                  </span>
                ) : null}
              </a>
            ))}
          </div>
        ))}
      </nav>

      <div className="space-y-2 border-t border-slate-200 p-3 dark:border-slate-800">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-2 dark:bg-slate-800">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-teal-400 text-white">
            <Zap size={18} aria-hidden="true" />
          </div>
          <div className="flex-1 text-sm">
            <p className="text-xs text-slate-400">{t("team")}</p>
            <p className="font-semibold dark:text-white">{t("marketing")}</p>
          </div>
          <ChevronsUpDown size={14} className="text-slate-400" aria-hidden="true" />
        </div>
        <button
          className={`w-full rounded-lg bg-primary py-2 text-sm font-medium text-white hover:opacity-90 ${focusRing}`}
        >
          {t("upgrade")}
        </button>
        <p className="pt-1 text-center text-xs text-slate-400">{t("copy")}</p>
      </div>
    </aside>
  );
}
