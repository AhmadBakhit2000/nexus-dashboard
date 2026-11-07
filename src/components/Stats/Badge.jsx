import { TrendingDown, TrendingUp } from "lucide-react";

// شارة النسبة: خضراء للارتفاع وحمراء للانخفاض
export default function Badge({ value, up }) {
  const Icon = up ? TrendingUp : TrendingDown;
  const tone = up
    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
    : "bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400";
  return (
    <span className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium ${tone}`}>
      {value} <Icon size={12} />
    </span>
  );
}
