export default function Roadmap() {
  const tradersJourney = [
    {
      id: 1,
      date: "Checkpoint Pertama",
      title: "Belajar di Vista Academy",
      items: [
        "Belajar di Vista Academy",
        "Temukan trading metode milik kamu sendiri"
      ],
      dotColor: "bg-blue-400",
      dotShadow: "shadow-blue-500/40",
      textColor: "text-blue-400"
    },
    {
      id: 2,
      date: "Checkpoint Kedua",
      title: "Program Tantangan",
      items: [
        "Ujilah metode trading kamu",
        "Bangun disiplin dalam strategi",
        "Percaya strategi adalah metode terbaik"
      ],
      dotColor: "bg-cyan-400",
      dotShadow: "shadow-cyan-500/40",
      textColor: "text-cyan-400"
    },
    {
      id: 3,
      date: "Checkpoint Ketiga",
      title: "Trader Professional",
      items: [
        "Menjadi Trader Professional",
        "Memiliki portofolio terukur"
      ],
      dotColor: "bg-green-400",
      dotShadow: "shadow-green-500/40",
      textColor: "text-green-400"
    }
  ];

  const investorsJourney = [
    {
      id: 1,
      date: "Checkpoint Pertama",
      title: "Petakan Diversifikasi",
      items: [
        "Petakan arah diversifikasi mu",
        "Sebagai Investor yang cerdas"
      ],
      dotColor: "bg-amber-400",
      dotShadow: "shadow-amber-500/40",
      textColor: "text-amber-400"
    },
    {
      id: 2,
      date: "Checkpoint Kedua",
      title: "VIP Group Signal",
      items: [
        "VIP Group Signal launch",
        "Awal dari retail investor",
        "Lanjutkan diversifikasi di Algo ATM"
      ],
      dotColor: "bg-orange-400",
      dotShadow: "shadow-orange-500/40",
      textColor: "text-orange-400"
    },
    {
      id: 3,
      date: "Checkpoint Ketiga",
      title: "Smart Investor",
      items: [
        "Menjadi Smart Investor",
        "Diversifikasi dari Team Trader",
        "Dan Algo Trading"
      ],
      dotColor: "bg-pink-400",
      dotShadow: "shadow-pink-500/40",
      textColor: "text-pink-400"
    }
  ];

  const HorizontalTimeline = ({ journey, label, isTraders }: { journey: typeof tradersJourney; label: string; isTraders: boolean }) => (
    <div className="mb-20">
      <div className="flex items-center gap-8">
        {/* Label */}
        <div className="flex-shrink-0 w-24">
          <div className={`text-4xl font-black tracking-wider ${isTraders ? "text-red-500" : "text-amber-400"}`}>
            {label}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex-1 relative">
          {/* Horizontal line */}
          <div className={`absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 ${isTraders ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400" : "bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400"}`} />

          {/* Checkpoints */}
          <div className="relative flex justify-between">
            {journey.map((checkpoint, index) => (
              <div key={checkpoint.id} className="flex-1 flex flex-col items-center">
                {/* Top content */}
                <div className="text-center mb-12 w-full px-2">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    {checkpoint.title}
                  </h4>
                  <ul className="text-xs text-gray-400 space-y-0.5">
                    {checkpoint.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1 justify-center">
                        <span className="text-gray-600 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dot marker */}
                <div className={`w-5 h-5 ${checkpoint.dotColor} rounded-full shadow-lg ${checkpoint.dotShadow} ring-4 ring-slate-950 relative z-10 flex-shrink-0`} />

                {/* Bottom content */}
                <div className="text-center mt-6">
                  <div className={`text-xs font-bold tracking-wider ${checkpoint.textColor}`}>
                    {checkpoint.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Tentukan Perjalanan Finansial dan Pilih ingin jadi seperti apa kamu nantinya
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Dua perjalanan, satu tujuan: berkembang. Tentukan apakah Anda ingin membangun skill untuk menjadi trader profesional, atau mengembangkan portofolio sebagai investor cerdas.
          </p>
        </div>

        {/* Journey Timelines */}
        <HorizontalTimeline journey={tradersJourney} label="TRADER" isTraders={true} />
        <HorizontalTimeline journey={investorsJourney} label="INVESTOR" isTraders={false} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
    </section>
  );
}
