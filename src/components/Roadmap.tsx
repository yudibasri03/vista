export default function Roadmap() {
  const tradersJourney = [
    {
      id: 1,
      date: "1",
      title: "Belajar di Vista Academy",
      text: "Belajar di Vista Academy dan temukan metode trading milik kamu sendiri.",
      dotColor: "bg-blue-400",
      dotShadow: "shadow-blue-500/40",
      textColor: "text-blue-300",
    },
    {
      id: 2,
      date: "2",
      title: "Program Tantangan",
      text: "Uji metode tradingmu, bangun disiplin, dan percaya strategi adalah metode terbaik.",
      dotColor: "bg-cyan-400",
      dotShadow: "shadow-cyan-500/40",
      textColor: "text-cyan-300",
    },
    {
      id: 3,
      date: "3",
      title: "Trader Professional",
      text: "Menjadi trader profesional dan memiliki portofolio yang terukur.",
      dotColor: "bg-green-400",
      dotShadow: "shadow-green-500/40",
      textColor: "text-green-300",
    },
  ];

  const investorsJourney = [
    {
      id: 1,
      date: "1",
      title: "Petakan Diversifikasi",
      text: "Petakan arah diversifikasimu sebagai investor yang cerdas.",
      dotColor: "bg-amber-400",
      dotShadow: "shadow-amber-500/40",
      textColor: "text-amber-300",
    },
    {
      id: 2,
      date: "2",
      title: "VIP Group & Algo ATM",
      text: "Mulai dari VIP Group Signal, lanjutkan diversifikasi melalui Algo ATM.",
      dotColor: "bg-orange-400",
      dotShadow: "shadow-orange-500/40",
      textColor: "text-orange-300",
    },
    {
      id: 3,
      date: "3",
      title: "Smart Investor",
      text: "Menjadi smart investor dengan portofolio diversifikasi dari team trader dan algo trading.",
      dotColor: "bg-pink-400",
      dotShadow: "shadow-pink-500/40",
      textColor: "text-pink-300",
    },
  ];

  const HorizontalTimeline = ({
  journey,
  label,
  isTraders,
}: {
  journey: typeof tradersJourney;
  label: string;
  isTraders: boolean;
}) => (
  <div className="mb-24">
    <div className="flex items-center gap-8">
      {/* LABEL DI KIRI – sekarang sejajar garis */}
      <div className="flex-shrink-0 w-32 text-right">
        <h3 className="text-3xl font-bold text-white">{label}</h3>
      </div>

      {/* TIMELINE DI KANAN */}
      <div className="flex-1 relative">
        {/* Garis animasi */}
        <div
          className={`absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 rounded-full origin-left animate-line-grow ${
            isTraders
              ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400"
              : "bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400"
          }`}
        />

        {/* Checkpoints */}
        <div className="relative flex justify-between px-2">
          {journey.map((checkpoint) => (
            <div
              key={checkpoint.id}
              className="flex flex-col items-center w-1/3 text-center"
            >
              <div className="mb-10 min-h-[80px] flex flex-col justify-end">
                <h4 className="text-sm font-semibold text-gray-200 mb-1">
                  {checkpoint.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed px-2">
                  {checkpoint.text}
                </p>
              </div>

              <div
                className={`w-6 h-6 ${checkpoint.dotColor} rounded-full shadow-lg ${checkpoint.dotShadow} ring-4 ring-slate-950 animate-dot-pulse`}
              />

              <div className="mt-3">
                <span
                  className={`text-xs font-bold tracking-wider ${checkpoint.textColor}`}
                >
                  {checkpoint.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header utama */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Tentukan Perjalanan Finansial dan Pilih ingin jadi seperti apa kamu nantinya
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Dua perjalanan, satu tujuan: berkembang. Tentukan apakah Anda ingin membangun skill
            untuk menjadi trader profesional, atau mengembangkan portofolio sebagai investor cerdas.
          </p>
        </div>

        {/* Trader Journey */}
        <HorizontalTimeline
          journey={tradersJourney}
          label="Trader"
          isTraders={true}
        />

        {/* Investor Journey */}
        <HorizontalTimeline
          journey={investorsJourney}
          label="Investor"
          isTraders={false}
        />
      </div>

      {/* Dekorasi background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
    </section>
  );
}
