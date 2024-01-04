import Icon from "@/components/common/Icon";
import Profile from "@/components/common/Profile";

interface Props {
	thumbnail: string;
	name: string;
}

export default function FolderOwner({ thumbnail, name }: Props) {
	return (
		<Profile className="flex flex-col items-center tablet:gap-[1.2rem]">
			{thumbnail ? (
				<Profile.Thumbnail
					src={thumbnail}
					className="flex aspect-square h-[4rem] items-center justify-center rounded-full object-cover tablet:h-[6rem]"
				/>
			) : (
				<div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-u-purple-70 tablet:h-[6rem] tablet:w-[6rem]">
					<Icon
						name="smile"
						aria-hidden
						className="h-[1.8rem] w-[1.8rem] tablet:h-[2.8rem] tablet:w-[2.8rem]"
					/>
				</div>
			)}
			<Profile.Name
				name={name}
				className="text-[1.4rem] text-u-gray-100 tablet:text-[1.6rem]"
			/>
		</Profile>
	);
}
