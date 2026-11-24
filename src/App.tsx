import { Calendar, Filter, Download } from "lucide-react";
import { useSettings } from "./context/useSettings";
import { ghostBtn } from "./components/common/styles";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import SalesOverview from "./components/Charts/SalesOverview";
import SubscribersChart from "./components/Charts/SubscribersChart";
import DistributionChart from "./components/Charts/DistributionChart";
import IntegrationsTable from "./components/Integrations/IntegrationsTable";

export default function App() {
  const { t } = useSettings();
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex-1 space-y-4 overflow-y-auto p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-2xl font-semibold">{t("dashboard")}</h1>
            <div className="flex flex-wrap gap-2">
              <span className={ghostBtn}>
                <Calendar size={14} aria-hidden="true" />
                {t("range")}
              </span>
              <span className={ghostBtn}>{t("monthly")}</span>
              <button className={ghostBtn}>
                <Filter size={14} aria-hidden="true" />
                {t("filter")}
              </button>
              <button className={ghostBtn}>
                <Download size={14} aria-hidden="true" />
                {t("export")}
              </button>
            </div>
          </div>

          <StatsGrid />

          <div className="grid gap-4 lg:grid-cols-3">
            <SalesOverview />
            <SubscribersChart />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <DistributionChart />
            <IntegrationsTable />
          </div>
        </main>
      </div>
    </div>
  );
}
