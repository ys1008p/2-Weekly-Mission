import Layout from "/src/Layout";
import FolderOwner from "./_component/FolderOwner";

export default function SharedLayout({ folder, children }) {
  const { id, name, owner } = folder;

  return (
    <Layout heroHeader={<HeroHeader folder={{ id, name, owner }} />}>
      {children}
    </Layout>
  );
}

function HeroHeader({ folder }) {
  return (
    <div className="pb-[6rem] pt-[2rem]">
      <div className="tablet:gap-[2rem] mx-auto flex w-max flex-col items-center gap-[1rem]">
        <FolderOwner
          thumbnail={folder.owner.profileImageSource}
          name={folder.owner.name}
        />
        <h2 className="tablet:text-[4rem] text-center text-[3.2rem] font-semibold">
          {folder.name}
        </h2>
      </div>
    </div>
  );
}
