import { useState } from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';
import { createWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Produk', href: '#products' },
    { label: 'Pilih Perjalanan-mu', href: '#journeys' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img
              src="/Vista-Logo_White.png"
              alt="Vista Logo"
              className="h-8 w-auto md:h-9 lg:h-10 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-gray-300 hover:text-amber-400 font-semibold transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href={createWhatsAppLink(WHATSAPP_MESSAGES.KONSULTASI_GRATIS)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-105 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative">Konsultasi Gratis</span>
            </a>
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-amber-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-md">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-amber-400 font-semibold transition-colors px-3 py-2 rounded-lg hover:bg-slate-800/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={createWhatsAppLink(WHATSAPP_MESSAGES.KONSULTASI_GRATIS)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 mt-2 text-center shadow-lg shadow-amber-500/25"
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
