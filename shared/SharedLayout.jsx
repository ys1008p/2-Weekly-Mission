import Layout from "./Layout";
import FolderOwner from "./_components/FolderOwner";

export default function SharedLayout({ children }) {
  const folder = {
    owner: {
      thumbnail: "",
      name: "@코드잇",
    },
    name: "⭐️ 즐겨찾기",
  };

  return (
    <Layout heroHeader={<HeroHeader folder={folder} />}>{children}</Layout>
  );
}

function HeroHeader({ folder }) {
  return (
    <div className="pb-[6rem] pt-[2rem]">
      <div className="tablet:gap-[2rem] mx-auto flex w-max flex-col items-center gap-[1rem]">
        <FolderOwner
          thumbnail={folder.owner.thumbnail}
          name={folder.owner.name}
        />
        <h2 className="tablet:text-[4rem] text-center text-[3.2rem] font-semibold">
          {folder.name}
        </h2>
      </div>
    </div>
  );
}
