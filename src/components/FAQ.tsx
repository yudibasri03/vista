import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-gray-300">
            Temukan jawaban untuk pertanyaan umum tentang Vista
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-700 rounded-xl overflow-hidden bg-slate-800 shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-700 transition-colors duration-200"
              >
                <span className="font-semibold text-lg text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
