import Profile from "/src/_component/common/Profile";
import { useUser } from "/src/_hook/use-user";

export default function Account() {
  const account = useUser();
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
