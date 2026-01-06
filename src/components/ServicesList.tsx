import type { FC } from "react";
import { StatusBadge } from "./StatusBadge";
import { MoreVertical, ExternalLink, User } from "lucide-react";
import type { ServiceItem } from "../data/mock";

interface ServicesListProps {
  services: ServiceItem[];
}

export const ServicesList: FC<ServicesListProps> = ({ services }) => {
  return (
    <div className="overflow-x-auto transition-colors">
      <table className="w-full text-left border-collapse min-w-[700px]">
        <thead>
          <tr className="border-b border-slate-100/30 dark:border-white/5 bg-slate-50/5 dark:bg-white/5">
            <th className="px-6 py-5 label-muted">Service Name</th>
            <th className="px-6 py-5 label-muted">Category</th>
            <th className="px-6 py-5 label-muted">Status</th>
            <th className="px-6 py-5 label-muted">Assigned Expert</th>
            <th className="px-6 py-5 label-muted">Next Milestone</th>
            <th className="px-6 py-5 label-muted text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100/30 dark:divide-white/5">
          {services.map((service) => (
            <tr key={service.id} className="hover:bg-slate-50/80 dark:hover:bg-white/5 transition-colors group">
              <td className="px-6 py-5 cursor-pointer">
                <div className="flex items-center gap-2 group/title">
                  <p className="text-sm font-bold theme-text transition-colors uppercase tracking-tight">{service.name}</p>
                  <ExternalLink className="h-3 w-3 theme-text-muted opacity-0 group-hover/title:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] font-bold theme-text-muted uppercase tracking-widest bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded shadow-inner">ID: {service.id}</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="text-[10px] font-bold theme-text-muted px-2.5 py-1 rounded-lg uppercase tracking-wider bg-slate-100/50 dark:bg-white/5 whitespace-nowrap">
                  {service.type}
                </span>
              </td>
              <td className="px-6 py-5 text-sm">
                <StatusBadge status={service.status} />
              </td>
              <td className="px-6 py-5">
                 <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center shadow-md">
                        <User className="h-4 w-4 text-white dark:text-slate-900" />
                    </div>
                    <span className="text-xs theme-text font-bold">{service.technician || 'Pending Assignment'}</span>
                 </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="text-sm theme-text font-bold">{service.expiryDate}</span>
                  {service.status === 'expired' && <span className="text-[9px] text-red-500 font-bold mt-1 animate-pulse uppercase tracking-widest">Breach Warning</span>}
                </div>
              </td>
              <td className="px-6 py-5 text-right">
                <div className="flex items-center justify-end gap-3">
                  <button className="text-[10px] font-bold theme-text-muted hover:theme-text transition-colors px-3 py-1.5 uppercase tracking-wider border theme-border rounded-xl bg-white dark:bg-white/5 shadow-sm">
                    Manage
                  </button>
                  <button className="p-2 theme-text-muted hover:theme-text hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
