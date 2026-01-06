import { createPortal } from "react-dom";
import type { FC, ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative w-full max-w-lg theme-card rounded-[2rem] shadow-2xl border theme-border animate-in zoom-in-95 fade-in duration-300 overflow-hidden">
        <div className="flex items-center justify-between p-8 border-b theme-border bg-slate-50/30 dark:bg-white/5">
          <h2 className="text-xl font-bold theme-text tracking-tight uppercase">
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2.5 theme-text-muted hover:theme-text hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};
