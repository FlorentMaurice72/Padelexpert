interface Props {
  href: string;
  label?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export default function CTAButton({
  href,
  label = 'Voir le prix',
  variant = 'primary',
  fullWidth = false,
}: Props) {
  const base = 'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-colors';
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700',
    secondary: 'bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      {label}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}
