import { useAuth } from "@/hooks/use-auth";
import Account from "../common/Account";
import Logo from "../common/Logo";
import SigninCTA from "../common/SigninCTA";

export default function FolderNB() {
  const isLoggedIn = useAuth();

  return (
    <div className="h-[6.8rem] w-full bg-u-skyblue tablet:h-[9.4rem]">
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
