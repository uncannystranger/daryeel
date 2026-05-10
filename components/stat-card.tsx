import type { Metric } from "@/data/site-content";

export function StatCard({ metric }: { metric: Metric }) {
  const Icon = metric.icon;

  return (
    <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/18 bg-white/12 px-4 py-3 text-white backdrop-blur transition hover:bg-white/18">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/14">
        <Icon aria-hidden="true" size={20} />
      </span>
      <span className="min-w-0">
        <span className="block text-lg font-black leading-none">{metric.value}</span>
        <span className="mt-1 block text-xs font-medium text-white/78">{metric.label}</span>
      </span>
    </div>
  );
}
