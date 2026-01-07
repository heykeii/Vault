import React from 'react';
import { signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  // --- LOGOUT LOGIC ---
  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* =======================
          1. INTEGRATED NAVBAR
         ======================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-emerald-500/20 px-6 py-4 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        
        {/* LEFT: LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
            <span className="text-black font-bold text-xl">G</span>
          </div>
          <span className="text-white font-bold text-xl tracking-widest uppercase">
            Green<span className="text-emerald-500">.</span>
          </span>
        </div>

        {/* RIGHT: USER & LOGOUT */}
        <div className="flex items-center gap-6">
          {/* User Profile */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="text-right hidden sm:block">
              <p className="text-white text-xs font-bold uppercase tracking-wider">Kurt Dorado</p>
              <p className="text-emerald-500 text-[10px] uppercase tracking-widest">Admin</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-900 p-[2px]">
              <div className="h-full w-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kurt" alt="User" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="h-8 w-[1px] bg-white/10 mx-1"></div>

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider group-hover:text-red-500 transition-colors hidden sm:block">
              Logout
            </span>
          </button>
        </div>
      </nav>

      {/* =======================
          2. DASHBOARD CONTENT
         ======================= */}
      <main className="max-w-7xl mx-auto pt-28 px-6 pb-12">
        
        {/* WELCOME HEADER */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-2">System Overview</p>
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Kurt</span>
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all text-sm font-bold tracking-wide">
              View Reports
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-black font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
              + New Project
            </button>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Revenue" value="$124,500" trend="+12.5%" isPositive={true} icon="💰" />
          <StatCard title="Active Users" value="8,245" trend="+5.2%" isPositive={true} icon="👥" />
          <StatCard title="Server Load" value="34%" trend="-2.4%" isPositive={true} icon="⚡" />
          <StatCard title="Pending Issues" value="12" trend="+4" isPositive={false} icon="⚠️" />
        </div>

        {/* CHARTS & ACTIVITY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-6">Analytics Overview</h3>
            <div className="h-64 w-full flex items-end justify-between gap-2 px-2">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((height, i) => (
                <div key={i} className="w-full bg-emerald-900/20 rounded-t-sm relative group/bar hover:bg-emerald-500/10 transition-colors">
                  <div style={{ height: `${height}%` }} className="absolute bottom-0 w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm opacity-80 group-hover/bar:opacity-100 transition-all shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-500 font-mono">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6">
            <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
            <div className="space-y-6">
              <ActivityItem user="Alice Smith" action="deployed to prod" time="2m ago" status="success" />
              <ActivityItem user="Kurt Dorado" action="updated bucket policy" time="15m ago" status="warning" />
              <ActivityItem user="System" action="automated backup" time="1h ago" status="neutral" />
              <ActivityItem user="John Doe" action="failed login attempt" time="3h ago" status="error" />
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const StatCard = ({ title, value, trend, isPositive, icon }) => (
  <div className="bg-[#0a0a0a] p-6 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all hover:-translate-y-1 shadow-lg group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-white/5 rounded-xl group-hover:bg-emerald-500/10 transition-colors text-xl">{icon}</div>
      <span className={`text-xs font-bold px-2 py-1 rounded-lg ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
        {trend}
      </span>
    </div>
    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{title}</p>
    <h4 className="text-2xl font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">{value}</h4>
  </div>
);

const ActivityItem = ({ user, action, time, status }) => {
  const getStatusColor = (s) => {
    if (s === 'success') return 'bg-emerald-500';
    if (s === 'warning') return 'bg-yellow-500';
    if (s === 'error') return 'bg-red-500';
    return 'bg-blue-500';
  };
  return (
    <div className="flex gap-4 items-start">
      <div className={`mt-1.5 w-2 h-2 rounded-full ${getStatusColor(status)} shadow-[0_0_8px_currentColor]`}></div>
      <div>
        <p className="text-sm text-gray-300"><span className="font-bold text-white">{user}</span> {action}</p>
        <p className="text-xs text-gray-500 font-mono mt-1">{time}</p>
      </div>
    </div>
  );
};

export default UserDashboard;