import LinkInfoCardList from "./_component/LinkInfoCardList";
import SearchBar from "/src/_component/common/SearchBar";
import SharedLayout from "/src/shared/SharedLayout";
import useFolderQuery from "/src/_query/folder/use-folder-query";
import useUserQuery from "/src/_query/user/use-user-query";

export default function Page() {
  const folder = useFolderQuery();
  useUserQuery();

  return (
    <SharedLayout folder={folder}>
      <main className="flex flex-col items-center gap-[3.2rem] px-[3.2rem] pb-[6rem] pt-[2rem] tablet:gap-[4rem] tablet:pb-[10rem] tablet:pt-[4rem]">
        <section className="w-full max-w-[106rem]">
          <SearchBar />
        </section>
        <section className="w-full max-w-[106rem]">
          <LinkInfoCardList linkInfoList={folder.links} />
        </section>
      </main>
    </SharedLayout>
  );
}
