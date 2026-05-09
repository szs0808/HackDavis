import { Package, DollarSign, Filter } from "lucide-react";
import Link from "next/link";

const ALL_DONATIONS = [
  {
    id: "d1",
    type: "financial",
    label: "Acme Corp",
    sub: "Stripe",
    amount: "$5,000",
    qty: null,
    date: "May 8, 2026",
    status: "confirmed",
  },
  {
    id: "d2",
    type: "physical",
    label: "Canned goods",
    sub: "Food · 240 items",
    amount: "$360",
    qty: "240 items",
    date: "May 7, 2026",
    status: "confirmed",
  },
  {
    id: "d3",
    type: "financial",
    label: "Jane Smith",
    sub: "PayPal",
    amount: "$1,200",
    qty: null,
    date: "May 6, 2026",
    status: "confirmed",
  },
  {
    id: "d4",
    type: "physical",
    label: "Winter coats",
    sub: "Clothing · 85 items",
    amount: "$2,125",
    qty: "85 items",
    date: "May 5, 2026",
    status: "confirmed",
  },
  {
    id: "d5",
    type: "financial",
    label: "Anonymous",
    sub: "Check",
    amount: "$750",
    qty: null,
    date: "May 4, 2026",
    status: "confirmed",
  },
  {
    id: "d6",
    type: "physical",
    label: "Toiletries",
    sub: "Hygiene · 120 items",
    amount: "$480",
    qty: "120 items",
    date: "May 3, 2026",
    status: "confirmed",
  },
  {
    id: "d7",
    type: "financial",
    label: "City of Davis",
    sub: "Bank Transfer",
    amount: "$10,000",
    qty: null,
    date: "May 1, 2026",
    status: "confirmed",
  },
  {
    id: "d8",
    type: "physical",
    label: "Children's books",
    sub: "Books · 340 items",
    amount: "$1,020",
    qty: "340 items",
    date: "Apr 29, 2026",
    status: "confirmed",
  },
];

export default function HistoryPage() {
  const total = ALL_DONATIONS.reduce((sum, d) => {
    return sum + parseFloat(d.amount.replace("$", "").replace(",", ""));
  }, 0);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gl-text">Donation History</h1>
          <p className="text-sm text-gl-muted mt-0.5">
            {ALL_DONATIONS.length} records · Total value{" "}
            <span className="text-gl-gold font-mono font-bold">
              ${total.toLocaleString()}
            </span>
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-sm font-medium border border-gl-border text-gl-muted px-4 py-2 rounded-xl hover:border-gl-raised hover:text-gl-text transition-all cursor-pointer">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <Link
            href="/log/physical"
            className="flex items-center gap-2 text-sm font-semibold bg-gl-purple text-white px-4 py-2 rounded-xl hover:bg-gl-purple-light transition-colors cursor-pointer"
          >
            + Add Donation
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gl-surface border border-gl-border rounded-2xl overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-gl-border">
          {[
            "Type",
            "Description",
            "Source / Items",
            "Value",
            "Date",
            "Status",
          ].map((h) => (
            <div
              key={h}
              className={`text-[10px] font-semibold uppercase tracking-widest text-gl-muted ${
                h === "Description"
                  ? "col-span-3"
                  : h === "Source / Items"
                    ? "col-span-3"
                    : "col-span-2"
              }`}
            >
              {h}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="divide-y divide-gl-border">
          {ALL_DONATIONS.map((d) => (
            <div
              key={d.id}
              className="grid grid-cols-12 gap-4 px-6 py-3.5 items-center hover:bg-gl-raised/40 transition-colors"
            >
              {/* Type icon */}
              <div className="col-span-2">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    d.type === "financial"
                      ? "bg-gl-gold/10 text-gl-gold border border-gl-gold/20"
                      : "bg-gl-purple/10 text-gl-purple border border-gl-purple/20"
                  }`}
                >
                  {d.type === "financial" ? (
                    <DollarSign className="w-3 h-3" />
                  ) : (
                    <Package className="w-3 h-3" />
                  )}
                  {d.type === "financial" ? "Financial" : "Physical"}
                </span>
              </div>

              {/* Description */}
              <div className="col-span-3">
                <p className="text-sm font-semibold text-gl-text truncate">
                  {d.label}
                </p>
              </div>

              {/* Sub */}
              <div className="col-span-3">
                <p className="text-sm text-gl-muted truncate">{d.sub}</p>
              </div>

              {/* Value */}
              <div className="col-span-2">
                <p className="font-mono text-sm font-bold text-gl-gold">
                  {d.amount}
                </p>
              </div>

              {/* Date */}
              <div className="col-span-1">
                <p className="text-xs text-gl-muted">{d.date}</p>
              </div>

              {/* Status */}
              <div className="col-span-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-gl-green bg-gl-green/10 border border-gl-green/20 px-2 py-0.5 rounded-full">
                  ✓ Done
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
