import ProductCard from './ProductCard';
import { GraduationCap, TrendingUp, Cpu, Star } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: GraduationCap,
      tagline: 'Vista Academy',
      title: 'Edukasi Trading',
      description: 'Program edukasi trading terstruktur yang dirancang agar Anda langsung praktek, bukan hanya teori. Fokus pada pembentukan SOP trading pribadi, mindset, dan risk management yang sehat.',
      targetAudience: [
        'Yang baru mulai belajar trading',
        'Yang sudah coba-coba tapi belum konsisten',
        'Yang mau punya aturan trading jelas dan tertulis'
      ],
      features: [
        'Modul belajar bertahap (online/offline)',
        'Sesi live class & tanya jawab',
        'Template SOP & jurnal trading',
        'Akses komunitas internal Vista Academy'
      ],
      ctaPrimary: 'Lihat Kurikulum Vista Academy',
      ctaSecondary: 'Tanya Tim Vista',
      bgGradient: 'from-blue-600 to-cyan-600',
      iconColor: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      tagline: 'Program Tantangan',
      title: 'Prop Challenge',
      description: 'Program tantangan trading berjenjang yang memberi Anda akses ke modal trading lebih besar ketika Anda lulus aturan risk & target yang disepakati.',
      targetAudience: [
        'Trader yang sudah punya sistem, tapi modal terbatas',
        'Yang ingin scaling akun secara bertahap',
        'Yang ingin rekam jejak trading lebih profesional'
      ],
      features: [
        '1-Step / 2-Step Challenge dengan aturan jelas',
        'Trading dengan modal lebih besar tanpa deposit besar',
        'Potensi bagi hasil profit',
        'Dashboard monitoring hasil trading',
        'Support tim Vista jika ada kendala teknis'
      ],
      ctaPrimary: 'Daftar Prop Challenge Vista',
      ctaSecondary: 'Konsultasi Prop Challenge',
      bgGradient: 'from-emerald-600 to-teal-600',
      iconColor: 'text-emerald-500'
    },
    {
      icon: Cpu,
      tagline: 'ATM - A Trillion Machine',
      title: 'Algo Trading',
      description: 'ATM (A Trillion Machine) adalah sistem algo trading yang berjalan otomatis sesuai parameter risk management yang sudah teruji. Cocok untuk Anda yang tidak punya banyak waktu untuk analisa manual.',
      targetAudience: [
        'Profesional yang sibuk tapi ingin diversifikasi ke trading',
        'Trader yang ingin menggabungkan sistem manual & otomatis',
        'Investor yang ingin melihat performa jangka panjang sistem'
      ],
      features: [
        'Sistem berjalan di akun atas nama Anda',
        'Parameter risiko bisa disesuaikan',
        'Laporan performa berkala',
        'Support teknis & panduan setup'
      ],
      ctaPrimary: 'Pelajari Cara Kerja ATM',
      ctaSecondary: 'Jadwalkan Demo ATM',
      bgGradient: 'from-slate-700 to-slate-900',
      iconColor: 'text-slate-600'
    },
    {
      icon: Star,
      tagline: 'VIP Membership',
      title: 'Signal & Live Trade',
      description: 'VIP Membership Vista memberikan akses ke daily signal, live trading session, serta diskusi market real-time bersama mentor dan komunitas.',
      targetAudience: [
        'Trader yang sudah punya akun real & siap eksekusi',
        'Yang ingin belajar sambil mengamati cara pikir mentor',
        'Yang butuh "second opinion" sebelum entry'
      ],
      features: [
        'Sinyal harian (pair / gold / crypto)',
        'Live trading & market review rutin',
        'Akses ke channel khusus member',
        'Update sentiment & event penting ekonomi'
      ],
      ctaPrimary: 'Gabung VIP Membership Vista',
      ctaSecondary: undefined,
      bgGradient: 'from-amber-500 to-orange-600',
      iconColor: 'text-amber-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Pilih Jalur yang Cocok dengan Anda
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Setiap produk dirancang untuk level dan kebutuhan yang berbeda. Pilih yang paling sesuai dengan kondisi Anda saat ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-12 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
          <p className="text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900">Catatan Penting:</span> Algo trading bukan mesin uang instan. Tetap ada risiko. Fokus kami adalah sistem yang terukur dan transparan. Slot VIP Membership dibatasi agar komunitas tetap kondusif.
          </p>
        </div>
      </div>
    </section>
  );
}
