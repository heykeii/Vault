import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { isSignedIn } = await signIn({ 
        username: email, 
        password 
      });

      if (isSignedIn) {
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error signing in:', err);
      setError(err.message.includes('Incorrect') ? "Invalid credentials." : err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] p-6 font-sans relative overflow-hidden">
      
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00FF7F] rounded-full blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#00FF7F] rounded-full blur-[150px] opacity-5"></div>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>
      
      {/* Container Card */}
      <div className="w-full max-w-md bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 relative z-10 transition-all duration-500 hover:border-[#00FF7F]/30">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-2 text-white">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-sm">
            Access your secure vault.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email */}
          <div className="group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-[#00FF7F] transition-colors">
              Email Address
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#050505] border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#00FF7F] focus:shadow-[0_0_15px_rgba(0,255,127,0.1)] transition-all outline-none placeholder-gray-700"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-[#00FF7F] transition-colors">
              Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#050505] border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#00FF7F] outline-none transition-all placeholder-gray-700"
              placeholder="••••••••"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs text-center">
              {error}
            </div>
          )}

          {/* Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#00FF7F] text-black font-extrabold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,255,127,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {isLoading ? 'Processing...' : 'Login'}
          </button>
        </form>

        {/* Redirect to Signup */}
        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <p className="text-gray-500 text-sm">
            Don't have a Vault?{' '}
            <Link 
              to="/signup" 
              className="text-[#00FF7F] hover:underline font-medium transition-colors"
            >
              Sign up here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;