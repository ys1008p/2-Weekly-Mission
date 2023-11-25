import Icon from "./Icon";
import Profile from "./Profile";

export default function FolderOwner({ thumbnail, name }) {
  return (
    <Profile className="tablet:gap-[1.2rem] flex flex-col items-center">
      {thumbnail ? (
        <Profile.Thumbnail
          src={thumbnail}
          className="flex items-center justify-center rounded-full"
        />
      ) : (
        <div className="bg-u-purple-70 tablet:w-[6rem] tablet:h-[6rem] flex h-[4rem] w-[4rem] items-center justify-center rounded-full">
          <Icon
            name="smile"
            aria-hidden
            className="tablet:w-[2.8rem] tablet:h-[2.8rem] h-[1.8rem] w-[1.8rem]"
          />
        </div>
      )}
      <Profile.Name
        name={name}
        className="text-u-gray-100 tablet:text-[1.6rem] text-[1.4rem]"
      />
    </Profile>
  );
}
