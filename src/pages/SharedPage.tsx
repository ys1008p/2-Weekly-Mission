import SearchBar from "@/components/common/SearchBar";
import SharedLinkCardList from "@/components/shared/SharedLinkCardList";
import SharedLayout from "@/components/shared/SharedLayout";
import { useLoaderData, Await } from "react-router-dom";
import { useUserQuery } from "@/queries/use-user-query";
import { Suspense } from "react";
import { Folder } from "@/types/shared-type";

export default function SharedPage() {
	const { folder } = useLoaderData() as { folder: Folder };
	useUserQuery(1);

	return (
		<Suspense fallback={<div>loading...</div>}>
			<Await resolve={folder} errorElement={<div>Error occured</div>}>
				{({ folder }) => (
					<SharedLayout folder={folder}>
						<main className="flex flex-col items-center gap-[3.2rem] px-[3.2rem] pb-[6rem] pt-[2rem] tablet:gap-[4rem] tablet:pb-[10rem] tablet:pt-[4rem]">
							<section className="w-full max-w-[106rem]">
								<SearchBar />
							</section>
							<section className="w-full max-w-[106rem]">
								<SharedLinkCardList linkInfoList={folder.links} />
							</section>
						</main>
					</SharedLayout>
				)}
			</Await>
		</Suspense>
	);
}
