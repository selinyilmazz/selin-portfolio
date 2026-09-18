import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Selin Yılmaz - Portfolio',
  description: 'Portfolio of Selin Yılmaz, Computer Engineering student and aspiring software developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-ivory text-warm-black">
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
