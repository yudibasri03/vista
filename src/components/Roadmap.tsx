export default function Roadmap() {
  const journeySteps = [
    {
      id: 1,
      label: "Build",
      title: "Belajar di Vista Academy",
      description: "Belajar di Vista Academy dan temukan metode trading milik kamu sendiri.",
      dotColor: "bg-blue-400",
      dotShadow: "shadow-blue-500/50",
    },
    {
      id: 2,
      label: "Prove",
      title: "Program Tantangan",
      description: "Uji metode trading dengan disiplin dan pengelolaan strategis adalah metode terbaik.",
      dotColor: "bg-cyan-400",
      dotShadow: "shadow-cyan-500/50",
    },
    {
      id: 3,
      label: "Grow",
      title: "Trader Professional",
      description: "Menjadi trader professional dan memiliki portofolio yang terukur.",
      dotColor: "bg-green-400",
      dotShadow: "shadow-green-500/50",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex items-center justify-center gap-12">
          {/* Label "Trader" */}
          <div className="flex-shrink-0">
            <h3 className="text-4xl font-bold text-white">Trader</h3>
          </div>

          {/* Timeline */}
          <div className="flex-1 max-w-4xl relative">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400"></div>

            {/* Steps */}
            <div className="relative flex justify-between items-center">
              {journeySteps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center"
                  style={{ width: 'calc(100% / 3)' }}
                >
                  {/* Top Section - Description */}
                  <div className="mb-8 text-center max-w-[240px]">
                    <h4 className="text-base font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Vertical Line to Dot */}
                  <div className={`w-px h-16 ${step.dotColor}`}></div>

                  {/* Dot */}
                  <div
                    className={`w-6 h-6 ${step.dotColor} rounded-full shadow-xl ${step.dotShadow} ring-4 ring-slate-900 z-10`}
                  ></div>

                  {/* Label below */}
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-white">
                      {step.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="lg:hidden">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Trader</h3>

          <div className="relative pl-12">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-green-400"></div>

            {/* Steps */}
            <div className="space-y-12">
              {journeySteps.map((step) => (
                <div key={step.id} className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute -left-[26px] top-2 w-5 h-5 ${step.dotColor} rounded-full shadow-lg ${step.dotShadow} ring-4 ring-slate-900`}
                  ></div>

                  {/* Content */}
                  <div>
                    <span className="inline-block text-sm font-bold text-white mb-1">
                      {step.label}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
