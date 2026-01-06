import type { FC, ReactNode } from "react";
import { Inbox } from "lucide-react";

export const EmptyState: FC<{
  title: string;
  message?: string;
  action?: ReactNode;
}> = ({ title, message, action }) => {
  return (
    <div className="glass-card rounded-2xl p-12 text-center">
      <div className="mx-auto h-12 w-12 text-neutral-300 dark:text-neutral-700 mb-4">
        <Inbox className="h-full w-full" />
      </div>
      <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">{title}</h3>
      {message && <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto">{message}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};
