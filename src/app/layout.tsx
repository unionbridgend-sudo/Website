import type { Metadata } from 'next';
import './globals.css';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Union Helper | Documentation',
  description: 'Learn how to use Union Helper to manage your union effectively.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-blue-500/30">
        <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              Union Helper
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How it Works</a>
              <a href="#setup" className="hover:text-blue-400 transition-colors">Setup</a>
              <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
              <a 
                href="https://api.unionhelper.co.uk/admin" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                Go to App
              </a>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="border-t border-slate-800 bg-slate-950 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-500 text-sm">
              &copy; 2026 Union Helper. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
