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
import { ThemeToggle } from './ThemeToggle';

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
    <div className="min-h-screen bg-background dark:bg-slate-950 text-foreground dark:text-slate-200 py-12 px-4 sm:px-6 transition-colors duration-300">
      <ThemeToggle />
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] rounded-full -z-10" />
        
        <div className="inline-block p-4 mb-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 transition-colors">
           <img src="/logo.jpg" alt="Union Helper" className="w-20 h-20 object-cover rounded-2xl" />
        </div>
        
        <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs mb-4">Launching Soon</h2>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-tight">
          The Ultimate <span className="text-blue-600 dark:text-blue-500">Union Helper</span> Utility
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          Empowering union representatives with advanced case management and AI-driven insights.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900/50 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">{feature.title}</h3>
            </div>
            <ul className="space-y-3 text-left">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium leading-tight">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Insights Section */}
      <div className="max-w-6xl mx-auto bg-slate-900 dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative shadow-2xl transition-colors mb-20 border border-white/5">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-white dark:text-blue-500">
          <Cpu size={300} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black tracking-tight">Technical Insights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <h3 className="text-2xl font-bold">RAG Integration</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Our system utilizes Retrieval Augmented Generation (RAG) to process union policies and contracts, providing representatives with context-aware, highly accurate case analysis and recommendations.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <h3 className="text-2xl font-bold">Plugin Architecture</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                The core platform is built with extensibility in mind. Our modular plugin system allows for custom workflows, specialized tools, and third-party integrations tailored to specific union needs.
              </p>
            </div>
          </div>
          
          <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 italic text-sm font-medium">
              Transforming union representation through secure, intelligent, and scalable technology.
            </p>
            <div className="text-xs text-slate-400 font-bold tracking-widest uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5">
              Version 2026.1 Alpha
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
