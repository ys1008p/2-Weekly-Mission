import LinkInfoCardList from "./_components/LinkInfoCardList";
import SearchBar from "./_components/SearchBar";
import SharedLayout from "/shared/SharedLayout";
import useFolderQuery from "./_hooks/use-folder-query";
import useUserQuery from "./_hooks/use-user-query";

export default function Page() {
  const folder = useFolderQuery();
  useUserQuery();

  return folder ? (
    <SharedLayout folder={folder}>
      <main className="tablet:gap-[4rem] tablet:pt-[4rem] tablet:pb-[10rem] flex flex-col items-center gap-[3.2rem] px-[3.2rem] pb-[6rem] pt-[2rem]">
        <section className="w-full max-w-[106rem]">
          <SearchBar />
        </section>
        <section className="w-full max-w-[106rem]">
          <LinkInfoCardList linkInfoList={folder.links} />
        </section>
      </main>
    </SharedLayout>
  ) : (
    <div></div>
  );
}
