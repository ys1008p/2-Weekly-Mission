import { PATH_SIGNUP } from "@/constants/routes";
import CTA from "@/components/common/CTA";

export default function SignupCTA() {
	return (
		<CTA
			to={PATH_SIGNUP}
			content="링크 추가하기"
			className="flex w-[20rem] items-center justify-center rounded-[0.8rem] bg-gradient-purple-skyblue px-[1.6rem] py-[1rem] text-[1.4rem] font-semibold text-u-white tablet:w-[35rem] tablet:px-[2rem] tablet:py-[1.6rem] tablet:text-[1.8rem]"
		/>
	);
}
