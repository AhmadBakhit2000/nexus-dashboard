import { card } from "../common/styles";
import Badge from "./Badge";

export default function StatCard({ icon: Icon, label, value, badge, up }) {
  return (
    <div className={`${card} p-5`}>
      <div className="mb-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
        <span className="rounded-lg bg-slate-100 p-1.5 dark:bg-slate-800"><Icon size={15} /></span>
        {label}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-3xl font-semibold dark:text-white">{value}</span>
        <Badge value={badge} up={up} />
      </div>
    </div>
  );
}
