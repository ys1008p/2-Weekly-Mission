import { useGetData } from "../api/useGetData";
import userIcon from "../assets/userIcon.png";

const SignInButton = () => (
  <a className="signin" href="#">
    로그인
  </a>
);

const UserInfo = () => {
  const { userData } = useGetData("/sample/user");
  const { email } = userData;

  return (
    <div className="user">
      <img src={userIcon} alt="profileImage" />
      <p>{email}</p>
    </div>
  );
};

const User = () => {
  const isSignIn = localStorage.getItem("accessToken");

  return isSignIn ? <SignInButton /> : <UserInfo />;
};

export { User };
