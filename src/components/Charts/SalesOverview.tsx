import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Filter } from "lucide-react";
import { useSettings } from "../../context/useSettings";
import { salesData } from "../../data/mock";
import { card, ghostBtn } from "../common/styles";
import Badge from "../Stats/Badge";

export default function SalesOverview() {
  const { t, tList, palette } = useSettings();

  const shades = [palette.p, palette.p2, "#3b82f6", "#14b8a6", "#67e8f9"];
  const keys = ["a", "b", "c", "d", "e"];

  return (
    <div className={`${card} p-5 lg:col-span-2`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-300">{t("sales")}</p>
          <p className="my-1 text-3xl font-semibold dark:text-white">$9,257.51</p>
          <Badge value="15.8%" up /> <span className="text-xs text-slate-400">+ $143.50 {t("increased")}</span>
        </div>
        <button className={ghostBtn}><Filter size={14} />{t("filter")}</button>
      </div>

      <div className="mt-3 h-60" dir="ltr" role="img" aria-label={t("sales")}>
        <ResponsiveContainer>
          <BarChart data={salesData} barSize={64}>
            <XAxis dataKey="m" tickFormatter={(i: number) => tList("months")[i]} axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <Tooltip cursor={false} />
            {keys.map((k, i) => (
              <Bar key={k} dataKey={k} stackId="s" fill={shades[i]} radius={4} name={tList("regions")[i]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-4 text-xs text-slate-500">
        {tList("regions").map((r, i) => (
          <span key={r} className="flex items-center gap-1.5">
            <i className="h-2 w-2 rounded-sm" style={{ background: shades[i] }} />{r}
          </span>
        ))}
      </div>
    </div>
  );
}
