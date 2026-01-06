import type { FC } from "react";

export const LoadingBlock: FC = () => {
  return (
    <div className="glass-card rounded-2xl p-6 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-1/4" />
          <div className="h-3 bg-slate-50 dark:bg-slate-900/50 rounded w-1/2" />
        </div>
      </div>
      <div className="mt-8 space-y-3">
        <div className="h-3 bg-slate-50 dark:bg-slate-900/50 rounded" />
        <div className="h-3 bg-slate-50 dark:bg-slate-900/50 rounded w-5/6" />
      </div>
    </div>
  );
};
