export default function Roadmap() {
  const milestones = [
    {
      id: 1,
      date: "MID OF Q4 2021",
      color: "from-cyan-400 to-cyan-500",
      dotColor: "bg-cyan-400",
      dotShadow: "shadow-cyan-500/40",
      title: "Concept",
      items: [
        "EVM support for parthians",
        "SubQuery Academy",
        "Proof of indexing"
      ]
    },
    {
      id: 2,
      date: "MID OF Q5 2022",
      color: "from-red-400 to-red-500",
      dotColor: "bg-red-400",
      dotShadow: "shadow-red-500/40",
      title: "Research",
      position: "top",
      items: [
        "SubQuery Builders/Grants Program",
        "SQT Network contract internal MVP",
        "Coordinator and client SDK"
      ]
    },
    {
      id: 3,
      date: "MID OF Q6 2023",
      color: "from-amber-400 to-amber-500",
      dotColor: "bg-amber-400",
      dotShadow: "shadow-amber-500/40",
      title: "App Beta Test",
      items: [
        "Public testnet launch",
        "SubQuery Network Explorer and dApp",
        "Point-in-time indexing"
      ]
    },
    {
      id: 4,
      date: "MID OF Q7 2024",
      color: "from-green-400 to-green-500",
      dotColor: "bg-green-400",
      dotShadow: "shadow-green-500/40",
      title: "Token Test",
      position: "top",
      items: [
        "SQT token generation event",
        "Public incentivize testnet launch",
        "Data traffic insights and reporting"
      ]
    },
    {
      id: 5,
      date: "MID OF Q8 2024",
      color: "from-blue-400 to-blue-500",
      dotColor: "bg-blue-400",
      dotShadow: "shadow-blue-500/40",
      title: "Alpha Test",
      items: [
        "Launch of the SubQuery Foundation",
        "Finalise research for other Layer-1 chains",
        "Liquidity mining program"
      ]
    },
    {
      id: 6,
      date: "MID OF Q9 2024",
      color: "from-amber-400 to-amber-500",
      dotColor: "bg-amber-400",
      dotShadow: "shadow-amber-500/40",
      title: "Benefits",
      position: "top",
      items: [
        "Mainnet launch",
        "Centralized exchange launch",
        "Public incentivize testnet"
      ]
    },
    {
      id: 7,
      date: "MID OF Q10 2024",
      color: "from-pink-400 to-pink-500",
      dotColor: "bg-pink-400",
      dotShadow: "shadow-pink-500/40",
      title: "Operational",
      items: [
        "SubQuery launches its own parthian",
        "SubQuery Foundation"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Bigtech Strategy And<br />
            Project <span className="text-blue-400">Plan</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 transform -translate-y-1/2" />

          {/* Milestones container */}
          <div className="relative flex justify-between gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className="flex-1 flex flex-col items-center relative group"
              >
                {/* Top content (for alternating layout) */}
                {milestone.position === "top" && (
                  <div className="mb-20 text-center">
                    <div className="mb-4 inline-block">
                      <span className={`text-xs font-bold tracking-wider bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-1.5">
                      {milestone.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-slate-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Dot marker */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className={`w-5 h-5 ${milestone.dotColor} rounded-full shadow-lg ${milestone.dotShadow} ring-4 ring-slate-950`} />
                </div>

                {/* Bottom content (for alternating layout) */}
                {milestone.position !== "top" && (
                  <div className="mt-20 text-center">
                    <div className="mb-4 inline-block">
                      <span className={`text-xs font-bold tracking-wider bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-1.5">
                      {milestone.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-slate-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
    </section>
  );
}
