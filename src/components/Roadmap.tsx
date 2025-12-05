import { motion } from "framer-motion";

export default function JourneyRoadmap() {
  const checkpoints = [
    {
      title: "Checkpoint 1 — Vista Academy",
      desc: "Belajar di Vista Academy dan temukan metode trading milik kamu sendiri."
    },
    {
      title: "Checkpoint 2 — Prop Challenge",
      desc: "Uji metode tradingmu dan bangun disiplin di Program Tantangan."
    },
    {
      title: "Checkpoint 3 — Professional Trader",
      desc: "Menjadi trader profesional dengan portofolio terukur."
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Tentukan Perjalanan Finansial dan Pilih ingin jadi seperti apa kamu nantinya
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Dua perjalanan, satu tujuan: berkembang. Tentukan apakah Anda ingin membangun skill 
          untuk menjadi trader profesional, atau mengembangkan portofolio sebagai investor cerdas.
        </p>
      </div>

      {/* LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full h-1 bg-gradient-to-r from-amber-500/30 to-amber-300/50 origin-left"
      />

      {/* CHECKPOINTS */}
      <div className="relative mt-10 flex justify-between items-start px-4 sm:px-16">
        {checkpoints.map((cp, i) => (
          <div key={i} className="text-center w-1/3">
            
            {/* GLOW PULSE DOT */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.3, type: "spring" }}
              className="relative flex justify-center"
            >
              <div className="w-6 h-6 bg-amber-400 rounded-full shadow-lg shadow-amber-500/40" />

              {/* PULSE ANIMATION */}
              <motion.div
                animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute w-10 h-10 bg-amber-300/30 rounded-full"
              />
            </motion.div>

            {/* TEXT */}
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.3 }}
              className="text-lg font-semibold mt-4"
            >
              {cp.title}
            </motion.h4>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.3 }}
              className="text-gray-400 text-sm max-w-xs mx-auto mt-2"
            >
              {cp.desc}
            </motion.p>

          </div>
        ))}
      </div>
    </section>
  );
}
