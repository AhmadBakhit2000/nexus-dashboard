import { BarChart, Bar, XAxis, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { useSettings } from "../../context/SettingsContext";
import { subsData } from "../../data/mock";
import { card } from "../common/styles";
import Badge from "../Stats/Badge";

export default function SubscribersChart() {
  const { t, palette } = useSettings();
  const data = subsData.map((v, i) => ({ d: t("days")[i], v }));
  return (
    <div className={`${card} p-5`}>
      <p className="text-sm text-slate-600 dark:text-slate-300">{t("subs")}</p>
      <p className="my-1 text-3xl font-semibold dark:text-white">24,473</p>
      <Badge value="8.3%" up /> <span className="text-xs text-slate-400">+ 749 {t("increased")}</span>
      <div className="mt-3 h-52" dir="ltr">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="d" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <Tooltip cursor={false} />
            <Bar dataKey="v" radius={8}>
              {/* العمود الثالث (الثلاثاء) يأخذ اللون الأساسي */}
              {data.map((_, i) => (
                <Cell key={i} fill={i === 2 ? palette.p : "#cbd5e1"} fillOpacity={i === 2 ? 1 : 0.5} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
