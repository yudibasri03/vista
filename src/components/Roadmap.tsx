export default function Roadmap() {
  const tradersJourney = [
    {
      id: 1,
      label: "Build",
      topTitle: "Coaching",
      topText: "This is a sample text. Insert your desired text. This is a sample text.",
      bottomTitle: "Saving",
      bottomText: "This is a sample text. Insert your desired text. This is a sample text.",
      dotColor: "bg-blue-400",
      dotShadow: "shadow-blue-500/40",
      textColor: "text-blue-300",
    },
    {
      id: 2,
      label: "Prove",
      topTitle: "Investment",
      topText: "This is a sample text. Insert your desired text. This is a sample text.",
      bottomTitle: "Management",
      bottomText: "This is a sample text. Insert your desired text. This is a sample text.",
      dotColor: "bg-cyan-400",
      dotShadow: "shadow-cyan-500/40",
      textColor: "text-cyan-300",
    },
    {
      id: 3,
      label: "Grow",
      topTitle: "Professional",
      topText: "This is a sample text. Insert your desired text. This is a sample text.",
      bottomTitle: "Growth",
      bottomText: "This is a sample text. Insert your desired text. This is a sample text.",
      dotColor: "bg-green-400",
      dotShadow: "shadow-green-500/40",
      textColor: "text-green-300",
    },
  ];

  const investorsJourney = [
    {
      id: 1,
      label: "Plan",
      topTitle: "Strategy",
      topText: "This is a sample text. Insert your desired text. This is a sample text.",
      bottomTitle: "Portfolio",
      bottomText: "This is a sample text. Insert your desired text. This is a sample text.",
      dotColor: "bg-amber-400",
      dotShadow: "shadow-amber-500/40",
      textColor: "text-amber-300",
    },
    {
      id: 2,
      label: "Diversify",
      topTitle: "VIP Group",
      topText: "This is a sample text. Insert your desired text. This is a sample text.",
      bottomTitle: "Algo ATM",
      bottomText: "This is a sample text. Insert your desired text. This is a sample text.",
      dotColor: "bg-orange-400",
      dotShadow: "shadow-orange-500/40",
      textColor: "text-orange-300",
    },
    {
      id: 3,
      label: "Optimize",
      topTitle: "Smart Investor",
      topText: "This is a sample text. Insert your desired text. This is a sample text.",
      bottomTitle: "Wealth",
      bottomText: "This is a sample text. Insert your desired text. This is a sample text.",
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
  <div className="mb-32">
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
          {journey.map((checkpoint) => (
            <div
              key={checkpoint.id}
              className="flex flex-col items-center text-center relative"
              style={{ width: 'calc(100% / 3)', maxWidth: '280px' }}
            >
              {/* TOP SECTION */}
              <div className="mb-12 max-w-[200px]">
                <h4 className="text-lg font-bold text-white mb-3">
                  {checkpoint.topTitle}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {checkpoint.topText}
                </p>
              </div>

              {/* Dot on horizontal line */}
              <div
                className={`w-7 h-7 ${checkpoint.dotColor} rounded-full shadow-lg ${checkpoint.dotShadow} ring-4 ring-slate-950 animate-dot-pulse z-10`}
              />

              {/* BOTTOM SECTION */}
              <div className="mt-12 max-w-[200px]">
                <h4 className="text-lg font-bold text-white mb-3">
                  {checkpoint.bottomTitle}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {checkpoint.bottomText}
                </p>
              </div>
            </div>
          ))}
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
          {journey.map((checkpoint) => (
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
                  {checkpoint.label}
                </span>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  {checkpoint.topTitle}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {checkpoint.topText}
                </p>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  {checkpoint.bottomTitle}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {checkpoint.bottomText}
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
    <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
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
