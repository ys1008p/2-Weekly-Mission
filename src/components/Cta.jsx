function Cta({ href = '/', className = '', children }) {
  const classNames = `cta ${className}`;
  return (
    <a className={classNames} href={href}>
      {children}
    </a>
  );
}

export default Cta;
