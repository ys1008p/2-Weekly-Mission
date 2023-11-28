import Layout from "@/components/common/Layout";
import FolderOwner from "@/components/shared/FolderOwner";

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
      <div className="mx-auto flex w-max flex-col items-center gap-[1rem] tablet:gap-[2rem]">
        <FolderOwner
          thumbnail={folder.owner.profileImageSource}
          name={folder.owner.name}
        />
        <h2 className="text-center text-[3.2rem] font-semibold tablet:text-[4rem]">
          {folder.name}
        </h2>
      </div>
    </div>
  );
}
