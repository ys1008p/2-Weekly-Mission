import Profile from "./Profile";

export default function Account({ thumbnail, name }) {
  const defaultThumbnail =
    "https://res.cloudinary.com/divjslgco/image/upload/f_auto,q_auto/v1/codeit/icons/profile";

  return (
    <Profile className="flex items-center gap-[0.6rem]">
      <Profile.Thumbnail
        src={thumbnail ? thumbnail : defaultThumbnail}
        className="h-[2.8rem] w-[2.8rem] rounded-full"
      />
      <Profile.Name
        name={name}
        className="text-u-gray-100 tablet:block hidden text-[1.4rem]"
      />
    </Profile>
  );
}
