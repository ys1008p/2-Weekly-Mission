import { useIconQuery } from "@/queries/use-icon-query";

const ICON_MATCHER = {
  smile: "smile",
  facebook: "facebook",
  twitter: "twitter",
  youtube: "youtube",
  instagram: "instagram",
  search: "searchbar",
  logo: "logo",
  profile: "profile",
  link: "link",
  pen: "pen",
  trash: "trash",
  share: "share",
  star: "star",
  kebab: "kebab-more",
  add: "add",
};

/**
 *
 * @param {{name: keyof(ICON_MATCHER)} & React.HTMLAttributes<HTMLImageElement>} props
 * @returns
 */
export default function Icon({ name, ...props }) {
  const icon = useIconQuery(ICON_MATCHER[name]);

  return <span dangerouslySetInnerHTML={{ __html: icon }} {...props} />;
}
