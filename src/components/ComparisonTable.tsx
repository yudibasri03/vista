// src/components/ComparisonTable.tsx
import { useEffect, useState } from 'react';

export default function ComparisonTable() {
  const data = [
    // ... data sama seperti punyamu
  ];

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Perbandingan Produk Vista
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Biar pengunjung gampang milih jalur yang tepat
          </p>
        </div>

        {isDesktop && (
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Produk</th>
                  <th className="px-4 py-3 text-left font-semibold">Cocok Untuk Siapa</th>
                  <th className="px-4 py-3 text-left font-semibold">Fokus Utama</th>
                  <th className="px-4 py-3 text-left font-semibold">Level Risiko</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="bg-slate-800 border-b border-slate-700">
                    <td className="px-4 py-4 font-semibold text-white">{row.product}</td>
                    <td className="px-4 py-4 text-gray-300">{row.target}</td>
                    <td className="px-4 py-4 text-gray-300">{row.focus}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        row.risk === 'Rendah' ? 'bg-green-500/20 text-green-400'
                        : row.risk === 'Menengah' ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {row.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!isDesktop && (
          <div className="mt-6 space-y-4">
            {data.map((row, index) => (
              <div
                key={index}
                className="bg-slate-800/90 border border-slate-700 rounded-xl p-5"
              >
                <h3 className="font-bold text-lg text-white mb-2">{row.product}</h3>
                <p className="text-sm mb-1">
                  <span className="font-semibold text-gray-200">Cocok: </span>
                  <span className="text-gray-300">{row.target}</span>
                </p>
                <p className="text-sm mb-1">
                  <span className="font-semibold text-gray-200">Fokus: </span>
                  <span className="text-gray-300">{row.focus}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-gray-200">Risiko: </span>
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    row.risk === 'Rendah' ? 'bg-green-500/20 text-green-400'
                    : row.risk === 'Menengah' ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {row.risk}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
