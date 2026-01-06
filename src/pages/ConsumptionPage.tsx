import type { FC } from "react";
import { Zap, Droplets, Wind, ArrowUpRight, ArrowDownRight, TrendingUp, Info, Activity } from "lucide-react";
import { mockConsumption } from "../data/mock";

const iconMap: Record<string, any> = {
  Electricity: Zap,
  Water: Droplets,
  "Industrial Gas": Wind
};

const colorMap: Record<string, string> = {
  Electricity: "text-amber-500",
  Water: "text-blue-500",
  "Industrial Gas": "text-emerald-500"
};

const bgMap: Record<string, string> = {
  Electricity: "bg-amber-400/20 dark:bg-amber-400/10",
  Water: "bg-sky-400/20 dark:bg-sky-400/10",
  "Industrial Gas": "bg-emerald-400/20 dark:bg-emerald-400/10"
};

const barMap: Record<string, string> = {
  Electricity: "bg-amber-500",
  Water: "bg-blue-500",
  "Industrial Gas": "bg-emerald-500"
};

export const ConsumptionPage: FC = () => {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight theme-text transition-colors">Consumption Analysis</h1>
          <p className="mt-1 theme-text-muted font-medium">Quarterly resource consumption for Global Logistics Corp.</p>
        </div>
        <div className="flex items-center gap-1 p-1 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
           <button className="px-5 py-2 text-xs font-bold bg-white text-slate-900 dark:bg-white dark:text-slate-900 rounded-xl shadow-md tracking-wider uppercase transition-all">Monthly</button>
           <button className="px-5 py-2 text-xs font-bold theme-text-muted hover:theme-text transition-colors tracking-wider uppercase">Quarterly</button>
           <button className="px-5 py-2 text-xs font-bold theme-text-muted hover:theme-text transition-colors tracking-wider uppercase">Annual</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockConsumption.map((item) => {
          const Icon = iconMap[item.type] || Zap;
          return (
            <div key={item.id} className="glass-card p-6 relative overflow-hidden group hover:border-slate-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between shadow-sm hover:shadow-lg">
              <div className={`absolute -top-6 -right-6 p-4 opacity-[0.12] dark:opacity-[0.08] ${colorMap[item.type]} group-hover:opacity-[0.25] transition-opacity`}>
                <Icon size={130} />
              </div>
              
              <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`h-12 w-12 rounded-2xl ${bgMap[item.type]} flex items-center justify-center transition-colors`}>
                        <Icon className={`h-6 w-6 ${colorMap[item.type]}`} />
                    </div>
                    <h3 className="label-muted">{item.type}</h3>
                  </div>
                  
                  <p className="text-4xl font-black theme-text tracking-tighter">{item.usage}</p>
                  <div className="flex items-center gap-2 mt-2">
                  <span className={`flex items-center text-xs font-bold ${item.trend === 'up' ? 'text-red-500' : 'text-green-600'}`}>
                      {item.trend === 'up' ? <ArrowUpRight className="h-4 w-4 mr-0.5" /> : <ArrowDownRight className="h-4 w-4 mr-0.5" />}
                      {item.change}
                  </span>
                  <span className="text-xs theme-text-muted font-bold tracking-tight opacity-70">vs prev month</span>
                  </div>
              </div>

                  <div className="h-2 w-full bg-slate-50 dark:bg-white/5 border border-slate-100/50 dark:border-white/5 rounded-full overflow-hidden mb-6">
                      <div className={`h-full ${barMap[item.type]} rounded-full transition-all duration-1000`} style={{ width: item.barWidth }} />
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100/40 dark:border-white/5 pt-6">
                      <span className="label-muted">Estimated Charges</span>
                      <span className="text-xl font-bold theme-text tracking-tight">{item.cost}</span>
                  </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-8 bg-blue-50/10 dark:bg-blue-900/5">
            <div className="flex items-start gap-6">
            <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-600/20">
                <TrendingUp className="h-6 w-6" />
            </div>
            <div>
                <h3 className="text-lg font-bold theme-text uppercase tracking-tight">Resource Utilization</h3>
                <p className="mt-3 text-sm theme-text-muted leading-relaxed max-w-2xl font-medium">
                    Water consumption is <span className="text-blue-600 font-bold underline decoration-blue-500/30">15% lower</span> than the industrial average. Graveyard shift electricity usage remains a peak.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                    <div className="badge-green px-5 py-2.5 rounded-2xl shadow-sm flex items-center gap-3">
                        <div className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                        <span className="text-xs font-bold uppercase tracking-wider">Water efficiency: A+</span>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className="glass-card p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <h3 className="label-muted">Live Smart Meters</h3>
                </div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-400/15 dark:bg-blue-400/10 px-2.5 py-1 rounded animate-pulse">Hub Active</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className="h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center group overflow-hidden relative border border-slate-100 dark:border-white/5 shadow-sm hover:border-blue-400 transition-all">
                         <div className="h-full bg-blue-600/10 absolute bottom-0 left-0 w-full transition-all duration-700 group-hover:bg-blue-600/20" style={{ height: `${20 + (Math.random()*70)}%` }} />
                         <span className="relative text-xs font-bold theme-text">M-{i}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="p-8 glass-card border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
         <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="h-10 w-10 bg-blue-400/20 dark:bg-blue-400/10 rounded-full flex items-center justify-center">
                <Info className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-xs theme-text-muted font-bold tracking-tight">Sync frequency: Industrial smart meters report every 15 minutes.</p>
         </div>
         <button className="btn-secondary uppercase tracking-widest text-[11px] px-8 border border-slate-100 dark:border-white/5">Export Full Report</button>
      </div>
    </div>
  );
};
