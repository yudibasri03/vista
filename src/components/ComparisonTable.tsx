export default function ComparisonTable() {
  const data = [
    {
      product: 'Vista Academy',
      target: 'Pemula – Menengah',
      focus: 'Edukasi & pondasi',
      risk: 'Rendah',
      color: 'bg-slate-800 border-slate-700'
    },
    {
      product: 'Prop Challenge',
      target: 'Trader yang sudah punya sistem',
      focus: 'Akses modal & scaling',
      risk: 'Menengah',
      color: 'bg-slate-800 border-slate-700'
    },
    {
      product: 'ATM (Algo)',
      target: 'Sibuk, ingin semi-pasif',
      focus: 'Algo trading & monitoring',
      risk: 'Menengah',
      color: 'bg-slate-800 border-slate-700'
    },
    {
      product: 'VIP Membership',
      target: 'Sudah trading, butuh pendampingan harian',
      focus: 'Signal & live trading',
      risk: 'Menengah–Tinggi',
      color: 'bg-slate-800 border-slate-700'
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pilih Perjalanan-mu
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Biar pengunjung gampang milih jalur yang tepat
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <th className="px-6 py-4 text-left font-semibold text-lg rounded-tl-xl">Produk</th>
                <th className="px-6 py-4 text-left font-semibold text-lg">Cocok Untuk Siapa</th>
                <th className="px-6 py-4 text-left font-semibold text-lg">Fokus Utama</th>
                <th className="px-6 py-4 text-left font-semibold text-lg rounded-tr-xl">Level Risiko</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`${row.color} border-b border-slate-700 hover:shadow-lg hover:border-amber-400 transition-all duration-200`}
                >
                  <td className="px-6 py-5 font-bold text-white border-r border-slate-700">
                    {row.product}
                  </td>
                  <td className="px-6 py-5 text-gray-300 border-r border-slate-700">
                    {row.target}
                  </td>
                  <td className="px-6 py-5 text-gray-300 border-r border-slate-700">
                    {row.focus}
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      row.risk === 'Rendah' ? 'bg-green-500/20 text-green-400' :
                      row.risk === 'Menengah' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {row.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 lg:hidden">
          {data.map((row, index) => (
            <div key={index} className={`${row.color} border rounded-xl p-6 mb-4`}>
              <h3 className="font-bold text-lg text-white mb-3">{row.product}</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-200">Cocok untuk: </span>
                  <span className="text-gray-300">{row.target}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-200">Fokus: </span>
                  <span className="text-gray-300">{row.focus}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-200">Risiko: </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    row.risk === 'Rendah' ? 'bg-green-500/20 text-green-400' :
                    row.risk === 'Menengah' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {row.risk}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
