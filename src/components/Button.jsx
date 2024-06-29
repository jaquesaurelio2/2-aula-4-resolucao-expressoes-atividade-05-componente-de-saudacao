export default function Button({ disabled, secondary, children }) {
  const secondaryClass = secondary ? "buttonSecondary" : "";
  return (
    <button className={`button ${secondaryClass}`} disabled={disabled}>
      {children}
    </button>
  );
}
