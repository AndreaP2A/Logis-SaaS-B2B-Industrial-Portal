
import { useState, useEffect, type FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { 
  Dashboard, 
  ServicesPage, 
  ContractsPage, 
  TeamAccessPage, 
  ConsumptionPage 
} from "./pages/index.tsx";

const App: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <BrowserRouter>
      <div className="h-screen flex overflow-hidden">
        <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        <div className="flex-1 flex flex-col min-w-0">
          <Header 
            isDark={isDark} 
            onToggleTheme={() => setIsDark(!isDark)} 
            onMenuClick={() => setIsMobileMenuOpen(true)}
          />
          <main className="flex-1 overflow-y-auto" role="main">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contracts" element={<ContractsPage />} />
                <Route path="/team" element={<TeamAccessPage />} />
                <Route path="/consumption" element={<ConsumptionPage />} />
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
