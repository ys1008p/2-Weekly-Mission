import './Cta.css';

export default function Cta({ children, isShort }) {
  const ctaSize = isShort ? 'short' : 'long';
  return <div className={`Cta ${ctaSize}`}>{children}</div>;
}
