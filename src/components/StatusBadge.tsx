import type { FC } from "react";

interface StatusBadgeProps {
  status: "active" | "pending" | "expired";
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    active: "badge-green",
    pending: "badge-amber",
    expired: "badge-red",
  };

  const labels = {
    active: "Active",
    pending: "Processing",
    expired: "Expired",
  };

  return (
    <span
      className={`inline-flex items-center rounded-xl px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider ${styles[status]} transition-all shadow-sm whitespace-nowrap`}
    >
      <span className={`h-1.5 w-1.5 rounded-full mr-2.5 ${
        status === 'active' ? 'bg-green-600' : 
        status === 'pending' ? 'bg-amber-600' : 
        'bg-red-600'
      }`} />
      {labels[status]}
    </span>
  );
};
