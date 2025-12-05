import { useState } from 'react';
import ProductCard from './ProductCard';
import { GraduationCap, TrendingUp, Cpu, Star, X } from 'lucide-react';

export default function Products() {
  const [showATMModal, setShowATMModal] = useState(false);

  const products = [
    {
      icon: GraduationCap,
      tagline: 'Vista Academy',
      title: 'Edukasi Trading',
      description:
        'Program edukasi trading terstruktur yang dirancang agar Anda langsung praktek, bukan hanya teori. Fokus pada pembentukan SOP trading pribadi, mindset, dan risk management yang sehat.',
      targetAudience: [
        'Yang baru mulai belajar trading',
        'Yang sudah coba-coba tapi belum konsisten',
        'Yang mau punya aturan trading jelas dan tertulis',
      ],
      features: [
        'Modul belajar bertahap (online/offline)',
        'Sesi live class & tanya jawab',
        'Template SOP & jurnal trading',
        'Akses komunitas internal Vista Academy',
      ],
      ctaPrimary: 'Lihat Kurikulum Vista Academy',
      ctaSecondary: 'Tanya Tim Vista',
      bgGradient: 'from-amber-600 to-amber-500',
      iconColor: 'text-amber-500',
    },
    {
      icon: TrendingUp,
      tagline: 'Program Tantangan',
      title: 'Prop Challenge',
      description:
        'Program tantangan trading berjenjang yang memberi Anda akses ke modal trading lebih besar ketika Anda lulus aturan risk & target yang disepakati.',
      targetAudience: [
        'Trader yang sudah punya sistem, tapi modal terbatas',
        'Yang ingin scaling akun secara bertahap',
        'Yang ingin rekam jejak trading lebih profesional',
      ],
      features: [
        '1-Step / 2-Step Challenge dengan aturan jelas',
        'Trading dengan modal lebih besar tanpa deposit besar',
        'Potensi bagi hasil profit',
        'Dashboard monitoring hasil trading',
        'Support tim Vista jika ada kendala teknis',
      ],
      ctaPrimary: 'Cara Kerja Program Tantangan',
      ctaSecondary: 'Konsultasi Prop Challenge',
      bgGradient: 'from-amber-600 to-amber-500',
      iconColor: 'text-amber-500',
    },
    {
      icon: Cpu,
      tagline: 'ATM - A Trillion Machine',
      title: 'Algo Trading',
      description:
        'ATM (A Trillion Machine) adalah sistem algo trading yang berjalan otomatis sesuai parameter risk management yang sudah teruji. Cocok untuk Anda yang tidak punya banyak waktu untuk analisa manual.',
      targetAudience: [
        'Profesional yang sibuk tapi ingin diversifikasi ke trading',
        'Trader yang ingin menggabungkan sistem manual & otomatis',
        'Investor yang ingin melihat performa jangka panjang sistem',
      ],
      features: [
        'Sistem berjalan di akun atas nama Anda',
        'Parameter risiko bisa disesuaikan',
        'Laporan performa berkala',
        'Support teknis & panduan setup',
      ],
      ctaPrimary: 'Pelajari Cara Kerja ATM',
      ctaSecondary: 'Jadwalkan Demo ATM',
      bgGradient: 'from-amber-600 to-amber-500',
      iconColor: 'text-amber-500',
      onPrimaryClick: () => setShowATMModal(true), // 🔹 trigger modal
    },
    {
      icon: Star,
      tagline: 'VIP Membership',
      title: 'Signal & Live Trade',
      description:
        'VIP Membership Vista memberikan akses ke daily signal, live trading session, serta diskusi market real-time bersama mentor dan komunitas.',
      targetAudience: [
        'Trader yang sudah punya akun real & siap eksekusi',
        'Yang ingin belajar sambil mengamati cara pikir mentor',
        'Yang butuh "second opinion" sebelum entry',
      ],
      features: [
        'Sinyal harian (pair / gold / crypto)',
        'Live trading & market review rutin',
        'Akses ke channel khusus member',
        'Update sentiment & event penting ekonomi',
      ],
      ctaPrimary: 'Gabung VIP Membership Vista',
      bgGradient: 'from-amber-500 to-orange-600',
      iconColor: 'text-amber-500',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pilih Jalur yang Cocok dengan Anda
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Setiap produk dirancang untuk level dan kebutuhan yang berbeda. Pilih yang paling sesuai dengan kondisi Anda saat ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-12 p-8 bg-slate-800 border-l-4 border-amber-500 rounded-lg">
          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Catatan Penting:</span> Algo trading bukan mesin uang instan. Tetap ada risiko. Fokus kami adalah sistem yang terukur dan transparan. Slot VIP Membership dibatasi agar komunitas tetap kondusif.
          </p>
        </div>
      </div>

      {/* ========= MODAL GOLD-ATM ========= */}
      {showATMModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm">
          <div className="relative max-w-5xl w-full mx-4 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
              <div>
                <p className="text-xs tracking-widest text-amber-400 font-semibold uppercase">
                  GOLD-ATM • MASTER COPIER • UPDATE OKTOBER 2025
                </p>
                <h3 className="text-xl font-semibold text-white mt-1">
                  Cara Kerja ATM (A Trillion Machine)
                </h3>
                <p className="text-sm text-gray-400">
                  Ringkasan cara kerja dan karakteristik produk algo trading GOLD-ATM.
                </p>
              </div>
              <button
                onClick={() => setShowATMModal(false)}
                className="p-2 rounded-full hover:bg-slate-800 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body scrollable */}
            <div className="px-6 py-5 space-y-6 text-sm text-gray-200 max-h-[70vh] overflow-y-auto">
              {/* Tujuan + Pendekatan + Risk */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-400 mb-1 text-xs tracking-widest">
                      TUJUAN INVESTASI
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      EA-GOLD ATM bertujuan memberikan imbal hasil absolut yang konsisten dalam jangka menengah hingga panjang, terutama melalui perdagangan komoditas dan aset derivatif yang tidak sepenuhnya berkorelasi dengan pasar tradisional. Sistem dikembangkan dengan kombinasi analisis fundamental dan kuantitatif.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-400 mb-1 text-xs tracking-widest">
                      PENDEKATAN INVESTASI
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Strategi menggunakan teknik perdagangan algoritmik untuk menangkap peluang di pasar yang sedang naik maupun turun. Sistem dapat menggabungkan posisi long dan short, menyesuaikan ukuran posisi, dan menutup posisi secara dinamis berdasarkan tren harga, volatilitas, dan pola pasar.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-400 mb-1 text-xs tracking-widest">
                      MANAJEMEN RISIKO
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Manajemen risiko diterapkan melalui pembatasan drawdown, pengaturan ukuran posisi yang disiplin, serta penggunaan parameter proteksi otomatis seperti stop loss dinamis dan penyesuaian eksposur ketika volatilitas meningkat.
                    </p>
                  </div>
                </div>

                {/* Ringkasan Portfolio */}
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
                  <h4 className="font-semibold text-amber-400 mb-2 text-xs tracking-widest">
                    RANGKUMAN PORTOFOLIO
                  </h4>
                  <div className="flex justify-between py-0.5">
                    <span className="text-gray-400">Tanggal Peluncuran</span>
                    <span className="text-gray-100">Jan 2023</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-gray-400">Frekuensi Berlangganan</span>
                    <span className="text-gray-100">Per 3 Bulan</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-gray-400">Biaya Manajemen</span>
                    <span className="text-gray-100">Gratis</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-gray-400">Biaya Kinerja</span>
                    <span className="text-gray-100">Berbasis profit</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-gray-400">Penarikan Profit</span>
                    <span className="text-gray-100">Bulanan</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-gray-400">Biaya Penarikan</span>
                    <span className="text-gray-100">Gratis</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-gray-400">Master Copy Portofolio</span>
                    <span className="text-gray-100">GOLD-ATM</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-gray-400">Periode Penguncian</span>
                    <span className="text-gray-100">N/A</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-gray-400">Jenis Akun</span>
                    <span className="text-gray-100">Master Copier</span>
                  </div>
                </div>
              </div>

              {/* Performance + Historical */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Stats */}
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-xs">
                  <h4 className="font-semibold text-amber-400 mb-2 text-xs tracking-widest">
                    PERFORMANCE STATISTICS
                  </h4>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Pengembalian Kumulatif</span>
                      <span className="text-green-400 font-semibold">253.6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pengembalian Tahunan (compound)</span>
                      <span className="text-green-400 font-semibold">30.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pengembalian Bulanan Rata-rata</span>
                      <span className="text-green-400 font-semibold">7.6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bulan Terbaik</span>
                      <span className="text-green-400 font-semibold">17.17%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bulan Terburuk</span>
                      <span className="text-red-400 font-semibold">-8.1%</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-3">
                    Angka di atas bersifat ilustratif berdasarkan track record internal dan dapat berubah seiring waktu. Kinerja historis tidak menjamin kinerja di masa depan.
                  </p>
                </div>

                {/* Penjelasan */}
                <div className="text-xs text-gray-400 leading-relaxed">
                  <h4 className="font-semibold text-amber-400 mb-2 text-xs tracking-widest">
                    APA ARTINYA BAGI ANDA?
                  </h4>
                  <p className="mb-2">
                    GOLD-ATM dirancang sebagai alternatif investasi berbasis algo trading yang transparan dan terukur. Anda tidak perlu mengelola transaksi satu per satu, namun tetap dapat memantau hasil dan laporan performa berkala.
                  </p>
                  <p className="mb-2">
                    Fokus utama adalah pertumbuhan modal jangka menengah–panjang dengan disiplin manajemen risiko, bukan skema cepat kaya. Cocok bagi investor yang ingin diversifikasi ke aset berbasis sistem.
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Peringatan Risiko: Trading dan investasi di instrumen derivatif memiliki risiko tinggi. Nilai investasi dapat naik maupun turun. Pastikan Anda memahami risiko dan hanya menggunakan dana yang siap diinvestasikan.
                  </p>
                </div>
              </div>

              {/* Historical Performance table simple version */}
              <div>
                <h4 className="font-semibold text-amber-400 mb-2 text-xs tracking-widest">
                  HISTORICAL PERFORMANCE (%)
                </h4>
                <div className="overflow-x-auto border border-slate-800 rounded-lg text-[11px]">
                  <table className="min-w-full text-center border-collapse">
                    <thead className="bg-slate-900">
                      <tr>
                        <th className="px-2 py-2 border border-slate-800">Tahun</th>
                        {['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Aug','Sep','Okt','Nov','Des','All'].map((m)=>(
                          <th key={m} className="px-2 py-2 border border-slate-800">{m}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-slate-950">
                        <td className="px-2 py-2 border border-slate-800 font-semibold">2025</td>
                        {['3,41%','10,85%','8,76%','5,66%','0,36%','9,88%','5,41%','3,67%','9,28%','17,17%','–','–','74,45%'].map((v,i)=>(
                          <td
                            key={i}
                            className={`px-2 py-2 border border-slate-800 ${
                              v.startsWith('-') ? 'text-red-400' :
                              i === 12 ? 'text-green-400 font-semibold' : 'text-gray-100'
                            }`}
                          >
                            {v}
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-slate-900/60">
                        <td className="px-2 py-2 border border-slate-800 font-semibold">2024</td>
                        {['12,5%','14,3%','19,6%','13,7%','-1,2%','9,5%','-6,5%','11,2%','15,8%','-4,2%','1,2%','10,2%','85,9%'].map((v,i)=>(
                          <td
                            key={i}
                            className={`px-2 py-2 border border-slate-800 ${
                              v.startsWith('-') ? 'text-red-400' :
                              i === 12 ? 'text-green-400 font-semibold' : 'text-gray-100'
                            }`}
                          >
                            {v}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-5 flex justify-end border-t border-slate-800 bg-slate-900/80">
              <button
                onClick={() => setShowATMModal(false)}
                className="px-4 py-2 text-sm rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-200 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
