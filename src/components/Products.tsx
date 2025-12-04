// src/components/Products.tsx
import ProductCard from './ProductCard';
import { GraduationCap, TrendingUp, Cpu, Star } from 'lucide-react';

export default function Products() {
  const products = [
    // … (isi sama persis seperti yang sudah kamu punya, versi terakhir yang kita tweak)
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pilih Jalur yang Cocok dengan Anda
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Setiap produk dirancang untuk level dan kebutuhan yang berbeda. Pilih yang paling sesuai dengan kondisi Anda saat ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-slate-800/90 border-l-4 border-amber-500 rounded-lg">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            <span className="font-semibold text-white">Catatan Penting:</span> Algo trading bukan
            mesin uang instan. Tetap ada risiko. Fokus kami adalah sistem yang terukur dan
            transparan. Slot VIP Membership dibatasi agar komunitas tetap kondusif.
          </p>
        </div>
      </div>
    </section>
  );
}
