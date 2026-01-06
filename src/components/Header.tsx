import { useState, type FC } from "react";
import { Bell, Search, HelpCircle, Moon, Sun, ShieldAlert, CheckCircle2, Clock, Zap, Menu } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onMenuClick: () => void;
}

const notifications = [
  { id: 1, type: 'alert', title: 'Security Breach Attempt', message: 'Blocked login attempt from unknown IP: 192.168.1.45', time: '2m ago', icon: ShieldAlert, color: 'text-red-500', bg: 'bg-red-500/10' },
  { id: 2, type: 'success', title: 'HVAC Sync Complete', message: 'Facility B-4 HVAC data has been successfully synchronized.', time: '1h ago', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-500/10' },
  { id: 3, type: 'pending', title: 'Contract Pending', message: 'Smart Factory IoT Infrastructure requires signature.', time: '5h ago', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { id: 4, type: 'usage', title: 'High Power Consumption', message: 'Electricity usage in Sector 7 is 12% above average.', time: 'Yesterday', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-500/10' }
];

export const Header: FC<HeaderProps> = ({ isDark, onToggleTheme, onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-30 header-container transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
            <button 
                onClick={onMenuClick}
                className="lg:hidden p-2 -ml-2 theme-text-muted hover:theme-text transition-colors"
            >
                <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2 lg:hidden">
                <div className="h-10 w-10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center transition-transform hover:scale-105">
                    <img src="/favicon.png" alt="Logis Logo" className="h-full w-full object-cover" />
                </div>
                <span className="text-2xl font-black tracking-tight theme-text">Logis</span>
            </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          <button className="sm:hidden p-2 theme-text-muted hover:theme-text">
            <Search className="h-5 w-5" />
          </button>

          <button 
            onClick={onToggleTheme}
            className="p-2.5 theme-text-muted hover:theme-text hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <div className="relative">
            <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors relative ${showNotifications ? 'theme-text bg-slate-100 dark:bg-white/5' : 'theme-text-muted'}`}
            >
                <Bell className="h-5 w-5" />
                <span className="absolute top-2.5 right-2.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" />
            </button>

            {showNotifications && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                    <div className="absolute right-0 mt-4 w-80 theme-card border theme-border rounded-2xl shadow-2xl z-50 overflow-hidden animate-in">
                        <div className="p-4 border-b theme-border flex justify-between items-center bg-slate-50/50 dark:bg-white/5">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] theme-text italic">Central Intelligence</h3>
                            <button className="text-[10px] font-bold text-blue-600 hover:underline">Clear all</button>
                        </div>
                        <div className="max-h-[400px] overflow-y-auto">
                            {notifications.map((n) => (
                                <div key={n.id} className="p-4 border-b theme-border/30 hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                                    <div className="flex gap-4">
                                        <div className={`mt-0.5 h-9 w-9 rounded-xl ${n.bg} ${n.color} flex items-center justify-center shrink-0`}>
                                            <n.icon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-start gap-2">
                                                <p className="text-sm font-black theme-text leading-none group-hover:text-blue-600 transition-colors">{n.title}</p>
                                                <span className="text-[10px] theme-text-muted font-bold opacity-70 whitespace-nowrap">{n.time}</span>
                                            </div>
                                            <p className="text-xs theme-text-muted font-medium mt-1.5 leading-relaxed">{n.message}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
          </div>

          <button className="hidden sm:flex items-center gap-2 p-2 theme-text-muted hover:theme-text">
            <HelpCircle className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-3 pl-4 cursor-pointer hover:opacity-80 transition-all border-l theme-border ml-2">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-black theme-text leading-none tracking-tight">Andréa Porche</p>
              <p className="text-[10px] theme-text-muted mt-1.5 uppercase font-black tracking-widest opacity-80 leading-none">Administrator</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 text-[10px] font-black ring-2 ring-white dark:ring-slate-900 shadow-md">
              AP
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
