import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import TopBar from './components/TopBar/TopBar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <TopBar />
          {children}
        </div>
      </body>
    </html>
  );
}
