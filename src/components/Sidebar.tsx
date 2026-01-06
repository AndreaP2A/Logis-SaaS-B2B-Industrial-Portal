import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { 
  BarChart3, 
  Files, 
  Settings, 
  ShieldCheck, 
  Users, 
  LogOut,
  LayoutDashboard,
  X
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-neutral-950/40 backdrop-blur-sm lg:hidden animate-in fade-in duration-300"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 z-50 flex flex-col w-72 sidebar-container transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:h-full border-none shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col flex-grow pt-8 pb-4 overflow-y-auto">

          <div className="flex items-center gap-3 px-6 mb-8 mt-2">
            <div className="h-12 w-12 rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex items-center justify-center transition-transform hover:scale-105">
                <img src="/favicon.png" alt="Logis Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-2xl font-black tracking-tight theme-text">Logis</span>
          </div>
          
          <div className="lg:hidden flex justify-end px-6 mb-4">
            <button 
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 rounded-xl transition-colors"
                aria-label="Close menu"
            >
                <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-grow px-3 space-y-1">
            <p className="px-3 text-[10px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest mb-4 opacity-70">Main Menu</p>
            <NavLink 
              to="/dashboard" 
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
            >
              <ShieldCheck className="h-5 w-5" />
              Active Services
            </NavLink>
            <NavLink 
              to="/contracts" 
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
            >
              <Files className="h-5 w-5" />
              Contracts
            </NavLink>
            <NavLink 
              to="/team" 
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
            >
              <Users className="h-5 w-5" />
              Team Access
            </NavLink>
            
            <div className="pt-8 px-3">
              <p className="text-[10px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest mb-4 opacity-70">Analytics</p>
            </div>
            <NavLink 
              to="/consumption" 
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
            >
              <BarChart3 className="h-5 w-5" />
              Consumption
            </NavLink>
          </div>
        </div>
        
        <div className="flex-shrink-0 flex p-4 pb-8">
          <div className="flex-grow space-y-1">
            <a href="#" className="sidebar-link">
              <Settings className="h-5 w-5" />
              Settings
            </a>
            <a href="#" className="sidebar-link !text-red-600 dark:!text-red-400 bg-red-50/80 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors">
              <LogOut className="h-5 w-5" />
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
