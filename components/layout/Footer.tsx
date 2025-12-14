// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] p-8 text-center text-gray-400 text-sm border-t border-purple-900/50 mt-auto">
      <p>&copy; {new Date().getFullYear()} Rate Beat. All Rights Reserved.</p>
    </footer>
  );
}