const ICON_MATCHER = {
  smile: "smile",
  facebook: "facebook",
  twitter: "twitter",
  youtube: "youtube",
  instagram: "instagram",
  search: "searchbar",
  logo: "logo",
  profile: "profile",
};

/**
 *
 * @param {{name: keyof(ICON_MATCHER), baseURL?: string} & React.HTMLAttributes<HTMLImageElement>} props
 * @returns
 */
export default function Icon({
  name,
  baseURL = "https://res.cloudinary.com/divjslgco/image/upload/f_auto,q_auto/v1/codeit/icons",
  ...props
}) {
  const iconURL = `${baseURL}/${ICON_MATCHER[name]}`;

  return <img src={iconURL} alt={`${name} 아이콘`} {...props} />;
}
