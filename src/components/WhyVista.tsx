import { Layers, Shield, Users, Workflow } from 'lucide-react';

export default function WhyVista() {
  const reasons = [
    {
      icon: Layers,
      title: 'Satu Ekosistem Lengkap',
      description: 'Belajar, praktek, dapat modal, dan scaling – semua ada di dalam satu ekosistem Vista.'
    },
    {
      icon: Shield,
      title: 'Berbasis Data & Risk Management',
      description: 'Fokus pada manajemen risiko dan konsistensi, bukan sekadar entry-exit tanpa arah.'
    },
    {
      icon: Users,
      title: 'Pendampingan & Komunitas',
      description: 'Bukan belajar sendirian. Ada mentor, sesi live, dan komunitas trader aktif.'
    },
    {
      icon: Workflow,
      title: 'Produk Fleksibel Sesuai Level Anda',
      description: 'Dari pemula sampai yang sudah profit tapi butuh modal lebih, ada jalur masing-masing.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Kenapa Banyak Trader Memilih Vista?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/25">
                <reason.icon className="w-7 h-7 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
