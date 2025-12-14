// components/layout/Header.tsx
import { Search } from 'lucide-react'; // <-- Import the Search icon
import Image from 'next/image';
import Link from "next/link";

export default function Header() {
  // New primary color: #4A47A3 (Deep Indigo-Purple)
  // New hover/secondary color: #8D8CE7 (Lighter Lavender-Purple)

  return (
    <header className="sticky top-0 z-10 bg-[#1E1E1E] p-4 shadow-xl border-b border-[#4A47A3]/70">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/soundly.png"
            alt="Soundly logo"
            width={32}
            height={32}
          />
          {/* Accent Color updated to #4A47A3 */}
          <span className="text-3xl font-extrabold text-[#4A47A3] hover:text-[#8D8CE7] transition-colors tracking-wider">
            SOUNDLY
          </span>
        </Link>

        <nav className="hidden sm:flex space-x-6 text-lg font-medium text-gray-200">
          {/* Hover color updated to #8D8CE7 */}
          <Link href="/" className="hover:text-[#8D8CE7] transition-colors">
            Home
          </Link>
          <Link href="/search" className="hover:text-[#8D8CE7] transition-colors">
            Browse
          </Link>
          <Link href="/profile" className="hover:text-[#8D8CE7] transition-colors">
            My Profile
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Replaced '🔍' with the <Search /> icon */}
          <Link
            href="/search"
            className="text-gray-400 hover:text-white transition-colors text-xl" // text-2xl is replaced by the icon size
          >
            {/* Set size to match the surrounding elements */}
            <Search size={24} className="hover:text-white transition-colors" /> 
          </Link>
          {/* Button BG updated to #4A47A3, Hover updated to a darker shade */}
          <button className="px-4 py-2 rounded-full bg-[#4A47A3] text-white font-semibold hover:bg-indigo-700 transition-colors hidden sm:block">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}