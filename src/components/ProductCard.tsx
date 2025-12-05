import { LucideIcon } from 'lucide-react';

type ProductCardProps = {
  icon: LucideIcon;
  tagline: string;
  title: string;
  description: string;
  targetAudience: string[];
  features: string[];
  ctaPrimary?: string;
  ctaSecondary?: string;
  bgGradient: string;
  iconColor: string;
  onPrimaryClick?: () => void;   // 🔹 tambahkan
  onSecondaryClick?: () => void; // 🔹 optional kalau nanti dipakai
};

export default function ProductCard({
  icon: Icon,
  tagline,
  title,
  description,
  targetAudience,
  features,
  ctaPrimary,
  ctaSecondary,
  bgGradient, // (belum dipakai di wrapper, bisa nanti untuk variant bg)
  iconColor,
  onPrimaryClick,
  onSecondaryClick,
}: ProductCardProps) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-amber-500/10 transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
            {tagline}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Content lists */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="text-xs font-semibold text-gray-400 tracking-wider mb-2">
            COCOK UNTUK
          </h4>
          <ul className="text-sm text-gray-300 space-y-1.5">
            {targetAudience.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-400 tracking-wider mb-2">
            YANG ANDA DAPATKAN
          </h4>
          <ul className="text-sm text-gray-300 space-y-1.5">
            {features.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-4">
        {ctaPrimary && (
          <button
            type="button"
            onClick={onPrimaryClick}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-sm transition-colors"
          >
            {ctaPrimary}
          </button>
        )}
        {ctaSecondary && (
          <button
            type="button"
            onClick={onSecondaryClick}
            className="px-6 py-3 rounded-xl border border-slate-600 text-gray-100 text-sm hover:bg-slate-800 transition-colors"
          >
            {ctaSecondary}
          </button>
        )}
      </div>
    </div>
  );
}
