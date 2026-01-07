import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#00FF7F] selection:text-black overflow-x-hidden relative">
      
      {/* --- 1. Ambient Background & Noise Texture (The "Premium" Feel) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grainy Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00FF7F] rounded-full blur-[120px] opacity-[0.08] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-emerald-900 rounded-full blur-[100px] opacity-10"></div>
      </div>

      {/* --- 2. Floating "Glass" Navbar --- */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl shadow-2xl shadow-black/50 transition-all duration-300 hover:border-[#00FF7F]/20">
          
          <a href="/" className="text-lg font-bold tracking-tighter flex items-center gap-2 group">
            <div className="w-2 h-2 bg-[#00FF7F] rounded-full shadow-[0_0_8px_#00FF7F] group-hover:scale-125 transition-transform"></div>
            VAULT
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400 uppercase tracking-widest">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-3">Log in</a>
            <a 
              href="/signup" 
              className="bg-white text-black text-xs font-bold py-2 px-5 rounded-full hover:bg-[#00FF7F] hover:shadow-[0_0_20px_rgba(0,255,127,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </nav>

      {/* --- 3. Hero Section --- */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-40 pb-20 px-6 text-center max-w-7xl mx-auto">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#00FF7F] mb-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF7F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF7F]"></span>
          </span>
          <span className="tracking-wide">V2.0 IS NOW LIVE</span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1] mb-8 text-white max-w-5xl mx-auto">
          The last cloud storage <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
            you will ever need.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Military-grade encryption meets local-drive speed. 
          <span className="text-white font-medium border-b border-[#00FF7F]/30"> 5GB free forever.</span> 
          <br/> No credit card required.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a 
            href="/signup" 
            className="w-full sm:w-auto bg-[#00FF7F] text-black text-lg font-bold py-4 px-10 rounded-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,127,0.3)] transition-all duration-300"
          >
            Start Uploading
          </a>
          <a 
            href="#demo" 
            className="w-full sm:w-auto bg-[#0A0A0A] text-white border border-white/10 text-lg font-medium py-4 px-10 rounded-xl hover:bg-[#111] hover:border-white/20 transition-all duration-300"
          >
            View Demo
          </a>
        </div>

        {/* 3D Graphic Container */}
        <div className="mt-24 w-full max-w-3xl relative group">
           {/* Glow behind graphic */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00FF7F] blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
           <VaultGraphic className="w-full h-auto drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]" />
        </div>
      </main>

      {/* --- 4. Bento Grid Features (The "Modern Standard") --- */}
      <section id="features" className="relative z-10 py-32 px-6 border-t border-white/5 bg-[#050505]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Designed for the <span className="text-[#00FF7F]">Paranoid.</span>
            </h2>
            <p className="text-gray-400">Security isn't a feature. It's the foundation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* Card 1: Large Span */}
            <div className="md:col-span-2 group relative overflow-hidden bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 hover:border-[#00FF7F]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="w-32 h-32 bg-[#00FF7F] blur-[80px]"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10 group-hover:bg-[#00FF7F] group-hover:text-black transition-colors duration-300">🔒</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Zero-Knowledge Encryption</h3>
                  <p className="text-gray-400 max-w-md">Your files are encrypted on your device before they ever touch our servers. We literally cannot see your data even if we tried.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Tall Vertical */}
            <div className="md:row-span-2 group relative overflow-hidden bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 hover:border-[#00FF7F]/30 transition-colors duration-500 flex flex-col justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10">⚡</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Instant Sync</h3>
                <p className="text-gray-400">Powered by AWS S3 Intelligent-Tiering. Hot storage speeds at cold storage prices.</p>
              </div>
              {/* Visual Element for Sync */}
              <div className="w-full h-32 bg-white/5 rounded-xl mt-6 border border-white/5 relative overflow-hidden">
                 <div className="absolute top-1/2 left-4 right-4 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00FF7F] w-2/3 animate-[loading_2s_ease-in-out_infinite]"></div>
                 </div>
              </div>
            </div>

            {/* Card 3: Standard */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 hover:border-[#00FF7F]/30 transition-colors duration-500 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10 mb-8 group-hover:rotate-12 transition-transform">📂</div>
              <h3 className="text-xl font-bold mb-2">Smart Tags</h3>
              <p className="text-gray-400">Auto-organize your chaos with AI-driven file tagging.</p>
            </div>

            {/* Card 4: Standard */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 hover:border-[#00FF7F]/30 transition-colors duration-500 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10 mb-8">💎</div>
              <h3 className="text-xl font-bold mb-2">5GB Free</h3>
              <p className="text-gray-400">No trial periods. No credit card. Just free storage.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-300 text-sm bg-[#020202]">
        <p>&copy; 2026 Vault Inc. Developed by Kurt Dorado.</p>
      </footer>

    </div>
  );
};

// --- Top-Tier Graphic Component ---
const VaultGraphic = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00FF7F" stopOpacity="0" />
        <stop offset="50%" stopColor="#00FF7F" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#00FF7F" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Base Grid */}
    <path d="M50 200 L350 200 L400 250 L0 250 Z" fill="url(#grid-grad)" />
    <path d="M50 200 L0 250 M125 200 L100 250 M200 200 L200 250 M275 200 L300 250 M350 200 L400 250" stroke="#00FF7F" strokeWidth="1" strokeOpacity="0.2" />

    {/* Floating Layers */}
    <g transform="translate(0, -20)">
      {/* Layer 3 (Bottom) */}
      <path d="M100 180 L300 180 L300 190 L100 190 Z" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
      
      {/* Layer 2 (Middle) */}
      <g className="animate-[bounce_4s_infinite]">
        <path d="M100 140 L300 140 L300 160 L100 160 Z" fill="#0A0A0A" stroke="#00FF7F" strokeWidth="2" strokeOpacity="0.5" />
        <rect x="120" y="145" width="40" height="4" rx="2" fill="#00FF7F" fillOpacity="0.5" />
        <rect x="170" y="145" width="80" height="4" rx="2" fill="#333" />
      </g>

      {/* Layer 1 (Top) */}
      <g className="animate-[bounce_3s_infinite]">
         <path d="M120 100 L280 100 L280 120 L120 120 Z" fill="#00FF7F" fillOpacity="0.1" stroke="#00FF7F" strokeWidth="2" />
         <circle cx="200" cy="80" r="10" fill="#00FF7F" className="animate-ping" opacity="0.5"/>
         <circle cx="200" cy="80" r="5" fill="#00FF7F" />
      </g>
    </g>
  </svg>
);

export default Homepage;