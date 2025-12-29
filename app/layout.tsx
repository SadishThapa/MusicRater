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

// app/layout.tsx
// ... imports

// app/layout.tsx
// ... imports and metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#121212] text-white antialiased min-h-screen flex flex-col">
        {/* 1. FIXED HEADER WRAPPER */}
        {/* We wrap the Header in a fixed container with high z-index and full width */}
        <div className="fixed top-0 w-full z-20">
          <Header />
        </div>

        {/* 2. HEADER PLACEHOLDER/SPACER */}
        {/* This empty div takes up space (h-20) in the normal flow to push content down. 
            Its height MUST match the fixed header's actual height. 
            Since you used pt-20 on main, let's assume the header is h-20 (80px). 
            If your header is shorter (e.g., h-16), adjust this to h-16 and pt/mt on main accordingly. */}
        <div className="h-20"></div> 
        
        {/* 3. MAIN CONTENT (Adjusted) */}
        {/* We REMOVE the pt-20 from here since the h-20 spacer above already pushes it down */}
        <main className="flex-grow p-4 md:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}