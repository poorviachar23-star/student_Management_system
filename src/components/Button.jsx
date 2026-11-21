
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button"
}) {

  const className = `button ${variant}-button`;

  // If href is provided, display a navigation link.
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
 
  // Otherwise, display a clickable button.
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
