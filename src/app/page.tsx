import { Shield, BookOpen, UserPlus, Settings, MousePointer2, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <BookOpen className="w-3 h-3" />
              Documentation & Guides
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight text-balance leading-[1.1]">
              How to Use <span className="text-blue-500">Union Helper</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 text-balance leading-relaxed">
              Welcome to the official guide for Union Helper. Learn how to manage members, process cases, and streamline your union tasks with ease.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#setup" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium flex items-center gap-2">
                Get Started
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="https://api.unionhelper.co.uk/admin" className="px-6 py-3 bg-slate-800 text-slate-200 rounded-lg hover:bg-slate-700 transition-all font-medium border border-slate-700">
                Log In
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Grid */}
      <section id="setup" className="py-24 max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Initial Setup</h2>
          <p className="text-slate-400">Follow these steps to get your union helper environment ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <StepCard 
            icon={UserPlus}
            number="01"
            title="Connect Google"
            description="Link your official union Gmail and Google Drive to enable automated file storage and email integration."
          />
          <StepCard 
            icon={Settings}
            number="02"
            title="Create Admin"
            description="Set up your local administrator credentials and enable Two-Factor Authentication (TOTP) for maximum security."
          />
          <StepCard 
            icon={CheckCircle2}
            number="03"
            title="Verify License"
            description="Ensure your enterprise license is active to unlock advanced AI features and automated case summaries."
          />
        </div>
      </section>

      {/* Detailed Guide */}
      <section id="how-it-works" className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
              Powerful Tools at <br />Your Fingertips
            </h2>
            <div className="space-y-8">
              <FeatureItem 
                title="Member Management"
                description="Keep track of all union members, their subscriptions, and historical interactions in one secure place."
              />
              <FeatureItem 
                title="Case Processing"
                description="Create and monitor cases, upload evidence, and use AI to generate summaries for easier decision-making."
              />
              <FeatureItem 
                title="Google Integration"
                description="Automatically sync important documents to Google Drive and manage union emails directly from the dashboard."
              />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl aspect-video flex items-center justify-center p-12">
               <div className="text-center">
                  <Shield className="w-20 h-20 text-blue-600 mx-auto mb-6 opacity-50" />
                  <p className="text-slate-500 font-mono text-xs uppercase tracking-widest italic">Dashboard Preview Loading...</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <h2 className="relative text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to streamline your <br className="hidden lg:block" /> Union Management?
          </h2>
          <div className="relative flex flex-wrap justify-center gap-6">
            <a 
              href="https://api.unionhelper.co.uk/admin" 
              className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-slate-100 transition-all font-bold text-lg shadow-xl"
            >
              Access Admin Portal
            </a>
            <button className="px-8 py-4 bg-blue-500/20 text-white rounded-xl border border-white/20 hover:bg-white/10 transition-all font-bold text-lg backdrop-blur-sm">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function StepCard({ icon: Icon, number, title, description }: { icon: any, number: string, title: string, description: string }) {
  return (
    <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all group hover:-translate-y-1">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-slate-700 font-bold text-4xl group-hover:text-slate-600 transition-colors">{number}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function FeatureItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}
