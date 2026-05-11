import type { Metric } from "@/data/site-content";

export function StatCard({ metric }: { metric: Metric }) {
  const Icon = metric.icon;

  return (
    <div className="stat-card grid h-full min-h-[5.5rem] min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-2.5 rounded-2xl border border-white/18 bg-white/12 px-3 py-3.5 text-white backdrop-blur transition hover:bg-white/18">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/14 text-white/95">
        <Icon aria-hidden="true" size={18} />
      </span>
      <span className="stat-content flex min-w-0 flex-col justify-center gap-1 leading-[1.1]">
        <span className="stat-number block text-[clamp(1.375rem,2vw,1.875rem)] font-black leading-none tracking-normal">
          {metric.value}
        </span>
        <span className="stat-label block max-w-[4.75rem] text-[12.5px] font-semibold leading-[1.25] text-white/82">
          {metric.label}
        </span>
      </span>
    </div>
  );
}
