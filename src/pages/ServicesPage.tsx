import { useState, useMemo, type FC } from "react";
import { ServicesList } from "../components/ServicesList";
import { LoadingBlock } from "../components/LoadingBlock";
import { Search, Filter, Download, X } from "lucide-react";
import { mockServices } from "../data/mock";
import { useCustomerData } from "../hooks/useCustomerData";

type ServiceStatus = "all" | "active" | "pending" | "expired";

export const ServicesPage: FC = () => {
  const { loading } = useCustomerData();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<ServiceStatus>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredServices = useMemo(() => {
    let result = [...mockServices];
    if (statusFilter !== "all") {
      result = result.filter(s => s.status === statusFilter);
    }
    const query = searchQuery.trim().toLowerCase();
    if (query.length >= 3) {
      result = result.filter(s => 
        s.name.toLowerCase().includes(query) || 
        s.id.toLowerCase().includes(query) ||
        s.type.toLowerCase().includes(query) ||
        (s.technician && s.technician.toLowerCase().includes(query))
      );
    }
    return result;
  }, [searchQuery, statusFilter]);

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "ID,Name,Type,Status,Expiry\n"
      + filteredServices.map(s => `${s.id},${s.name},${s.type},${s.status},${s.expiryDate}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `services_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight theme-text transition-colors">Active Services</h1>
          <p className="mt-1 theme-text-muted font-medium tracking-tight italic">Manage and monitor your ongoing industrial services.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`btn-secondary ${
              showFilters || statusFilter !== 'all' 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                : ''
            }`}
          >
            <Filter className="h-4 w-4" />
            {statusFilter === 'all' ? 'Filter' : `Status: ${statusFilter}`}
          </button>
          <button 
            onClick={handleExport}
            className="btn-primary"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative flex-1 max-w-lg">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors ${searchQuery.length >= 3 ? 'text-blue-500' : 'theme-text-muted'}`} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search systems or technicians..." 
            className="w-full pl-12 pr-10 py-3.5 bg-slate-50 dark:bg-white/5 border theme-border rounded-xl text-sm theme-text font-bold outline-none focus:border-blue-500 transition-all placeholder-slate-400 shadow-inner"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="h-4 w-4 theme-text-muted" />
            </button>
          )}
        </div>

        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 animate-in">
            <span className="label-muted mr-2">Quick Filter:</span>
            {(["all", "active", "pending", "expired"] as ServiceStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-sm ${
                  statusFilter === status 
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md transform scale-105' 
                    : 'bg-slate-100 dark:bg-white/5 theme-text-muted hover:theme-text border theme-border'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="glass-card overflow-hidden">
        {loading ? (
          <div className="p-12"><LoadingBlock /></div>
        ) : filteredServices.length > 0 ? (
          <ServicesList services={filteredServices} />
        ) : (
          <div className="p-20 text-center">
            <div className="inline-flex p-6 rounded-3xl bg-slate-50 dark:bg-white/5 mb-6 border theme-border">
              <Search className="h-10 w-10 theme-text-muted opacity-20" />
            </div>
            <h3 className="text-xl font-black theme-text uppercase italic tracking-tight">No matching services</h3>
            <p className="text-sm theme-text-muted mt-2 font-medium italic">Adjust your filters or try a different search query for Global Logistics Corp.</p>
            <button 
              onClick={() => { setSearchQuery(""); setStatusFilter("all"); }}
              className="mt-8 text-[11px] font-black text-blue-600 hover:underline tracking-[0.3em] uppercase"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
