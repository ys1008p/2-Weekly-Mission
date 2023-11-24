interface SnsProps {
  url: string;
  icon: string;
  altText: string;
}

function Sns({ url, icon, altText }: SnsProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={icon} alt={altText} />
    </a>
  );
}

export default Sns;
