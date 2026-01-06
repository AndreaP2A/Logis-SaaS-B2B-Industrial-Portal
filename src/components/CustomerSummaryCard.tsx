import type { FC } from "react";
import { Building2, Globe, MapPin, Mail } from "lucide-react";
import type { CustomerSummary } from "../data/mock";

interface CustomerSummaryCardProps {
  summary: CustomerSummary;
}

export const CustomerSummaryCard: FC<CustomerSummaryCardProps> = ({ summary }) => {
  return (
    <div className="glass-card rounded-[2rem] p-8 relative overflow-hidden group shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-all">
      <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity theme-text">
        <Building2 size={120} />
      </div>
      
      <div>
        <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 shadow-xl shadow-black/10 transition-transform group-hover:scale-110">
            <Building2 className="h-6 w-6" />
            </div>
            <div>
            <h3 className="text-xl font-bold theme-text leading-tight tracking-tight uppercase">{summary.name}</h3>
            <p className="label-muted mt-0.5">Account ID: {summary.accountId}</p>
            </div>
        </div>

        <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3 text-sm theme-text-muted hover:text-blue-600 transition-colors cursor-pointer font-medium">
            <Globe className="h-4 w-4 opacity-50" />
            <span>{summary.website}</span>
            </div>
            <div className="flex items-center gap-3 text-sm theme-text-muted font-medium">
            <MapPin className="h-4 w-4 opacity-50" />
            <span>{summary.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm theme-text-muted font-medium">
            <Mail className="h-4 w-4 opacity-50" />
            <span>{summary.contactEmail}</span>
            </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t theme-border relative z-10">
        <p className="label-muted mb-4 opacity-70">Primary Account Manager</p>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold theme-text border theme-border">
            {summary.primaryContact.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-sm font-bold theme-text">{summary.primaryContact}</p>
            <p className="label-caps !text-[9px] mt-0.5 opacity-60">Strategic Advisor</p>
          </div>
        </div>
      </div>
    </div>
  );
};
