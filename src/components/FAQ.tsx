import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apakah ada jaminan profit?',
      answer: 'Tidak. Trading berisiko dan tidak ada jaminan profit. Vista fokus pada edukasi, sistem, dan pendampingan agar risiko lebih terukur. Kami mengajarkan manajemen risiko yang solid dan strategi konsisten, bukan janji profit instan.'
    },
    {
      question: 'Saya benar-benar pemula, mulai dari mana?',
      answer: 'Paling ideal mulai dari Vista Academy, karena di sana Anda belajar pondasi dan praktek step-by-step. Program ini dirancang khusus untuk pemula yang ingin membangun fondasi trading yang kuat dengan SOP yang jelas.'
    },
    {
      question: 'Apakah produk Vista sudah legal dan diawasi?',
      answer: 'Vista berperan sebagai penyedia edukasi dan pendampingan trading. Dana trading tetap berada di broker terpercaya dan teregulasi. Kami tidak mengelola dana klien, melainkan memberikan sistem, edukasi, dan panduan.'
    },
    {
      question: 'Kalau saya sibuk kerja, program mana yang cocok?',
      answer: 'Kombinasi Algo Trading (ATM) + VIP Membership sangat cocok untuk Anda yang sibuk. ATM menjalankan sistem otomatis, sementara VIP Membership memberikan insight market tanpa harus selalu di depan chart. Atau hubungi tim Vista untuk konsultasi yang lebih personal.'
    },
    {
      question: 'Berapa modal minimum untuk mulai?',
      answer: 'Tergantung jalur yang dipilih. Vista Academy fokus pada edukasi sehingga bisa dimulai dengan modal belajar. Prop Challenge memungkinkan Anda trading dengan modal lebih besar tanpa deposit besar. Tim kami akan membantu merencanakan sesuai budget Anda.'
    },
    {
      question: 'Apakah bisa mengikuti lebih dari satu program?',
      answer: 'Tentu saja! Bahkan kami merekomendasikan kombinasi program untuk hasil maksimal. Misalnya, mulai dengan Vista Academy untuk pondasi, lalu lanjut ke Prop Challenge untuk scaling, sambil bergabung di VIP Membership untuk pendampingan harian.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-gray-300">
            Temukan jawaban untuk pertanyaan umum tentang Vista
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors duration-200"
              >
                <span className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/25 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-white" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-slate-700/50">
                  <div className="pt-4">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
