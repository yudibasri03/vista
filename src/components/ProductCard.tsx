// src/components/ProductCard.tsx
import { ComponentType } from 'react';

interface ProductCardProps {
  icon: ComponentType<{ className?: string }>;
  tagline: string;
  title: string;
  description: string;
  targetAudience: string[];
  features: string[];
  ctaPrimary: string;
  ctaSecondary?: string;
  bgGradient: string;
  iconColor: string;
  onPrimaryClick?: () => void;
  primaryWhatsAppLink?: string;
  secondaryWhatsAppLink?: string;
}

export default function ProductCard(props: ProductCardProps) {
  const {
    icon: Icon,
    tagline,
    title,
    description,
    targetAudience,
    features,
    ctaPrimary,
    ctaSecondary,
    bgGradient,
    iconColor,
    onPrimaryClick,
    primaryWhatsAppLink,
    secondaryWhatsAppLink,
  } = props;

  return (
    <article className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 p-6 sm:p-7 flex flex-col h-full overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative">
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${bgGradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              {tagline}
            </span>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
            <h4 className="text-xs font-bold text-amber-400 uppercase mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
              Cocok untuk
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-200">
              {targetAudience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
            <h4 className="text-xs font-bold text-amber-400 uppercase mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
              Yang Anda Dapatkan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-200">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3">
          {onPrimaryClick ? (
            <button
              type="button"
              onClick={onPrimaryClick}
              className={`relative inline-flex justify-center items-center px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r ${bgGradient} text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 overflow-hidden group/btn`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative">{ctaPrimary}</span>
            </button>
          ) : (
            <a
              href={primaryWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative inline-flex justify-center items-center px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r ${bgGradient} text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 overflow-hidden group/btn`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative">{ctaPrimary}</span>
            </a>
          )}

          {ctaSecondary && (
            <a
              href={secondaryWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-5 py-3 rounded-xl text-sm font-semibold border-2 border-slate-700 text-gray-200 hover:border-amber-500 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300"
            >
              {ctaSecondary}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
