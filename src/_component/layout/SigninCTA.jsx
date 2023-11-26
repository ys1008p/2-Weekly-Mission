import CTA from "/src/_component/common/CTA";

export default function SigninCTA() {
  return (
    <CTA
      to="/auth/signin.html"
      content="로그인"
      className="tablet:w-[12.8rem] tablet:px-[2rem] tablet:py-[1.6rem] tablet:text-[1.8rem] flex w-[8rem] items-center justify-center rounded-[0.8rem] bg-gradient-purple-skyblue px-[1.6rem] py-[1rem] text-[1.4rem] font-semibold text-u-white"
    />
  );
}
