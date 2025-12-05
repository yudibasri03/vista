import { MessageCircle, Send } from 'lucide-react';
import { createWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Belum Tahu Harus Mulai dari Produk yang Mana?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Ceritakan kondisi Anda saat ini: pengalaman trading, modal, dan tujuan. Tim Vista akan bantu rekomendasikan jalur paling realistis untuk Anda.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <a href={createWhatsAppLink(WHATSAPP_MESSAGES.KONSULTASI_GRATIS)} target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105 flex items-center justify-center gap-3">
            <MessageCircle className="w-6 h-6" />
            Chat via WhatsApp
          </a>
          <a href={createWhatsAppLink(WHATSAPP_MESSAGES.KONSULTASI_GRATIS)} target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto bg-slate-800 border-2 border-amber-400/30 hover:border-amber-400 text-white font-semibold px-8 py-5 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
            <Send className="w-6 h-6" />
            Isi Form Konsultasi Gratis
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-amber-400 transition-colors duration-300">
            <div className="text-3xl font-bold text-amber-400 mb-2">5000+</div>
            <div className="text-gray-300">Trader Terdaftar</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-amber-400 transition-colors duration-300">
            <div className="text-3xl font-bold text-amber-400 mb-2">4.8/5</div>
            <div className="text-gray-300">Rating Kepuasan</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-amber-400 transition-colors duration-300">
            <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Tim Vista</div>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-8 text-sm">
          Konsultasi gratis, tanpa kewajiban. Kami hanya ingin memastikan Anda memilih jalur yang tepat.
        </p>
      </div>
    </section>
  );
}
