interface SnsButtonProps {
  url: string;
  icon: string;
  altText: string;
}
const SnsButton = ({ url, icon, altText }: SnsButtonProps) => (
  <a href={url} target="_blank" rel="noreferrer">
    <img src={icon} alt={altText} />
  </a>
);

export default SnsButton;
