"use client"

const Button = ({
  onClick,
  type = "button",
  className = "",
  children,
  variant = "primary",
  size = "md",
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  fullWidth = true,
  disabled = false,
  loading = false,
}) => {
  const base = "inline-flex items-center justify-center rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-2",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-5 py-2.5 text-base gap-2.5",
  };
  const variants = {
    primary:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
    outline:
      "border border-gray-300 text-gray-900 hover:bg-gray-50 focus:ring-gray-300",
    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  };
  const width = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      className={`${base} ${sizes[size] ?? sizes.md} ${variants[variant] ?? variants.primary} ${width} ${className}`}
    >
      {loading ? (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      ) : (
        <>
          {LeadingIcon ? <LeadingIcon className="h-4 w-4" /> : null}
          {children}
          {TrailingIcon ? <TrailingIcon className="h-4 w-4" /> : null}
        </>
      )}
    </button>
  );
};

export default Button;
