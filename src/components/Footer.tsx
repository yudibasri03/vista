import { Mail, MapPin, Phone } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo + Deskripsi */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/Vista-Logo_White.png"
                alt="Vista Logo"
                className="h-10 w-auto md:h-12 object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-md text-sm sm:text-base">
              Ekosistem trading terintegrasi yang membantu Anda belajar, berlatih,
              dan berkembang dengan pendekatan berbasis data dan risk management.
            </p>

            <div className="flex gap-3">
              {/* Ganti href dengan link sosmed asli */}
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-1.25 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <span className="sr-only">X (Twitter)</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.9 3H21l-4.5 5.15L21.8 21h-4.9l-3.1-7.41L9 21H3.8l4.9-5.73L3 3h5.1l2.9 6.76L18.9 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Produk */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Produk</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Vista Academy
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Prop Challenge
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Algo Trading
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  VIP Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>info@govista.co.id</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>+62 897-3348-887</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-top border-slate-800 pt-6 sm:pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-500">
              &copy; {currentYear} Vista Penasihat. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Syarat &amp; Ketentuan
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-600 mt-4 text-center md:text-left leading-relaxed">
            Peringatan Risiko: Trading produk derivatif seperti forex, indeks, komoditas, dan
            cryptocurrency memiliki risiko tinggi dan dapat mengakibatkan kerugian sebagian atau
            seluruh modal Anda. Pastikan Anda memahami sepenuhnya risiko yang terlibat dan jangan
            pernah menginvestasikan dana yang Anda tidak mampu untuk kehilangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
