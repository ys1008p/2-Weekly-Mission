import Icon from "/src/_component/common/Icon";
import Profile from "/src/_component/common/Profile";
import { useUser } from "/src/_hook/use-user";

export default function Account() {
  const account = useUser();

  return account ? (
    <Profile className="flex items-center gap-[0.6rem]">
      {account.profileImageSource ? (
        <Profile.Thumbnail
          src={account.profileImageSource}
          className="h-[2.8rem] w-[2.8rem] rounded-full"
        />
      ) : (
        <Icon name="profile" className="h-[2.8rem] w-[2.8rem] rounded-full" />
      )}
      <Profile.Name
        name={account.email}
        className="hidden text-[1.4rem] text-u-gray-100 tablet:block"
      />
    </Profile>
  ) : (
    <div></div>
  );
}
