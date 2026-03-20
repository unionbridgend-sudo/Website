import React from 'react';
import { 
  Briefcase, 
  FileText, 
  Users, 
  Calendar, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  Lightbulb, 
  CheckCircle2
} from 'lucide-react';

const ComingSoon: React.FC = () => {
  const features = [
    {
      title: "Case Management",
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      items: [
        "Create and track cases for union members",
        "AI-powered case analysis using RAG",
        "Action plan generation with timelines",
        "Customizable case fields for tracking"
      ]
    },
    {
      title: "Document Management",
      icon: <FileText className="w-6 h-6 text-emerald-500" />,
      items: [
        "Upload and organize PDF/Images/Text",
        "Text extraction with OCR fallback",
        "Automatic file categorization"
      ]
    },
    {
      title: "Member & Employer",
      icon: <Users className="w-6 h-6 text-purple-500" />,
      items: [
        "Complete member profiles & contact info",
        "Employer contacts and documentation",
        "Employment contract tracking"
      ]
    },
    {
      title: "Meeting Management",
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      items: [
        "Schedule and track union meetings",
        "Attach notes and documents to events"
      ]
    },
    {
      title: "AI-Powered Features",
      icon: <Cpu className="w-6 h-6 text-pink-500" />,
      items: [
        "Interactive chat for case assistance",
        "Policy retrieval using RAG technology",
        "Automated case summaries & analysis"
      ]
    },
    {
      title: "Security & Admin",
      icon: <ShieldCheck className="w-6 h-6 text-slate-500" />,
      items: [
        "Secure Email/Google Authentication",
        "Multi-role administration system",
        "Secure session and device management"
      ]
    },
    {
      title: "Integration Tools",
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      items: [
        "Full Gmail and Calendar integration",
        "Extensible plugin architecture",
        "Robust backup & restore system"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-20 px-4 sm:px-6 transition-colors duration-300">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
        
        <div className="inline-block p-4 mb-10 bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 transition-colors">
           <img src="/logo.jpg" alt="Union Helper" className="w-24 h-24 object-cover rounded-2xl" />
        </div>
        
        <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-6">Coming Soon</h2>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-[0.9]">
          The Ultimate <br /><span className="text-blue-500">Union Helper</span> Utility
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed font-medium">
          Empowering union representatives with advanced case management and AI-driven insights.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] p-10 shadow-sm border border-slate-800/50 hover:bg-slate-900 hover:border-blue-500/30 transition-all duration-500 group">
            <div className="flex items-center gap-5 mb-8">
              <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-blue-500/10 transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-bold text-2xl text-white tracking-tight">{feature.title}</h3>
            </div>
            <ul className="space-y-4 text-left">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-400 font-medium leading-tight group-hover:text-slate-300 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0 opactiy-80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Insights Section */}
      <div className="max-w-6xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white overflow-hidden relative shadow-2xl transition-colors mb-20 border border-white/5 group">
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none text-blue-500 group-hover:opacity-[0.05] transition-opacity duration-1000">
          <Cpu size={400} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-14">
            <div className="p-4 bg-blue-500/10 rounded-3xl text-blue-400">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-black tracking-tight">Technical Insights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                <h3 className="text-3xl font-bold">RAG Integration</h3>
              </div>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                Our system utilizes Retrieval Augmented Generation (RAG) to process union policies and contracts, providing representatives with context-aware, highly accurate case analysis and recommendations.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div>
                <h3 className="text-3xl font-bold">Plugin Architecture</h3>
              </div>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                The core platform is built with extensibility in mind. Our modular plugin system allows for custom workflows, specialized tools, and third-party integrations tailored to specific union needs.
              </p>
            </div>
          </div>
          
          <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-500 italic text-base font-medium">
              Transforming union representation through secure, intelligent, and scalable technology.
            </p>
            <div className="text-xs text-slate-400 font-bold tracking-[0.2em] uppercase bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
              Edition 2026.1 Alpha
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
