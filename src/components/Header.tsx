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
    <header className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
          <img 
            src="/Vista-Logo_White.png"
            alt="Vista Logo"
            className="h-8 w-auto md:h-9 lg:h-10 object-contain"
          />
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
            <a href={createWhatsAppLink(WHATSAPP_MESSAGES.KONSULTASI_GRATIS)} target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg">
              Konsultasi Gratis
            </a>
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
              <a href={createWhatsAppLink(WHATSAPP_MESSAGES.KONSULTASI_GRATIS)} target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 mt-2 text-center">
                Konsultasi Gratis
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
