// src/components/Products.tsx
import { useState } from 'react';
import ProductCard from './ProductCard';
import { GraduationCap, TrendingUp, Cpu, Star, X } from 'lucide-react';

function Row({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex justify-between gap-2 py-0.5 text-xs">
      <span className="text-gray-400">{label}</span>
      <span className={valueClass ?? 'text-gray-100'}>{value}</span>
    </div>
  );
}

export default function Products() {
  const [showAcademyModal, setShowAcademyModal] = useState(false);
  const [showPropModal, setShowPropModal] = useState(false);
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
      title: 'Tantangan Trading',
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
      ctaSecondary: undefined,
      bgGradient: 'from-amber-500 to-orange-600',
      iconColor: 'text-amber-500',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pilih Jalur yang Cocok dengan Anda
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Setiap produk dirancang untuk level dan kebutuhan yang berbeda. Pilih yang paling
            sesuai dengan kondisi Anda saat ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onPrimaryClick={
                index === 0
                  ? () => setShowAcademyModal(true)
                  : index === 1
                  ? () => setShowPropModal(true)
                  : index === 2
                  ? () => setShowATMModal(true)
                  : undefined
              }
            />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-slate-800/90 border-l-4 border-amber-500 rounded-lg">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            <span className="font-semibold text-white">Catatan Penting:</span> Algo trading bukan
            mesin uang instan. Tetap ada risiko. Fokus kami adalah sistem yang terukur dan
            transparan. Slot VIP Membership dibatasi agar komunitas tetap kondusif.
          </p>
        </div>
      </div>

      {/* ================= MODAL VISTA ACADEMY ================= */}
      {showAcademyModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4">
          <div className="max-w-4xl w-full bg-slate-950 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
              <div>
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  Vista Academy
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Kurikulum & Paket Program
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAcademyModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-5 sm:py-6 space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 gap-4">
              {/* Intermediate */}
              <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-red-900/60 to-slate-950 p-4 sm:p-5">
                <h4 className="text-sm font-semibold text-red-300 uppercase tracking-wide mb-1">
                  Paket Intermediate
                </h4>
                <p className="text-xs text-gray-300 mb-3">
                  Untuk trader yang ingin melengkapi pemahaman smart money concepts dengan analisis
                  fundamental dan psikologi trading.
                </p>

                <h5 className="text-xs font-semibold text-gray-300 uppercase mb-2">
                  Modul yang dipelajari:
                </h5>
                <ul className="text-xs sm:text-sm text-gray-200 space-y-1.5 mb-3 list-disc list-inside">
                  <li>Mindset & Psikologi Trading</li>
                  <li>Money Management</li>
                  <li>Trading Plan dengan Simple Indicator & Cluster</li>
                  <li>Analisis Fundamental</li>
                  <li>Akun Prop Firms (simulasi & studi kasus)</li>
                  <li>Akses VIP bimbingan trading</li>
                </ul>

                <div className="mt-3 border-t border-red-700/50 pt-3">
                  <p className="text-[11px] text-gray-400 line-through mb-0.5">
                    Total Investasi Normal: <span className="ml-1">Rp 12.200.000</span>
                  </p>
                  <p className="text-sm sm:text-base font-bold text-red-300">
                    Harga Promo: <span className="text-white">Rp 7.200.000</span>{' '}
                    <span className="text-xs font-semibold text-red-300 align-middle">
                      (40% OFF)
                    </span>
                  </p>
                </div>
              </div>

              {/* Elite */}
              <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-amber-700/70 to-slate-950 p-4 sm:p-5">
                <h4 className="text-sm font-semibold text-amber-300 uppercase tracking-wide mb-1">
                  Paket Elite
                </h4>
                <p className="text-xs text-gray-300 mb-3">
                  Untuk trader yang ingin melengkapi pemahaman SMC dengan analisis fundamental,
                  psikologi trading, dan integrasi dengan personal EA.
                </p>

                <h5 className="text-xs font-semibold text-gray-300 uppercase mb-2">
                  Modul yang dipelajari:
                </h5>
                <ul className="text-xs sm:text-sm text-gray-200 space-y-1.5 mb-3 list-disc list-inside">
                  <li>Mindset & Psikologi Trading</li>
                  <li>Money Management</li>
                  <li>Trading Plan dengan Simple Indicator & Cluster</li>
                  <li>Analisis Fundamental</li>
                  <li>Akun Prop Firms (simulasi & studi kasus)</li>
                  <li>Akses VIP bimbingan trading dengan EA</li>
                  <li>Personal EA (license untuk peserta)</li>
                </ul>

                <div className="mt-3 border-t border-amber-600/60 pt-3">
                  <p className="text-[11px] text-gray-400 line-through mb-0.5">
                    Total Investasi Normal: <span className="ml-1">Rp 15.200.000</span>
                  </p>
                  <p className="text-sm sm:text-base font-bold text-amber-300">
                    Harga Promo: <span className="text-white">Rp 9.200.000</span>{' '}
                    <span className="text-xs font-semibold text-amber-300 align-middle">
                      (40% OFF)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 pb-4 sm:pb-5 flex flex-col sm:flex-row gap-3 border-t border-slate-800 bg-slate-900/60">
              <button
                type="button"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 text-sm font-semibold transition"
              >
                Konsultasi Pilih Paket via WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setShowAcademyModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-700 text-gray-200 text-sm hover:border-amber-400 hover:text-amber-300 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL PROGRAM TANTANGAN ================= */}
      {showPropModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4">
          <div className="max-w-5xl w-full bg-slate-950 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
              <div>
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  Program Tantangan Vista
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Cara Kerja 1-Step & 2-Step Challenge
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPropModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Trading Rules */}
            <div className="px-6 py-5 sm:py-6">
              <h4 className="text-center text-sm sm:text-base font-semibold text-amber-300 tracking-wide mb-4">
                TRADING RULES
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                {/* 1-Step */}
                <div className="rounded-xl border border-amber-500/70 bg-slate-900/60">
                  <div className="px-4 py-3 border-b border-amber-500/60 text-center">
                    <p className="text-xs font-semibold text-amber-300 uppercase tracking-wide">
                      1-Step Challenge
                    </p>
                    <p className="text-[11px] text-gray-300">Assessment 1 → Funded</p>
                  </div>
                  <table className="w-full text-xs sm:text-sm text-gray-200">
                    <thead>
                      <tr className="text-amber-300">
                        <th className="py-2 px-3 text-left">Rules</th>
                        <th className="py-2 px-3 text-left">Assessment 1</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1.5 px-3">Profit Target</td>
                        <td className="py-1.5 px-3">8%</td>
                      </tr>
                      <tr className="bg-slate-900/40">
                        <td className="py-1.5 px-3">Daily Loss Limit</td>
                        <td className="py-1.5 px-3">5%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-3">Max Drawdown</td>
                        <td className="py-1.5 px-3">8%</td>
                      </tr>
                      <tr className="bg-slate-900/40">
                        <td className="py-1.5 px-3">Inactivity Period</td>
                        <td className="py-1.5 px-3">30 Days</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-3">Leverage</td>
                        <td className="py-1.5 px-3">1:50</td>
                      </tr>
                      <tr className="bg-slate-900/40">
                        <td className="py-1.5 px-3">Max Time</td>
                        <td className="py-1.5 px-3">No limit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 2-Step */}
                <div className="rounded-xl border border-amber-500/70 bg-slate-900/60">
                  <div className="px-4 py-3 border-b border-amber-500/60 text-center">
                    <p className="text-xs font-semibold text-amber-300 uppercase tracking-wide">
                      2-Step Challenge
                    </p>
                    <p className="text-[11px] text-gray-300">
                      Assessment 1 → Assessment 2 → Funded
                    </p>
                  </div>
                  <table className="w-full text-xs sm:text-sm text-gray-200">
                    <thead>
                      <tr className="text-amber-300">
                        <th className="py-2 px-3 text-left">Rules</th>
                        <th className="py-2 px-3 text-left">Assessment 1</th>
                        <th className="py-2 px-3 text-left">Assessment 2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1.5 px-3">Profit Target</td>
                        <td className="py-1.5 px-3">8%</td>
                        <td className="py-1.5 px-3">5%</td>
                      </tr>
                      <tr className="bg-slate-900/40">
                        <td className="py-1.5 px-3">Daily Loss Limit</td>
                        <td className="py-1.5 px-3">5%</td>
                        <td className="py-1.5 px-3">5%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-3">Max Drawdown</td>
                        <td className="py-1.5 px-3">8%</td>
                        <td className="py-1.5 px-3">8%</td>
                      </tr>
                      <tr className="bg-slate-900/40">
                        <td className="py-1.5 px-3">Inactivity Period</td>
                        <td className="py-1.5 px-3">30 Days</td>
                        <td className="py-1.5 px-3">30 Days</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-3">Leverage</td>
                        <td className="py-1.5 px-3">1:50</td>
                        <td className="py-1.5 px-3">1:50</td>
                      </tr>
                      <tr className="bg-slate-900/40">
                        <td className="py-1.5 px-3">Max Time</td>
                        <td className="py-1.5 px-3">No limit</td>
                        <td className="py-1.5 px-3">–</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Copywriting di bawah tabel */}
              <div className="mt-5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <p className="mb-2">
                  Secara sederhana,{' '}
                  <span className="font-semibold text-amber-300">1-Step Challenge</span> cocok untuk
                  trader yang sudah percaya dengan sistemnya dan ingin lebih cepat menuju akun
                  funded dengan satu tahap assessment.
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-amber-300">2-Step Challenge</span> lebih ideal
                  untuk trader yang ingin proses bertahap dengan target profit per tahap yang lebih
                  ringan. Anda punya kesempatan menguji konsistensi strategi dalam dua fase sebelum
                  mengelola dana yang lebih besar.
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400">
                  Vista akan membantu Anda memilih jalur yang paling realistis dengan gaya trading,
                  toleransi risiko, dan waktu yang Anda miliki. Aturan dapat menyesuaikan ketentuan
                  prop firm partner yang digunakan.
                </p>
              </div>
            </div>

            {/* CTA bawah modal */}
            <div className="px-6 pb-4 sm:pb-5 flex flex-col sm:flex-row gap-3 border-t border-slate-800 bg-slate-900/60">
              <button
                type="button"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 text-sm font-semibold transition"
              >
                Diskusi Pilih 1-Step / 2-Step via WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setShowPropModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-700 text-gray-200 text-sm hover:border-amber-400 hover:text-amber-300 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL ATM / GOLD-ATM ================= */}
      {showATMModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4">
          <div className="max-w-5xl w-full bg-slate-950 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
              <div>
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  GOLD-ATM • A Trillion Machine
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Cara Kerja ATM (Algo Trading GOLD-ATM)
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Ringkasan cara kerja, pendekatan, dan statistik performa GOLD-ATM.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowATMModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 sm:py-6 space-y-6 max-h-[70vh] overflow-y-auto text-xs sm:text-sm text-gray-200">
              {/* Tujuan + Pendekatan + Risk + Ringkasan Portofolio */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-[11px] font-semibold text-amber-300 tracking-wide mb-1">
                      TUJUAN INVESTASI
                    </h4>
                    <p className="leading-relaxed text-gray-300">
                      EA-GOLD ATM bertujuan memberikan hasil absolut yang konsisten dalam jangka
                      menengah hingga panjang melalui sistem perdagangan komoditas dan derivatif
                      yang tidak sepenuhnya berkorelasi dengan pasar tradisional. Sistem dibangun
                      dengan kombinasi analisis fundamental dan kuantitatif.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-amber-300 tracking-wide mb-1">
                      PENDEKATAN INVESTASI
                    </h4>
                    <p className="leading-relaxed text-gray-300">
                      Strategi menggunakan teknik algo-trading adaptif untuk kondisi trending maupun
                      sideways. Sistem dapat menggabungkan posisi long dan short, menyesuaikan
                      ukuran posisi, dan menutup posisi secara dinamis berdasarkan tren, volatilitas,
                      dan pola pergerakan harga.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-amber-300 tracking-wide mb-1">
                      MANAJEMEN RISIKO
                    </h4>
                    <p className="leading-relaxed text-gray-300">
                      Manajemen risiko diterapkan melalui pembatasan drawdown, pengaturan ukuran lot
                      yang disiplin, serta parameter proteksi otomatis seperti stop loss dinamis dan
                      pengurangan eksposur saat volatilitas meningkat.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-1">
                  <h4 className="text-[11px] font-semibold text-amber-300 tracking-wide mb-1">
                    RANGKUMAN PORTOFOLIO
                  </h4>
                  <Row label="Tanggal Peluncuran" value="Jan 2023" />
                  <Row label="Frekuensi Berlangganan" value="Per 3 Bulan" />
                  <Row label="Biaya Berlangganan" value="USD 60" />
                  <Row label="Biaya Manajemen" value="Gratis" />
                  <Row label="Biaya Kinerja" value="25%" />
                  <Row label="Penarikan Profit" value="Bulanan" />
                  <Row label="Biaya Penarikan" value="Gratis" />
                  <Row label="Master Copy Portofolio" value="GOLD-ATM" />
                  <Row label="Periode Penguncian" value="N/A" />
                  <Row label="Jenis Akun" value="Master Copier" />
                </div>
              </div>

              {/* Performance + narasi */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-1">
                  <h4 className="text-[11px] font-semibold text-amber-300 tracking-wide mb-2">
                    PERFORMANCE STATISTICS
                  </h4>
                  <Row
                    label="Total Pengembalian Kumulatif"
                    value="253.6%"
                    valueClass="text-green-400"
                  />
                  <Row
                    label="Pengembalian Tahunan (compound)"
                    value="33.8%"
                    valueClass="text-green-400"
                  />
                  <Row
                    label="Pengembalian Bulanan Rata-rata"
                    value="7.68%"
                    valueClass="text-green-400"
                  />
                  <Row label="Bulan Terbaik" value="22.3%" valueClass="text-green-400" />
                  <Row label="Bulan Terburuk" value="-16.2%" valueClass="text-red-400" />
                  <p className="text-[10px] text-gray-500 mt-2">
                    Angka di atas bersifat ilustratif berdasarkan track record internal dan dapat
                    berubah seiring waktu. Kinerja historis tidak menjamin kinerja di masa depan.
                  </p>
                </div>

                <div className="text-gray-300 leading-relaxed">
                  <h4 className="text-[11px] font-semibold text-amber-300 tracking-wide mb-2">
                    APA ARTINYA BAGI ANDA?
                  </h4>
                  <p className="mb-2">
                    GOLD-ATM dirancang sebagai alternatif investasi berbasis algo trading yang
                    transparan dan terukur. Anda tidak perlu melakukan entry–exit manual, tetapi
                    tetap dapat memantau laporan performa secara berkala.
                  </p>
                  <p className="mb-2">
                    Fokus utama adalah pertumbuhan modal jangka menengah–panjang dengan disiplin
                    risk management, bukan skema cepat kaya. Cocok untuk investor yang ingin
                    diversifikasi ke aset berbasis sistem.
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Peringatan Risiko: Trading di instrumen derivatif memiliki risiko tinggi. Nilai
                    investasi dapat naik maupun turun. Pastikan Anda memahami risiko sebelum
                    berinvestasi.
                  </p>
                </div>
              </div>

              {/* Historical Performance */}
              <div>
                <h4 className="text-[11px] font-semibold text-amber-300 tracking-wide mb-2">
                  HISTORICAL PERFORMANCE (%)
                </h4>
                <div className="overflow-x-auto border border-slate-800 rounded-lg text-[11px]">
                  <table className="min-w-full text-center border-collapse">
                    <thead className="bg-slate-900">
                      <tr>
                        <th className="px-2 py-2 border border-slate-800">Tahun</th>
                        {[
                          'Jan',
                          'Feb',
                          'Mar',
                          'Apr',
                          'Mei',
                          'Jun',
                          'Jul',
                          'Aug',
                          'Sep',
                          'Okt',
                          'Nov',
                          'Des',
                          'All',
                        ].map((m) => (
                          <th key={m} className="px-2 py-2 border border-slate-800">
                            {m}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-slate-950">
                        <td className="px-2 py-2 border border-slate-800 font-semibold">2025</td>
                        {[
                          '3,41%',
                          '10,85%',
                          '8,76%',
                          '5,66%',
                          '0,36%',
                          '9,88%',
                          '5,41%',
                          '3,67%',
                          '9,28%',
                          '17,17%',
                          '-16,2%',
                          '–',
                          '58,25%',
                        ].map((v, i) => (
                          <td
                            key={i}
                            className={`px-2 py-2 border border-slate-800 ${
                              v.startsWith('-')
                                ? 'text-red-400'
                                : i === 12
                                ? 'text-green-400 font-semibold'
                                : 'text-gray-100'
                            }`}
                          >
                            {v}
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-slate-900/70">
                        <td className="px-2 py-2 border border-slate-800 font-semibold">2024</td>
                        {[
                          '12,5%',
                          '14,3%',
                          '19,6%',
                          '13,7%',
                          '-1,2%',
                          '9,5%',
                          '-6,5%',
                          '11,2%',
                          '15,8%',
                          '-4,2%',
                          '1,2%',
                          '10,2%',
                          '85,9%',
                        ].map((v, i) => (
                          <td
                            key={i}
                            className={`px-2 py-2 border border-slate-800 ${
                              v.startsWith('-')
                                ? 'text-red-400'
                                : i === 12
                                ? 'text-green-400 font-semibold'
                                : 'text-gray-100'
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
            <div className="px-6 pb-4 sm:pb-5 flex justify-end border-t border-slate-800 bg-slate-900/70">
              <button
                type="button"
                onClick={() => setShowATMModal(false)}
                className="px-5 py-2.5 rounded-lg border border-slate-700 text-gray-200 text-sm hover:border-amber-400 hover:text-amber-300 transition"
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
