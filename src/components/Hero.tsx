import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Kuasai Analisis Pasar dan Raih Kesempatan Menjadi Professional Trader
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Bergabunglah bersama Vista Trading untuk mendapatkan pembelajaran langsung dari para ahli di bidangnya. Pelajari strategi trading yang terbukti efektif, kuasai analisis pasar secara menyeluruh, dan tingkatkan kemampuan Anda.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {[
              'Edukasi step-by-step sampai bisa praktek',
              'Akses modal trading tambahan lewat prop challenge',
              'Algo trading untuk yang sibuk & ingin semi-pasif',
              'Sinyal & live trade harian bersama mentor'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-left bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors duration-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105 flex items-center gap-2">
              Konsultasi Gratis dengan Tim Vista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Tanya produk mana yang paling cocok dengan kondisi Anda sekarang
          </p>
        </div>
      </div>
    </section>
  );
}
