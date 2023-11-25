import Profile from "./Profile";
import useUserQuery from "../_hooks/use-user-query";

export default function Account() {
  const account = useUserQuery();
  const defaultThumbnail =
    "https://res.cloudinary.com/divjslgco/image/upload/f_auto,q_auto/v1/codeit/icons/profile";

  return account ? (
    <Profile className="flex items-center gap-[0.6rem]">
      <Profile.Thumbnail
        src={account.profileImageSource ?? defaultThumbnail}
        className="h-[2.8rem] w-[2.8rem] rounded-full"
      />
      <Profile.Name
        name={account.email}
        className="text-u-gray-100 tablet:block hidden text-[1.4rem]"
      />
    </Profile>
  ) : (
    <div></div>
  );
}
