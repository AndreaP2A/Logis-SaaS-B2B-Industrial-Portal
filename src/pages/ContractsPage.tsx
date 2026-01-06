import { useState, type FC } from "react";
import { FileText, Clock, CheckCircle2, AlertTriangle, Download, ArrowRight, ShieldCheck, Search, Plus, Upload } from "lucide-react";
import { mockContracts } from "../data/mock";
import { Modal } from "../components/Modal";

export const ContractsPage: FC = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight theme-text transition-colors">Legal & Contracts</h1>
          <p className="mt-1 theme-text-muted font-medium">Review your signed documents and pending agreements for Global Logistics Corp.</p>
        </div>
        <div className="flex items-center gap-3">
            <button className="p-2.5 theme-text-muted hover:theme-text transition-colors">
                <Search className="h-5 w-5" />
            </button>
            <button 
                onClick={() => setShowUploadModal(true)}
                className="btn-primary"
            >
                <Plus className="h-4 w-4" />
                Upload New
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-8 border-amber-500/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4 text-amber-600">
                <AlertTriangle className="h-5 w-5" />
                <h3 className="label-caps !text-amber-700">Immediate Action</h3>
            </div>
            <p className="text-sm theme-text-muted leading-relaxed font-medium">
                HVAC Maintenance (CON-2024-001) expires in <span className="text-amber-600 font-bold">45 days</span>. Standard renewal terms apply.
            </p>
            <button className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-600 hover:translate-x-1 transition-transform uppercase tracking-wider">
                Begin Renewal Process <ArrowRight className="h-3 w-3" />
            </button>
        </div>
        
        <div className="glass-card p-8 md:col-span-2 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-6 text-blue-600">
                <ShieldCheck className="h-5 w-5" />
                <h3 className="label-caps !text-blue-700">Compliance Integrity</h3>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-10">
                <div className="flex-1 w-full">
                    <div className="flex justify-between mb-3">
                        <span className="label-muted">Overall Documentation Status</span>
                        <span className="text-sm font-bold theme-text">92%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '92%' }} />
                    </div>
                </div>
                <div className="flex flex-col items-center bg-slate-50 dark:bg-white/5 p-6 rounded-2xl min-w-[140px] border theme-border">
                    <span className="text-4xl font-black theme-text tracking-tighter">{mockContracts.length}</span>
                    <span className="label-muted mt-1 text-center">Active Documents</span>
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockContracts.map((contract) => (
          <div key={contract.id} className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between group hover:border-slate-300 dark:hover:border-neutral-700 transition-all cursor-pointer shadow-sm hover:shadow-md">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl theme-text-muted group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all">
                <FileText className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold theme-text tracking-tight uppercase">{contract.name}</h3>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
                  <span className="label-caps bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded shadow-inner">ID: {contract.id}</span>
                  <span className="text-xs theme-text-muted font-bold uppercase tracking-tight">{contract.partner}</span>
                  <span className="text-[10px] theme-text-muted font-medium tracking-wider uppercase opacity-60">Signed: {contract.signedDate}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-12 mt-6 sm:mt-0">
              <div className="text-right hidden md:block">
                <p className="label-muted mb-1 opacity-60 tracking-wider">Total Value</p>
                <p className="text-xl font-bold theme-text">{contract.value}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-sm border whitespace-nowrap ${
                  contract.status === 'Active' ? 'badge-green' :
                  contract.status === 'Completed' ? 'badge-blue' :
                  'badge-amber'
                }`}>
                  {contract.status === 'Active' && <CheckCircle2 className="h-3 w-3" />}
                  {contract.status === 'Completed' && <CheckCircle2 className="h-3 w-3" />}
                  {contract.status === 'Pending Review' && <Clock className="h-3 w-3" />}
                  {contract.status}
                </div>
                <button className="p-3 theme-text-muted hover:theme-text hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        title="Secure Document Upload"
      >
        <div className="space-y-6">
            <div className="border-2 border-dashed theme-border rounded-[2rem] p-12 flex flex-col items-center text-center group hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer shadow-inner bg-slate-50/50">
                <div className="p-5 bg-slate-100 dark:bg-white/10 rounded-2xl mb-4 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all shadow-sm">
                    <Upload className="h-8 w-8" />
                </div>
                <h4 className="font-bold theme-text uppercase tracking-tight">Click or drag to upload</h4>
                <p className="text-xs theme-text-muted mt-2 font-medium">PDF, DOCX up to 25MB (AES-256 Encrypted)</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="label-muted mb-2 block ml-1">Contract Reference</label>
                    <input type="text" placeholder="e.g. CON-2024-XXX" className="w-full bg-slate-50 dark:bg-white/5 border theme-border rounded-xl px-4 py-4 text-sm font-bold theme-text outline-none focus:border-blue-500 transition-all shadow-inner" />
                </div>
                <div>
                    <label className="label-muted mb-2 block ml-1">Document Type</label>
                    <div className="flex flex-wrap gap-2">
                        {['Service Agreement', 'NDAs', 'Audit Report', 'Invoices'].map(type => (
                            <button key={type} className="px-4 py-2.5 bg-slate-50 dark:bg-white/5 border theme-border hover:border-blue-500/50 rounded-xl text-[10px] font-bold theme-text-muted hover:theme-text transition-all uppercase tracking-wider shadow-sm">
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-6">
                <button onClick={() => setShowUploadModal(false)} className="flex-1 px-4 py-4 rounded-xl text-xs font-bold theme-text-muted hover:bg-slate-100 dark:hover:bg-white/5 transition-all uppercase tracking-wider">Cancel</button>
                <button className="flex-1 btn-primary uppercase tracking-wider text-xs">Verify & Upload</button>
            </div>
        </div>
      </Modal>
    </div>
  );
};
