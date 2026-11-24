import { DollarSign, Receipt, ShoppingCart } from "lucide-react";
import { fetchOrderSummary } from "../../api/orders";
import { useSettings } from "../../context/useSettings";
import { useAsync } from "../../hooks/useAsync";
import { formatCurrency, formatNumber } from "../../utils/format";
import { card, ghostBtn } from "../common/styles";
import StatCard, { StatCardSkeleton } from "./StatCard";

const GRID = "grid gap-4 md:grid-cols-3";

export default function StatsGrid() {
  const { t, lang } = useSettings();
  const { state, reload } = useAsync(fetchOrderSummary);

  if (state.status === "loading") {
    return (
      <div className={GRID} role="status" aria-label={t("loading")}>
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div role="alert" className={`${card} flex flex-wrap items-center justify-between gap-3 p-5`}>
        <p className="text-sm text-slate-600 dark:text-slate-300">{t("loadError")}</p>
        <button onClick={reload} className={ghostBtn}>
          {t("retry")}
        </button>
      </div>
    );
  }

  const { orders, revenue, averageOrder } = state.data;
  return (
    <div className={GRID}>
      <StatCard icon={ShoppingCart} label={t("orders")} value={formatNumber(orders, lang)} />
      <StatCard icon={DollarSign} label={t("revenue")} value={formatCurrency(revenue, lang)} />
      <StatCard icon={Receipt} label={t("avgOrder")} value={formatCurrency(averageOrder, lang)} />
    </div>
  );
}
