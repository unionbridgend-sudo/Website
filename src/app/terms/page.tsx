import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-slate-800/50 rounded-3xl p-8 lg:p-12 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden border border-slate-700/50">
              <img src="/logo.jpg" alt="Union Helper Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Terms of Service</h1>
          </div>

          <div className="space-y-8 text-slate-400 leading-relaxed">
            <p className="italic text-slate-500">Last Updated: 20 March 2026</p>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Union Helper application ("App"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Description of Service</h2>
              <p>
                Union Helper is a management tool designed for union administrators and members. We provide tools for data organization, communication, and document management.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to use the App only for lawful purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the App are the exclusive property of Simon Turner and are protected by international copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall Simon Turner be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Contact</h2>
              <p>
                If you have any questions regarding these terms, please contact us at:
                <a href="mailto:admin@unionhelper.co.uk" className="text-blue-400 hover:underline ml-1">admin@unionhelper.co.uk</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
