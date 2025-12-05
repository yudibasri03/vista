export default function Roadmap() {
  const tradersJourney = [
    {
      id: 1,
      number: "Checkpoint Pertama",
      title: "Belajar di Vista Academy",
      description: "Belajar di Vista Academy dan temukan trading metode milik kamu sendiri.",
      color: "from-blue-400 to-cyan-400",
      dotColor: "bg-blue-400",
      dotShadow: "shadow-blue-500/40"
    },
    {
      id: 2,
      number: "Checkpoint Kedua",
      title: "Program Tantangan",
      description: "Ujilah metode yang sudah kamu miliki di Program tantangan, dan percaya strategi mu adalah metode terbaik untuk berperang dalam dinamika market.",
      color: "from-cyan-400 to-green-400",
      dotColor: "bg-cyan-400",
      dotShadow: "shadow-cyan-500/40"
    },
    {
      id: 3,
      number: "Checkpoint Ketiga",
      title: "Trader Professional",
      description: "Selamat anda sudah menjadi Trader Professional dan memiliki portofolio terukur.",
      color: "from-green-400 to-emerald-400",
      dotColor: "bg-green-400",
      dotShadow: "shadow-green-500/40"
    }
  ];

  const investorsJourney = [
    {
      id: 1,
      number: "Checkpoint Pertama",
      title: "Petakan Diversifikasi",
      description: "Petakan arah diversifikasi mu sebagai Investor",
      color: "from-amber-400 to-orange-400",
      dotColor: "bg-amber-400",
      dotShadow: "shadow-amber-500/40"
    },
    {
      id: 2,
      number: "Checkpoint Kedua",
      title: "VIP Group Signal",
      description: "VIP Group Signal sebagai awal dari retail investor, lanjutkan diversikasi di Algo ATM untuk diversifikasi Investasi Modal kamu",
      color: "from-orange-400 to-pink-400",
      dotColor: "bg-orange-400",
      dotShadow: "shadow-orange-500/40"
    },
    {
      id: 3,
      number: "Checkpoint Ketiga",
      title: "Smart Investor",
      description: "Selamat anda sudah menjadi Smart Investor, memiliki diversifikasi Portofolio dari Team Trader dan Algo Trading",
      color: "from-pink-400 to-rose-400",
      dotColor: "bg-pink-400",
      dotShadow: "shadow-pink-500/40"
    }
  ];

  const JourneyTrack = ({ journey, title, isTraders }: { journey: typeof tradersJourney; title: string; isTraders: boolean }) => (
    <div className="flex-1">
      <h3 className={`text-2xl font-bold mb-12 text-center ${isTraders ? "text-blue-400" : "text-amber-400"}`}>
        {title}
      </h3>

      <div className="relative">
        {/* Vertical line */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 ${isTraders ? "bg-gradient-to-b from-blue-400 via-cyan-400 to-green-400" : "bg-gradient-to-b from-amber-400 via-orange-400 to-pink-400"}`} />

        {/* Checkpoints */}
        <div className="space-y-16">
          {journey.map((checkpoint, index) => (
            <div key={checkpoint.id} className="relative">
              {/* Dot */}
              <div className="flex justify-center mb-6">
                <div className={`relative z-10`}>
                  <div className={`w-5 h-5 ${checkpoint.dotColor} rounded-full shadow-lg ${checkpoint.dotShadow} ring-4 ring-slate-950`} />
                </div>
              </div>

              {/* Content card */}
              <div className={`ml-8 p-6 rounded-lg backdrop-blur-sm border ${isTraders ? "bg-blue-950/20 border-blue-400/20 hover:border-blue-400/50" : "bg-amber-950/20 border-amber-400/20 hover:border-amber-400/50"} transition-all duration-300`}>
                <span className={`text-xs font-bold tracking-wider ${isTraders ? "text-blue-300" : "text-amber-300"}`}>
                  {checkpoint.number}
                </span>
                <h4 className="text-xl font-bold text-white mt-2 mb-3">
                  {checkpoint.title}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {checkpoint.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Tentukan Perjalanan Finansial dan Pilih ingin jadi seperti apa kamu nantinya
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Dua perjalanan, satu tujuan: berkembang. Tentukan apakah Anda ingin membangun skill untuk menjadi trader profesional, atau mengembangkan portofolio sebagai investor cerdas.
          </p>
        </div>

        {/* Two Journey Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <JourneyTrack journey={tradersJourney} title="Traders Journey" isTraders={true} />
          <JourneyTrack journey={investorsJourney} title="Investors Journey" isTraders={false} />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
    </section>
  );
}
