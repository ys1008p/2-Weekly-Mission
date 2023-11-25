import { useAuth } from "../_hooks/use-auth";
import Account from "./Account";
import LoginCTA from "./LoginCTA";
import Logo from "./Logo";

export default function GNB() {
  const isLoggedIn = useAuth();

  return (
    <>
      <nav className="desktop:max-w-[192rem] tablet:max-w-[calc(86.4rem+(100vw-100%))] desktop:px-[20rem] tablet:h-[9.4rem] fixed top-0 z-50 mx-auto flex h-[6.8rem] w-full items-center justify-between bg-u-skyblue px-[3.2rem]">
        <Logo />
        {isLoggedIn ? (
          <button>
            <Account />
          </button>
        ) : (
          <LoginCTA />
        )}
      </nav>
    </>
  );
}
