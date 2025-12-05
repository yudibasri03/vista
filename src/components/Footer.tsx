import { TrendingUp, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center mb-4">
              <img 
                src="/Vista-Logo_White.png"
                alt="Vista Logo"
                className="h-10 w-auto md:h-12"
              />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-md">
              Ekosistem trading terintegrasi yang membantu Anda belajar, berlatih, dan berkembang dengan pendekatan berbasis data dan risk management.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/vista.penasihat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/vista.penasihat/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Produk</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Vista Academy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Prop Challenge</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Algo Trading</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">VIP Membership</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">info@vista-trading.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">021-50183333</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Komplek Golden Plaza Jl.RS Fatmawati 15, Blok A-18, RT.2/RW.6, Gandaria Selatan, Kec. Cilandak, Jakarta Selatan, DKI Jakarta 12420</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; 2024 Vista Trading. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Disclaimer</a>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4 text-center md:text-left">
            Peringatan Risiko: Trading forex, saham, dan cryptocurrency memiliki risiko tinggi dan tidak cocok untuk semua orang. Pastikan Anda memahami risiko yang terlibat dan jangan pernah menginvestasikan uang yang Anda tidak mampu kehilangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
