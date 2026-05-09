import { StatCard } from "@/components/StatCard";
import { DonationChart } from "@/components/DonationChart";
import {
  Camera,
  DollarSign,
  Package,
  Shirt,
  Utensils,
  Droplets,
  Plus,
} from "lucide-react";
import Link from "next/link";

const RECENT = [
  {
    id: "d1",
    type: "financial",
    label: "Acme Corp",
    sub: "via Stripe",
    amount: "$5,000",
    time: "1d ago",
  },
  {
    id: "d2",
    type: "physical",
    label: "Canned goods",
    sub: "240 items · Food",
    amount: "$360",
    time: "2d ago",
  },
  {
    id: "d3",
    type: "financial",
    label: "Jane Smith",
    sub: "via PayPal",
    amount: "$1,200",
    time: "3d ago",
  },
  {
    id: "d4",
    type: "physical",
    label: "Winter coats",
    sub: "85 items · Clothing",
    amount: "$2,125",
    time: "4d ago",
  },
  {
    id: "d5",
    type: "financial",
    label: "Anonymous",
    sub: "via Check",
    amount: "$750",
    time: "5d ago",
  },
  {
    id: "d6",
    type: "physical",
    label: "Toiletries",
    sub: "120 items · Hygiene",
    amount: "$480",
    time: "6d ago",
  },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  food: <Utensils className="w-3.5 h-3.5" />,
  clothing: <Shirt className="w-3.5 h-3.5" />,
  hygiene: <Droplets className="w-3.5 h-3.5" />,
  physical: <Package className="w-3.5 h-3.5" />,
};

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gl-text">Impact Dashboard</h1>
          <p className="text-sm text-gl-muted mt-0.5">
            Food for All Foundation · Demo Mode
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/log/financial"
            className="flex items-center gap-2 text-sm font-semibold border border-gl-border text-gl-muted px-4 py-2.5 rounded-xl hover:border-gl-gold/40 hover:text-gl-gold transition-all cursor-pointer"
          >
            <DollarSign className="w-4 h-4" /> Log Financial
          </Link>
          <Link
            href="/log/physical"
            className="flex items-center gap-2 text-sm font-semibold bg-gl-purple text-white px-4 py-2.5 rounded-xl hover:bg-gl-purple-light transition-colors cursor-pointer"
          >
            <Camera className="w-4 h-4" /> AI Photo Log
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Total Raised"
          value="$29,450"
          sub="All-time financial donations"
          trend={12}
          accent="gold"
        />
        <StatCard
          label="Physical Value"
          value="$8,240"
          sub="Fair market value logged"
          trend={7}
          accent="purple"
        />
        <StatCard
          label="Logs This Month"
          value="34"
          sub="Financial + physical combined"
          trend={22}
          accent="green"
        />
        <StatCard
          label="Donors"
          value="47"
          sub="Unique contributors"
          trend={5}
          accent="default"
        />
      </div>

      {/* Chart + Activity split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-gl-surface border border-gl-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-base font-semibold text-gl-text">
                Donation Trend
              </h2>
              <p className="text-xs text-gl-muted">Last 30 days</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-gl-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gl-gold inline-block" />
                Financial
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gl-purple inline-block" />
                Physical
              </span>
            </div>
          </div>
          <DonationChart />
        </div>

        {/* Category breakdown */}
        <div className="bg-gl-surface border border-gl-border rounded-2xl p-6">
          <h2 className="text-base font-semibold text-gl-text mb-5">
            By Category
          </h2>
          <div className="space-y-4">
            {[
              { label: "Food", pct: 42, value: "$3,460", color: "bg-gl-gold" },
              {
                label: "Clothing",
                pct: 28,
                value: "$2,310",
                color: "bg-gl-purple",
              },
              {
                label: "Hygiene",
                pct: 18,
                value: "$1,485",
                color: "bg-gl-green",
              },
              { label: "Other", pct: 12, value: "$985", color: "bg-gl-blue" },
            ].map(({ label, pct, value, color }) => (
              <div key={label}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-gl-muted font-medium">{label}</span>
                  <span className="font-mono font-semibold text-gl-text">
                    {value}
                  </span>
                </div>
                <div className="h-1.5 bg-gl-raised rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${color}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gl-surface border border-gl-border rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gl-border">
          <h2 className="text-base font-semibold text-gl-text">
            Recent Activity
          </h2>
          <Link
            href="/history"
            className="text-xs text-gl-muted hover:text-gl-gold transition-colors cursor-pointer"
          >
            View all →
          </Link>
        </div>
        <div className="divide-y divide-gl-border">
          {RECENT.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 px-6 py-3.5 hover:bg-gl-raised/50 transition-colors"
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  item.type === "financial"
                    ? "bg-gl-gold/15 text-gl-gold"
                    : "bg-gl-purple/15 text-gl-purple"
                }`}
              >
                {item.type === "financial" ? (
                  <DollarSign className="w-4 h-4" />
                ) : (
                  CATEGORY_ICONS[
                    item.sub.split("·")[1]?.trim().toLowerCase() || "physical"
                  ] || <Package className="w-4 h-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gl-text truncate">
                  {item.label}
                </p>
                <p className="text-xs text-gl-muted">{item.sub}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-mono text-sm font-bold text-gl-gold">
                  {item.amount}
                </p>
                <p className="text-[11px] text-gl-muted">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAB */}
      <Link
        href="/log/physical"
        className="fixed bottom-8 right-8 w-14 h-14 bg-gl-purple rounded-2xl shadow-lg shadow-gl-purple/30 flex items-center justify-center hover:bg-gl-purple-light hover:scale-105 transition-all duration-150 cursor-pointer z-40"
        title="AI Photo Log"
      >
        <Plus className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
}
