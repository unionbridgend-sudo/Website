import type { Metadata } from 'next';
import './globals.css';
import { Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Union Helper | Coming Soon',
  description: 'The ultimate tool for union management.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-blue-500/30">
        <main>
          {children}
        </main>
        <footer className="fixed bottom-0 w-full py-8 text-center bg-transparent">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
            <p className="text-slate-600 text-sm">
              &copy; 2026 Union Helper. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors underline underline-offset-4 decoration-slate-700">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors underline underline-offset-4 decoration-slate-700">Terms of Service</Link>
              <a href="mailto:admin@unionhelper.co.uk" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
