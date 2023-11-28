import useIconQuery from "@/queries/use-icon-query";

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
 * @param {{name: keyof(ICON_MATCHER)} & React.HTMLAttributes<HTMLImageElement>} props
 * @returns
 */
export default function Icon({ name, ...props }) {
  // const iconURL = `${baseURL}/${ICON_MATCHER[name]}`;

  const icon = useIconQuery(ICON_MATCHER[name]);

  // return <img src={iconURL} alt={`${name} 아이콘`} {...props} />;
  return <span dangerouslySetInnerHTML={{ __html: icon }} {...props} />;
}
