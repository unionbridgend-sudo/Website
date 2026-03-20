import type { Metadata } from 'next';
import './globals.css';
import { Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Union Helper | Coming Soon',
  description: 'The ultimate tool for union management.',
  verification: {
    google: 'ID0Nmf-d2hR9jUW4kPZrhGvBGArED7NHErB63slZJMc',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-blue-500/30 dark:bg-slate-950 transition-colors duration-300">
        {children}
        <footer className="py-12 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest">
                © 2026 Union Helper
              </p>
              <p className="text-slate-400 dark:text-slate-600 text-[10px] font-medium uppercase tracking-tighter">
                Professional Union Utility Software
              </p>
            </div>
            <div className="flex items-center gap-8 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hover:text-blue-500 transition-colors">
              <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link>
              <a href="mailto:admin@unionhelper.co.uk" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-blue-500/30 underline-offset-4">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
