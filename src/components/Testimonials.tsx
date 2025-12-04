import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Awalnya sama sekali nggak ngerti SOP trading, sekarang punya aturan jelas dan tau kapan harus berhenti.',
      author: 'Ahmad R.',
      location: 'Bandung',
      role: 'Vista Academy Member'
    },
    {
      text: 'Pakai jalur prop challenge, modal saya jadi bisa scale tanpa harus setor besar. Game changer buat saya.',
      author: 'Budi S.',
      location: 'Jakarta',
      role: 'Prop Challenge Graduate'
    },
    {
      text: 'Sebagai profesional yang sibuk, ATM membantu saya tetap aktif di market tanpa harus nempel di chart 24/7.',
      author: 'Cindy L.',
      location: 'Surabaya',
      role: 'ATM User'
    },
    {
      text: 'VIP membership memberikan perspektif berbeda. Diskusi dengan mentor dan komunitas sangat membantu decision making saya.',
      author: 'Deni P.',
      location: 'Yogyakarta',
      role: 'VIP Member'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Cerita Singkat dari Komunitas Vista
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ribuan trader telah berkembang bersama ekosistem Vista
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-slate-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
