// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Example font import
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soundly',
  description: 'Rate and review your favorite music on a scalable microservices platform.',
  icons: {
    icon: '/favicon.ico',          // default
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      {/* Apply global dark mode colors to the body */}
      <body className="bg-[#121212] text-white antialiased min-h-screen flex flex-col">
        <Header />
        {/* Main content area: uses flex-grow to push footer down */}
        <main className="flex-grow p-4 md:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}