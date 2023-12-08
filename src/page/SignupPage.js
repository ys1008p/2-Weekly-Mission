import { Helmet } from 'react-helmet';
import UserInput from '../components/UserInput';
import SignButton from '../components/SignButton';
import JoinSns from '../components/JoinSns';
import JoinLink from '../components/JoinLink';

function SignupPage() {
  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <div className="container">
        <JoinLink />
        <UserInput />
        <SignButton />
        <JoinSns />
      </div>
    </>
  );
}

export default SignupPage;
