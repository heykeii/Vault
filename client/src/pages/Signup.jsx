import React, { useState } from 'react';
import { signUp, confirmSignUp } from 'aws-amplify/auth'; // Import Cognito functions
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  
  // State for form inputs and UI handling
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    code: ''
  });
  
  // State to toggle between "Sign Up" and "Verify Code" screens
  const [step, setStep] = useState('signup'); // 'signup' or 'confirm'
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // --- 1. Handle Initial Registration ---
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      // AWS Cognito Sign Up
      const { nextStep } = await signUp({
        username: formData.email, // Using email as username
        password: formData.password,
        options: {
          userAttributes: {
            email: formData.email,
          },
          autoSignIn: true, // Optional: auto sign-in after confirmation
        },
      });

      // If Cognito asks for confirmation, switch UI to "Verify" mode
      if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
        setStep('confirm');
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // --- 2. Handle Verification Code ---
  const handleConfirmation = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // AWS Cognito Confirm Sign Up
      await confirmSignUp({
        username: formData.email,
        confirmationCode: formData.code
      });
      
      // Redirect to dashboard upon success
      navigate('/'); 
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00FF7F] rounded-full blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#00FF7F] rounded-full blur-[150px] opacity-5"></div>
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      {/* --- The Glass Card --- */}
      <div className="w-full max-w-md bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10 transition-all duration-500 hover:border-[#00FF7F]/30">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">
            {step === 'signup' ? 'Create Access' : 'Verify Identity'}
          </h2>
          <p className="text-gray-400 text-sm">
            {step === 'signup' 
              ? 'Join the secure cloud revolution.' 
              : `Enter the code sent to ${formData.email}`}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs text-center">
            {error}
          </div>
        )}

        {/* --- STEP 1: SIGN UP FORM --- */}
        {step === 'signup' && (
          <form onSubmit={handleSignUp} className="space-y-5">
            <div className="group">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-[#00FF7F] transition-colors">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00FF7F] focus:shadow-[0_0_15px_rgba(0,255,127,0.1)] outline-none transition-all placeholder-gray-700"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-[#00FF7F] transition-colors">Password</label>
              <input 
                type="password" 
                required
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00FF7F] outline-none transition-all placeholder-gray-700"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-[#00FF7F] transition-colors">Confirm Password</label>
              <input 
                type="password" 
                required
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00FF7F] outline-none transition-all placeholder-gray-700"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#00FF7F] text-black font-extrabold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,255,127,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? 'Processing...' : 'Signup'}
            </button>
          </form>
        )}

        {/* --- STEP 2: VERIFICATION FORM --- */}
        {step === 'confirm' && (
          <form onSubmit={handleConfirmation} className="space-y-6 animate-fade-in-up">
            <div>
               <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#00FF7F]/10 rounded-full flex items-center justify-center border border-[#00FF7F]/20 text-3xl">📩</div>
               </div>
               <input 
                type="text" 
                required
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-4 text-white text-center text-2xl tracking-[0.5em] focus:border-[#00FF7F] focus:shadow-[0_0_15px_rgba(0,255,127,0.1)] outline-none transition-all placeholder-gray-800"
                placeholder="000000"
                value={formData.code}
                onChange={(e) => setFormData({...formData, code: e.target.value})}
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#00FF7F] text-black font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,255,127,0.4)] transition-all"
            >
              {loading ? 'Verifying...' : 'Confirm Access'}
            </button>
            
            <button 
              type="button"
              onClick={() => setStep('signup')}
              className="w-full text-gray-500 text-sm hover:text-white transition-colors"
            >
              Start Over
            </button>
          </form>
        )}

        {/* Footer Link */}
        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <p className="text-gray-500 text-sm">
            Already have a Vault?{' '}
            <a href="/login" className="text-[#00FF7F] hover:underline font-medium">
              Log in here
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;
