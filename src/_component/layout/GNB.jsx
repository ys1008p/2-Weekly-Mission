import { useAuth } from "/src/_hook/use-auth";
import Account from "/src/_component/layout/Account";
import SigninCTA from "/src/_component/layout/SigninCTA";
import Logo from "/src/_component/layout/Logo";

export default function GNB() {
  const isLoggedIn = useAuth();

  return (
    <div className="fixed top-0 z-50 h-[6.8rem] w-full bg-u-skyblue tablet:h-[9.4rem]">
      <nav className="mx-auto flex h-full w-full items-center justify-between bg-u-skyblue px-[3.2rem] tablet:max-w-[calc(86.4rem+(100vw-100%))] desktop:max-w-[192rem] desktop:px-[20rem]">
        <Logo />
        {isLoggedIn ? (
          <button>
            <Account />
          </button>
        ) : (
          <SigninCTA />
        )}
      </nav>
    </div>
  );
}
