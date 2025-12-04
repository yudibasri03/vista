import { useState } from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Produk', href: '#products' },
    { label: 'Perbandingan', href: '#comparison' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
              <div className="w-60 h-25 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                      src="/Vista-Logo_White.png" 
                      alt="Vista Logo" 
                      className="w-full h-full object-contain"
                />
              </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-amber-400 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg">
              Konsultasi Gratis
            </button>
          </nav>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-amber-400 font-medium transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 mt-2">
                Konsultasi Gratis
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
