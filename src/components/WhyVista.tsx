import { Layers, Shield, Users, Workflow } from 'lucide-react';

export default function WhyVista() {
  const reasons = [
    {
      icon: Layers,
      title: 'Satu Ekosistem Lengkap',
      description: 'Belajar, praktek, dapat modal, dan scaling – semua ada di dalam satu ekosistem Vista.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Berbasis Data & Risk Management',
      description: 'Fokus pada manajemen risiko dan konsistensi, bukan sekadar entry-exit tanpa arah.',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Pendampingan & Komunitas',
      description: 'Bukan belajar sendirian. Ada mentor, sesi live, dan komunitas trader aktif.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Workflow,
      title: 'Produk Fleksibel Sesuai Level Anda',
      description: 'Dari pemula sampai yang sudah profit tapi butuh modal lebih, ada jalur masing-masing.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-amber-400">Mengapa Vista?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Kenapa Banyak Trader Memilih Vista?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>

              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {reason.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {reason.description}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
