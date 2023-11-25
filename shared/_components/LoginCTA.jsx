import CTA from "./CTA";

export default function LoginCTA() {
  return (
    <CTA
      to="/auth/signin.html"
      content="로그인"
      className="flex w-[12.8rem] items-center justify-center rounded-[0.8rem] bg-gradient-purple-skyblue px-[2rem] py-[1.6rem] text-[1.8rem] font-semibold text-u-white"
    />
  );
}
