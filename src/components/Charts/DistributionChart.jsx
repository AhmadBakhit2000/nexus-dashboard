import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useSettings } from "../../context/SettingsContext";
import { distributionData } from "../../data/mock";
import { card } from "../common/styles";

export default function DistributionChart() {
  const { t, palette } = useSettings();
  const colors = [palette.p, "#14b8a6", "#cbd5e1"];
  return (
    <div className={`${card} p-5`}>
      <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">{t("dist")}</p>
      <div className="grid grid-cols-3 gap-2 text-xs">
        {distributionData.map((x, i) => (
          <div key={x.key} className="border-s-2 ps-2" style={{ borderColor: colors[i] }}>
            <p className="text-slate-400">{t(x.key)}</p>
            <p className="text-base font-semibold dark:text-white">${x.v}</p>
          </div>
        ))}
      </div>
      <div className="h-44" dir="ltr">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={distributionData} dataKey="v" innerRadius={55} outerRadius={80} paddingAngle={3} stroke="none">
              {distributionData.map((_, i) => <Cell key={i} fill={colors[i]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
