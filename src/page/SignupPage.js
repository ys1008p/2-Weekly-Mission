import { Helmet } from 'react-helmet';
import UserInput from '../components/UserInput';
import SignButton from '../components/SignButton';
import JoinSns from '../components/JoinSns';
import JoinLink from '../components/JoinLink';
import styled from 'styled-components';

const Container = styled.div`
/* max-width: 400px;
  margin: 0 auto; */
`

function SignupPage() {
  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <Container>
        <JoinLink />
        <UserInput />
        <SignButton />
        <JoinSns />
      </Container>
    </>
  );
}

export default SignupPage;
