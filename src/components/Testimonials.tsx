import { Quote, Star } from 'lucide-react';

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
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-amber-400">Testimoni</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Cerita Singkat dari Komunitas Vista
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ribuan trader telah berkembang bersama ekosistem Vista
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-24 h-24 text-amber-500" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-lg text-gray-200 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-500/25">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
