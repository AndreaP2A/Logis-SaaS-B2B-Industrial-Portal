import { useState, type FC } from "react";
import { UserPlus, Shield, MoreHorizontal, ShieldAlert, Key, Mail, ShieldCheck } from "lucide-react";
import { mockTeam } from "../data/mock";
import { Modal } from "../components/Modal";



export const TeamAccessPage: FC = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);

  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight theme-text transition-colors">Team Access</h1>
          <p className="mt-1 theme-text-muted font-medium">Manage user roles and permissions for Global Logistics Corp.</p>
        </div>
        <button 
            onClick={() => setShowInviteModal(true)}
            className="btn-primary"
        >
          <UserPlus className="h-4 w-4" />
          Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 border-blue-500/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-blue-600" />
                <h3 className="label-muted">Security Policy</h3>
            </div>
            <p className="text-sm theme-text-muted leading-relaxed font-medium">
                MFA is <span className="text-blue-600 font-bold uppercase tracking-wide">Enforced</span> for all Global Logistics Corp admins.
            </p>
          </div>
          <button className="mt-6 text-xs font-bold text-blue-600 uppercase tracking-wider hover:underline text-left">Update Policy</button>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <Key className="h-5 w-5 text-emerald-500" />
                    <h3 className="label-muted">License Usage</h3>
                </div>
                <div className="flex items-end justify-between mb-4">
                    <span className="text-3xl font-black theme-text">{mockTeam.length} <span className="text-sm text-theme-muted font-bold not-italic ml-1">/ 10</span></span>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-400/20 dark:bg-emerald-400/10 px-2 py-0.5 rounded whitespace-nowrap">Enterprise Plan</span>
                </div>
            </div>
            <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(mockTeam.length / 10) * 100}%` }} />
            </div>
        </div>

        <div className="glass-card p-6 border-red-500/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4 text-red-500">
                <ShieldAlert className="h-5 w-5" />
                <h3 className="label-muted text-red-500/80">Access Integrity</h3>
            </div>
            <p className="text-sm theme-text-muted font-medium">Incident reports: 0 blocked attempts per 24h.</p>
            <button className="mt-6 text-xs font-bold text-red-600 uppercase tracking-wider hover:underline text-left">View Analysis</button>
        </div>
      </div>

      <div className="glass-card overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100/20 dark:border-white/5 bg-slate-50/5 dark:bg-white/5">
                <th className="px-6 py-5 label-muted">Team Member</th>
                <th className="px-6 py-5 label-muted">Access Level</th>
                <th className="px-6 py-5 label-muted">Last Active</th>
                <th className="px-6 py-5 label-muted text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/20 dark:divide-white/5 text-sm">
              {mockTeam.map((member) => (
                <tr key={member.id} className={`hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group ${member.isMe ? 'bg-blue-50/5' : ''}`}>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="h-11 w-11 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-xs font-black shadow-lg shadow-black/10">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                            <p className="font-bold theme-text">{member.name}</p>
                            {member.isMe && <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-tighter shadow-sm">YOU</span>}
                        </div>
                        <p className="text-[10px] theme-text-muted font-bold uppercase tracking-tight opacity-70">{member.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-sm whitespace-nowrap ${
                        member.access === 'Full Admin' ? 'badge-blue' : 'badge-slate'
                    }`}>
                      {member.access}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2 w-2 rounded-full ${member.status === 'Active Now' ? 'bg-green-500 animate-pulse outline outline-4 outline-green-500/20' : 'bg-slate-300'}`} />
                      <span className="text-xs font-bold theme-text uppercase tracking-tight">{member.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <button className="theme-text-muted hover:theme-text transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        title="Invite Team Member"
      >
        <div className="space-y-6">
            <div className="p-5 badge-blue rounded-3xl border-none flex gap-4">
                <ShieldCheck className="h-6 w-6 shrink-0 text-blue-600" />
                <p className="text-xs leading-relaxed font-medium">
                    Invitations rotate every 24 hours for security. New members will be required to set up Multi-Factor Authentication (MFA).
                </p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="label-muted mb-2 block ml-1">Work Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 theme-text-muted" />
                        <input type="email" placeholder="e.g. name@global-logistics.com" className="w-full bg-slate-50 dark:bg-white/5 border theme-border rounded-xl pl-12 pr-4 py-4 text-sm font-bold theme-text outline-none focus:border-blue-500 transition-all shadow-inner" />
                    </div>
                </div>

                <div>
                    <label className="label-muted mb-2 block ml-1">Assign Access Role</label>
                    <div className="grid grid-cols-2 gap-3">
                        {['Portal Admin', 'Operations', 'Finance', 'Read-Only'].map(role => (
                            <button key={role} className="flex flex-col p-4 border theme-border rounded-2xl hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group text-left">
                                <span className="text-xs font-bold theme-text uppercase tracking-wider">{role}</span>
                                <span className="text-[10px] theme-text-muted mt-1 font-medium">Standard policy apply</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-6">
                <button onClick={() => setShowInviteModal(false)} className="flex-1 px-4 py-4 rounded-xl text-xs font-bold theme-text-muted hover:bg-slate-100 dark:hover:bg-white/5 transition-all uppercase tracking-wider">Cancel</button>
                <button className="flex-1 btn-primary uppercase tracking-wider text-xs">Send Invitation</button>
            </div>
        </div>
      </Modal>
    </div>
  );
};
