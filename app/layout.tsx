import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Press_Start_2P, Fira_Code, Silkscreen } from 'next/font/google';

const ps = Press_Start_2P({
  subsets: ['latin-ext'],
  weight: ['400'],
  variable: '--ps',
});
const fira = Fira_Code({
  subsets: ['latin-ext'],
  weight: ['400'],
  variable: '--fira',
});
const silkscreen = Silkscreen({
  subsets: ['latin-ext'],
  weight: ['400'],
  variable: '--silkscreen',
});

export const metadata: Metadata = {
  title: 'Jordan Roberts',
  description: 'My project portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ps.variable} ${fira.variable} ${silkscreen.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
