export default function ComparisonTable() {
  const data = [
    {
      product: 'Vista Academy',
      target: 'Pemula – Menengah',
      focus: 'Edukasi & pondasi',
      risk: 'Rendah',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      product: 'Prop Challenge',
      target: 'Trader yang sudah punya sistem',
      focus: 'Akses modal & scaling',
      risk: 'Menengah',
      color: 'bg-emerald-50 border-emerald-200'
    },
    {
      product: 'ATM (Algo)',
      target: 'Sibuk, ingin semi-pasif',
      focus: 'Algo trading & monitoring',
      risk: 'Menengah',
      color: 'bg-slate-50 border-slate-200'
    },
    {
      product: 'VIP Membership',
      target: 'Sudah trading, butuh pendampingan harian',
      focus: 'Signal & live trading',
      risk: 'Menengah–Tinggi',
      color: 'bg-amber-50 border-amber-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Perbandingan Produk Vista
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                  className={`${row.color} border-b border-slate-200 hover:shadow-lg transition-shadow duration-200`}
                >
                  <td className="px-6 py-5 font-bold text-slate-900 border-r border-slate-200">
                    {row.product}
                  </td>
                  <td className="px-6 py-5 text-slate-700 border-r border-slate-200">
                    {row.target}
                  </td>
                  <td className="px-6 py-5 text-slate-700 border-r border-slate-200">
                    {row.focus}
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      row.risk === 'Rendah' ? 'bg-green-100 text-green-800' :
                      row.risk === 'Menengah' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-orange-100 text-orange-800'
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
              <h3 className="font-bold text-lg text-slate-900 mb-3">{row.product}</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-slate-700">Cocok untuk: </span>
                  <span className="text-slate-600">{row.target}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Fokus: </span>
                  <span className="text-slate-600">{row.focus}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Risiko: </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    row.risk === 'Rendah' ? 'bg-green-100 text-green-800' :
                    row.risk === 'Menengah' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-orange-100 text-orange-800'
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
