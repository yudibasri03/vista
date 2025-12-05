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
    <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="inline-flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-700 p-2">
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wide text-amber-400">
          {tagline}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
        {title}
      </h3>

      <p className="text-sm text-gray-300 mb-4">
        {description}
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
            Cocok untuk
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
            {targetAudience.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
            Yang Anda Dapatkan
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
            {features.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3">
        {onPrimaryClick ? (
          <button
            type="button"
            onClick={onPrimaryClick}
            className={`
              inline-flex justify-center items-center
              px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold
              bg-gradient-to-r ${bgGradient}
              text-slate-950
              hover:opacity-90 transition
            `}
          >
            {ctaPrimary}
          </button>
        ) : (
          <a
            href={primaryWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex justify-center items-center
              px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold
              bg-gradient-to-r ${bgGradient}
              text-slate-950
              hover:opacity-90 transition
            `}
          >
            {ctaPrimary}
          </a>
        )}

        {ctaSecondary && (
          <a
            href={secondaryWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex justify-center items-center
              px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium
              border border-slate-700 text-gray-200
              hover:border-amber-400 hover:text-amber-300
              transition
            "
          >
            {ctaSecondary}
          </a>
        )}
      </div>
    </article>
  );
}
