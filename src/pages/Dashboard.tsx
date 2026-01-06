import { useState, type FC } from "react";
import { CustomerSummaryCard } from "../components/CustomerSummaryCard";
import { ServicesList } from "../components/ServicesList";
import { EmptyState } from "../components/EmptyState";
import { Modal } from "../components/Modal";
import { useCustomerData } from "../hooks/useCustomerData";
import { ArrowUpRight, Plus, RefreshCcw, ShieldCheck, Activity, Lock, AlertCircle, Hammer, Info, Calendar, MapPin } from "lucide-react";



export const Dashboard: FC = () => {
  const { data, loading } = useCustomerData();
  const [isSyncing, setIsSyncing] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
    }, 2000);
  };

  if (loading || isSyncing) {
    return (
      <div className="space-y-8 animate-in min-h-[60vh] flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl animate-pulse rounded-full" />
          <div className="relative glass-card p-10 theme-card">
             <Hammer className="h-12 w-12 theme-text animate-bounce" />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-black theme-text tracking-tight uppercase">
            {isSyncing ? "Syncing Industrial Hub..." : "Establishing Secure Session..."}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
             <span className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-pulse" />
             <p className="text-[10px] font-black theme-text-muted uppercase tracking-[0.3em] ml-1">
                {isSyncing ? "Verifying facility endpoints" : "Initializing encrypted channel"}
             </p>
          </div>
        </div>
      </div>
    );
  }

  if (!data || data.services.length === 0) {
    return (
      <div className="py-12">
        <EmptyState 
          title="No active services found" 
          message="It looks like you don't have any active contracts or services registered with us yet."
          action={
            <button 
              onClick={() => setShowRequestModal(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Request a Service
            </button>
          }
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight theme-text transition-colors">Portal Overview</h1>
          <p className="mt-1 theme-text-muted font-medium">Welcome back. Monitoring Global Logistics Corp operations network.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleSync}
            disabled={isSyncing}
            className="btn-secondary flex items-center gap-2 disabled:opacity-50 group shadow-sm bg-white"
          >
            <RefreshCcw className={`h-4 w-4 ${isSyncing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
            Sync Data
          </button>
          <button 
            onClick={() => setShowRequestModal(true)}
            className="btn-primary flex items-center gap-2 shadow-lg shadow-black/5"
          >
            <Plus className="h-4 w-4" />
            New Request
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in">
        <CustomerSummaryCard summary={data.summary} />
        
        <div className="md:col-span-2 glass-card p-6 flex flex-col group justify-between h-full">
          <div>
            <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                <div className="p-3 bg-green-600 rounded-2xl shadow-lg shadow-green-600/20 text-white">
                    <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                    <p className="label-muted mb-0.5">Security System</p>
                    <h3 className="text-xl font-bold theme-text tracking-tight">Status: Excellent</h3>
                </div>
                </div>
                <div className="text-right">
                <p className="text-3xl font-black theme-text tracking-tighter">98<span className="text-sm theme-text-muted font-bold ml-1">/100</span></p>
                <div className="flex items-center justify-end gap-1 text-green-600 font-bold text-[10px] mt-0.5">
                    <ArrowUpRight className="h-3 w-3" />
                    +2.4% <span className="uppercase tracking-tight opacity-60">vs LW</span>
                </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {[
                { label: 'Uptime', val: '99.98%', icon: Activity, col: 'text-blue-600', dot: 'bg-blue-600' },
                { label: 'Auths', val: '1,240', sub: '/24h', icon: Lock, col: 'text-green-600', dot: 'bg-green-600' },
                { label: 'Threats', val: '0', icon: AlertCircle, col: 'text-slate-400', dot: 'bg-slate-300' }
                ].map((stat) => (
                <div key={stat.label} className="p-4 bg-slate-50/50 dark:bg-white/5 rounded-2xl border theme-border transition-all hover:bg-white dark:hover:bg-white/10 shadow-sm group/stat">
                    <div className="flex items-center gap-2 mb-2">
                    <stat.icon className={`h-3.5 w-3.5 ${stat.col}`} />
                    <span className="label-caps !text-[9px] opacity-70">{stat.label}</span>
                    </div>
                    <p className="text-lg font-bold theme-text leading-tight">{stat.val} {stat.sub && <span className="text-[10px] font-medium opacity-60">{stat.sub}</span>}</p>
                    <div className="mt-3 h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${stat.dot} rounded-full transition-all duration-1000 group-hover/stat:opacity-80`} style={{ width: stat.label === 'Threats' ? '1%' : '90%' }} />
                    </div>
                </div>
                ))}
            </div>
          </div>

          <div className="pt-5 border-t theme-border mt-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="label-caps !text-[9px] opacity-60">Infrastructure Integrity</span>
              <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest bg-green-400/20 dark:bg-green-400/10 px-2 py-0.5 rounded whitespace-nowrap">Optimal</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-green-500 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(34,197,94,0.4)]" style={{ width: '98%' }} />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
               <p className="text-[10px] theme-text-muted font-bold max-w-sm leading-tight opacity-80">
                Protocols are operational according to Tier 4 standards.
              </p>
              <button className="text-[10px] font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider">Download Audit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card overflow-hidden shadow-sm">
        <div className="p-6 border-b theme-border bg-slate-50/30 dark:bg-white/5 mx-0">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold theme-text tracking-tight uppercase">Active Services</h2>
            <button className="text-xs font-bold text-blue-600 hover:underline tracking-wider uppercase">
              Full Service Catalog
            </button>
          </div>
        </div>
        <ServicesList services={data.services} />
      </div>

      <Modal 
        isOpen={showRequestModal} 
        onClose={() => setShowRequestModal(false)}
        title="Industrial Service Request"
      >
        <div className="space-y-6">
            <div className="p-5 badge-blue rounded-2xl flex gap-4 border-none shadow-none">
                <Info className="h-5 w-5 shrink-0 text-blue-600" />
                <p className="text-xs leading-relaxed font-medium">
                    Priority requests are reviewed within 2 hours. Standard turnaround is 24-48h for Global Logistics Corp facilities.
                </p>
            </div>

            <div className="space-y-5">
                <div>
                    <label className="label-muted mb-2 block ml-1">Service Category</label>
                    <select className="w-full bg-slate-50 dark:bg-white/5 border theme-border rounded-xl px-4 py-3.5 text-sm font-bold theme-text outline-none appearance-none cursor-pointer focus:border-blue-500 transition-all">
                        <option>Mechanical Maintenance</option>
                        <option>Electrical / Grid Support</option>
                        <option>Safety & Compliance Audit</option>
                        <option>Facility Cleaning</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label-muted mb-2 block ml-1">Target Facility</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 theme-text-muted" />
                            <input type="text" placeholder="e.g. Frankfurt B-4" className="w-full bg-slate-50 dark:bg-white/5 border theme-border rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold theme-text outline-none focus:border-blue-500 transition-all shadow-inner" />
                        </div>
                    </div>
                    <div>
                        <label className="label-muted mb-2 block ml-1">Requested Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 theme-text-muted" />
                            <input type="text" placeholder="YYYY-MM-DD" className="w-full bg-slate-50 dark:bg-white/5 border theme-border rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold theme-text outline-none focus:border-blue-500 transition-all shadow-inner" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-6">
                <button onClick={() => setShowRequestModal(false)} className="flex-1 px-4 py-3.5 rounded-xl text-xs font-bold theme-text-muted hover:bg-slate-100 dark:hover:bg-white/5 transition-all uppercase tracking-wider">Cancel</button>
                <button className="flex-1 btn-primary uppercase tracking-wider text-xs">Submit Request</button>
            </div>
        </div>
      </Modal>
    </div>
  );
};
