// src/components/Products.tsx
import { useState } from 'react';
import ProductCard from './ProductCard';
import { GraduationCap, TrendingUp, Cpu, Star, X } from 'lucide-react';

export default function Products() {
  const [showAcademyModal, setShowAcademyModal] = useState(false);

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
      ctaPrimary: 'Daftar Prop Challenge Vista',
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
              // Hanya card pertama (Vista Academy) yang buka modal kurikulum
              onPrimaryClick={index === 0 ? () => setShowAcademyModal(true) : undefined}
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

      {/* MODAL KURIKULUM VISTA ACADEMY */}
      {showAcademyModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4">
          <div className="max-w-4xl w-full bg-slate-950 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
            {/* Header modal */}
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

            {/* Isi modal: dua paket */}
            <div className="px-6 py-5 sm:py-6 space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 gap-4">
              {/* Paket Intermediate */}
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

              {/* Paket Elite */}
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

            {/* CTA bawah modal */}
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
    </section>
  );
}
