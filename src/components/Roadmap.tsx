export default function Roadmap() {
  const tradersJourney = [
    {
      id: 1,
      date: "Build",
      title: "Belajar di Vista Academy",
      text: "Belajar di Vista Academy dan temukan metode trading milik kamu sendiri.",
      dotColor: "bg-blue-400",
      dotShadow: "shadow-blue-500/40",
      textColor: "text-blue-300",
    },
    {
      id: 2,
      date: "Prove",
      title: "Program Tantangan",
      text: "Uji metode tradingmu, bangun disiplin, dan percaya strategi adalah metode terbaik.",
      dotColor: "bg-cyan-400",
      dotShadow: "shadow-cyan-500/40",
      textColor: "text-cyan-300",
    },
    {
      id: 3,
      date: "Grow",
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
      date: "Plan",
      title: "Petakan Diversifikasi",
      text: "Petakan arah diversifikasimu sebagai investor yang cerdas.",
      dotColor: "bg-amber-400",
      dotShadow: "shadow-amber-500/40",
      textColor: "text-amber-300",
    },
    {
      id: 2,
      date: "Diversify",
      title: "VIP Group & Algo ATM",
      text: "Mulai dari VIP Group Signal, lanjutkan diversifikasi melalui Algo ATM.",
      dotColor: "bg-orange-400",
      dotShadow: "shadow-orange-500/40",
      textColor: "text-orange-300",
    },
    {
      id: 3,
      date: "Optimize",
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
    {/* DESKTOP VIEW */}
    <div className="hidden lg:flex items-center gap-8">
      <div className="flex-shrink-0 w-32 text-right">
        <h3 className="text-3xl font-bold text-white">{label}</h3>
      </div>

      <div className="flex-1 relative">
        <div
          className={`absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 rounded-full origin-left animate-line-grow ${
            isTraders
              ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400"
              : "bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400"
          }`}
        />

        <div className="relative flex justify-between px-4">
          {journey.map((checkpoint, index) => {
            const isTop = index % 2 === 0; // 0, 2 = top; 1 = bottom

            return (
              <div
                key={checkpoint.id}
                className="flex flex-col items-center text-center relative"
                style={{ width: 'calc(100% / 3)', maxWidth: '280px' }}
              >
                {isTop ? (
                  // TEXT DI ATAS
                  <>
                    <div className="mb-8 max-w-[180px]">
                      <span
                        className={`text-xs font-bold tracking-wider block mb-3 ${checkpoint.textColor}`}
                      >
                        {checkpoint.date}
                      </span>
                      <h4 className="text-sm font-semibold text-gray-200 mb-2">
                        {checkpoint.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {checkpoint.text}
                      </p>
                    </div>

                    {/* Vertical Line */}
                    <div className={`w-0.5 h-16 ${checkpoint.dotColor} mb-3`} />

                    {/* Dot */}
                    <div
                      className={`w-6 h-6 ${checkpoint.dotColor} rounded-full shadow-lg ${checkpoint.dotShadow} ring-4 ring-slate-950 animate-dot-pulse`}
                    />
                  </>
                ) : (
                  // TEXT DI BAWAH
                  <>
                    {/* Dot */}
                    <div
                      className={`w-6 h-6 ${checkpoint.dotColor} rounded-full shadow-lg ${checkpoint.dotShadow} ring-4 ring-slate-950 animate-dot-pulse`}
                    />

                    {/* Vertical Line */}
                    <div className={`w-0.5 h-16 ${checkpoint.dotColor} mt-3 mb-8`} />

                    <div className="max-w-[180px]">
                      <span
                        className={`text-xs font-bold tracking-wider block mb-3 ${checkpoint.textColor}`}
                      >
                        {checkpoint.date}
                      </span>
                      <h4 className="text-sm font-semibold text-gray-200 mb-2">
                        {checkpoint.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {checkpoint.text}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>

    {/* MOBILE VIEW */}
    <div className="lg:hidden">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">{label}</h3>

      <div className="relative pl-8">
        {/* Vertical Line */}
        <div
          className={`absolute left-3 top-0 bottom-0 w-1 rounded-full ${
            isTraders
              ? "bg-gradient-to-b from-blue-400 via-cyan-400 to-green-400"
              : "bg-gradient-to-b from-amber-400 via-orange-400 to-pink-400"
          }`}
        />

        {/* Checkpoints */}
        <div className="space-y-12">
          {journey.map((checkpoint, index) => (
            <div key={checkpoint.id} className="relative">
              {/* Dot */}
              <div
                className={`absolute -left-[22px] top-2 w-5 h-5 ${checkpoint.dotColor} rounded-full shadow-lg ${checkpoint.dotShadow} ring-4 ring-slate-950`}
              />

              {/* Content */}
              <div className="pl-4">
                <span
                  className={`inline-block text-xs font-bold tracking-wider ${checkpoint.textColor} mb-2`}
                >
                  {checkpoint.date}
                </span>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  {checkpoint.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {checkpoint.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-amber-400">Perjalanan Anda</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Tentukan Perjalanan Finansial dan Pilih ingin jadi seperti apa kamu nantinya
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Dua perjalanan, satu tujuan: berkembang. Tentukan apakah Anda ingin membangun skill
            untuk menjadi trader profesional, atau mengembangkan portofolio sebagai investor cerdas.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6"></div>
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
    </section>
  );
}
