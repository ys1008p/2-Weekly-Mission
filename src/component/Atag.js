import AtagImg from "./AtagImg";
function Atag({
  href = "",
  target = "",
  rel = "",
  name = "",
  className = "",
  contents = "",
}) {
  return (
    <>
      {name === "" || null ? (
        <a href={href} target={target} rel={rel} className={className}>
          {contents}
        </a>
      ) : (
        <a href={href} target={target} rel={rel}>
          <AtagImg name={name} className={className} />
        </a>
      )}
    </>
  );
}
export default Atag;
