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
    <html lang="en">
      <body className="antialiased selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
