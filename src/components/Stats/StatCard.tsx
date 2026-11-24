import type { LucideIcon } from "lucide-react";
import { card } from "../common/styles";
import Badge from "./Badge";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  badge?: string;
  up?: boolean;
}

export default function StatCard({ icon: Icon, label, value, badge, up }: StatCardProps) {
  return (
    <div className={`${card} p-5`}>
      <div className="mb-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
        <span className="rounded-lg bg-slate-100 p-1.5 dark:bg-slate-800">
          <Icon size={15} aria-hidden="true" />
        </span>
        {label}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-3xl font-semibold dark:text-white">{value}</span>
        {badge && <Badge value={badge} up={up} />}
      </div>
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className={`${card} animate-pulse p-5 motion-reduce:animate-none`} aria-hidden="true">
      <div className="mb-3 h-6 w-28 rounded-lg bg-slate-100 dark:bg-slate-800" />
      <div className="h-9 w-36 rounded-lg bg-slate-100 dark:bg-slate-800" />
    </div>
  );
}
