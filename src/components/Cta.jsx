function Cta({ children, href = '/', className = '', ...props }) {
  const classNames = `cta ${className}`;
  return (
    <a className={classNames} href={href} {...props}>
      {children}
    </a>
  );
}

export default Cta;
