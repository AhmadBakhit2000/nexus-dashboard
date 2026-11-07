import { useSettings } from "../../context/SettingsContext";
import { integrations } from "../../data/mock";
import { card } from "../common/styles";

export default function IntegrationsTable() {
  const { t } = useSettings();
  return (
    <div className={`${card} p-5 lg:col-span-2`}>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-300">{t("integ")}</p>
        <a href="#" className="text-sm font-medium text-primary">{t("seeAll")}</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-xs text-slate-400 dark:bg-slate-800">
              {["app", "type", "rate", "profit"].map((h) => (
                <th key={h} className="px-3 py-2 text-start font-medium">{t(h)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {integrations.map((r) => (
              <tr key={r.n} className="border-b border-slate-100 dark:border-slate-800 dark:text-slate-200">
                <td className="px-3 py-3">
                  <span className="flex items-center gap-2">
                    <i className="grid h-8 w-8 place-items-center rounded-lg text-xs font-bold not-italic text-white" style={{ background: r.c }}>{r.n[0]}</i>
                    {r.n}
                  </span>
                </td>
                <td className="px-3 text-slate-500 dark:text-slate-400">{t(r.k)}</td>
                <td className="px-3">
                  {/* شريط التقدم يستخدم bg-primary فيتبع اللون المختار */}
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-24 rounded-full bg-slate-100 dark:bg-slate-700">
                      <span className="block h-full rounded-full bg-primary" style={{ width: `${r.r}%` }} />
                    </span>
                    {r.r}%
                  </span>
                </td>
                <td className="px-3">{r.p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
