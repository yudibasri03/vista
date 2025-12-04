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
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
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
                <span className="text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Jakarta, Indonesia</span>
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
