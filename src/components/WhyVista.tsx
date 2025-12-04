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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Kenapa Banyak Trader Memilih Vista?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
