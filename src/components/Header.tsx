// src/components/Header.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Produk', href: '#products' },
    { label: 'Perbandingan', href: '#comparison' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950 border-b border-slate-800 z-50 shadow-sm md:bg-slate-950/90 md:backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/Vista-Logo_White.png"
              alt="Vista Penasihat"
              className="h-8 w-auto md:h-9 lg:h-10 object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-amber-400 font-medium text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#products"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-5 py-2 rounded-lg text-sm transition-all duration-200 hover:shadow-md"
            >
              Konsultasi Gratis
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-800">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-amber-400 font-medium text-sm px-1 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#products"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-5 py-2 rounded-lg text-sm transition-all duration-200 mt-2 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Konsultasi Gratis
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
