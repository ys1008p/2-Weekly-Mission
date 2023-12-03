import Layout from "@/components/common/Layout";
import SignupCTA from "@/components/common/SignupCTA";
import GNB from "../common/GNB";

export default function HomeLayout({ children }) {
  return (
    <Layout navigationBar={<GNB />} heroHeader={<HeroHeader />}>
      {children}
    </Layout>
  );
}

function HeroHeader() {
  return (
    <div className="mt-[6.3rem] flex flex-col items-center gap-[2.4rem] pt-[2.8rem] tablet:mt-[9.4rem] tablet:gap-[4rem] tablet:pt-[7rem]">
      <h2 className="text-center text-[3.2rem] font-bold leading-[1.4] tablet:text-[6.4rem] tablet:leading-[8rem]">
        <span className="bg-gradient-purple-orange bg-clip-text text-transparent">
          세상의 모든 정보
        </span>
        를
        <br />
        쉽게 저장하고
        <br className="desktop:hidden" />
        {" 관리해 보세요"}
      </h2>
      <SignupCTA />
      <img
        src="https://res.cloudinary.com/divjslgco/image/upload/f_auto,q_auto/v1/codeit/images/hero"
        className="h-[16rem] w-[32.5rem] tablet:h-[34.4rem] tablet:w-[69.8rem] desktop:h-[59rem] desktop:w-[120rem]"
        alt="Linkbrary 서비스 소개"
      />
    </div>
  );
}
