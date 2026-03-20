import { Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 flex items-center justify-center p-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-xl text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-600/20">
          <Shield className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Union <span className="text-blue-500">Helper</span>
        </h1>
        
        <p className="text-2xl text-slate-400 mb-8 font-medium">Coming Soon</p>
        
        <div className="h-0.5 w-12 bg-blue-500/30 mx-auto mb-8" />
        
        <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">
          We're building the ultimate tool for union management. 
          Stay tuned for our full documentation and launch.
        </p>
      </div>
    </div>
  );
}
