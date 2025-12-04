import { ReactNode } from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  tagline: string;
  title: string;
  description: string;
  targetAudience: string[];
  features: string[];
  ctaPrimary: string;
  ctaSecondary?: string;
  bgGradient?: string;
  iconColor?: string;
}

export default function ProductCard({
  icon: Icon,
  tagline,
  title,
  description,
  targetAudience,
  features,
  ctaPrimary,
  ctaSecondary,
  bgGradient = 'from-blue-600 to-cyan-600',
  iconColor = 'text-blue-500'
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className={`bg-gradient-to-r ${bgGradient} p-8 text-white`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <Icon className="w-9 h-9 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white/90 uppercase tracking-wide mb-1">
              {tagline}
            </p>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
        </div>
      </div>

      <div className="p-8">
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          {description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
            Cocok untuk siapa:
          </h4>
          <ul className="space-y-2">
            {targetAudience.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-600">
                <span className={`${iconColor} mt-1`}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
            Highlight Fitur:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-600">
                <span className={`${iconColor} mt-1`}>✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <button className={`group bg-gradient-to-r ${bgGradient} text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}>
            {ctaPrimary}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          {ctaSecondary && (
            <button className="text-slate-600 font-medium px-6 py-3 rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
              {ctaSecondary}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
