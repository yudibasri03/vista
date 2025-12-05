import { motion } from "framer-motion";

export default function Roadmap() {
  const tradersJourney = [
    {
      id: 1,
      label: "Learn",
      title: "Belajar di Vista Academy",
      desc: "Belajar di Vista Academy dan temukan metode trading milikmu sendiri.",
      dotColor: "bg-blue-400",
      dotShadow: "shadow-blue-500/40",
    },
    {
      id: 2,
      label: "Validate",
      title: "Program Tantangan",
      desc: "Uji metode tradingmu, bangun disiplin, dan percaya strategi yang kamu miliki.",
      dotColor: "bg-cyan-400",
      dotShadow: "shadow-cyan-500/40",
    },
    {
      id: 3,
      label: "Perform",
      title: "Trader Professional",
      desc: "Menjadi trader profesional dengan portofolio terukur.",
      dotColor: "bg-green-400",
      dotShadow: "shadow-green-500/40",
    },
  ];

  const investorsJourney = [
    {
      id: 1,
      label: "Plan",
      title: "Petakan Diversifikasi",
      desc: "Petakan arah diversifikasimu sebagai investor cerdas.",
      dotColor: "bg-amber-400",
      dotShadow: "shadow-amber-500/40",
    },
    {
      id: 2,
      label: "Automate",
      title: "VIP Group & Algo ATM",
      desc: "Mulai dari VIP Group Signal, lanjutkan diversifikasi melalui Algo ATM.",
      dotColor: "bg-orange-400",
      dotShadow: "shadow-orange-500/40",
    },
    {
      id: 3,
      label: "Grow",
      title: "Smart Investor",
      desc: "Menjadi smart investor dengan portofolio dari trader & algo trading.",
      dotColor: "bg-pink-400",
      dotShadow: "shadow-pink-500/40",
    },
  ];

  const HorizontalTimeline = ({
    label,
    journey,
    gradient,
  }: {
    label: string;
    journey: any[];
    gradient: string;
  }) => (
    <div className="mb-24 w-full">
      {/* SECTION LABEL - PREMIUM */}
      <div className="flex items-center gap-3 mb-8">
        <div className={`w-10 h-[3px] rounded-full ${gradient}`} />
        <h3
          className={`text-3xl font-extrabold bg-clip-text text-transparent ${gradient}`}
        >
          {label}
        </h3>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative w-full pt-16">
        {/* LINE ANIMATION */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`origin-left absolute top-1/2 left-0 right-0 h-[4px] rounded-full ${gradient}`}
        />

        {/* CHECKPOINTS */}
        <div className="relative flex justify-between w-full">
          {journey.map((c) => (
            <div
              key={c.id}
              className="flex flex-col items-center text-center w-1/3"
            >
              {/* Title */}
              <h4 className="text-base font-semibold text-white mb-1">
                {c.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed mb-10">
                {c.desc}
              </p>

              {/* DOT WITH PULSE */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={`w-6 h-6 rounded-full ${c.dotColor} shadow-lg ${c.dotShadow} ring-4 ring-slate-950`}
              />

              {/* Label below dot */}
              <div className="text-sm text-gray-300 font-bold mt-3">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Tentukan Perjalanan Finansial dan Pilih ingin jadi seperti apa kamu nantinya
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Dua perjalanan, satu tujuan: berkembang. Tentukan apakah Anda ingin membangun skill untuk menjadi trader profesional, atau mengembangkan portofolio sebagai investor cerdas.
          </p>
        </div>

        {/* TRADER TIMELINE */}
        <HorizontalTimeline
          label="Trader"
          journey={tradersJourney}
          gradient="bg-gradient-to-r from-blue-400 to-cyan-300"
        />

        {/* INVESTOR TIMELINE */}
        <HorizontalTimeline
          label="Investor"
          journey={investorsJourney}
          gradient="bg-gradient-to-r from-amber-400 to-pink-400"
        />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full" />
    </section>
  );
}
