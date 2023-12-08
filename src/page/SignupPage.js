import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import UserInput from '../components/UserInput';
import SignButton from '../components/SignButton';
import JoinSns from '../components/JoinSns';
import JoinLink from '../components/JoinLink';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--main-bg-color);
`;

const Wrap = styled.div`
  width: 40rem;
`;

function SignupPage() {
  const [signup, setSignup] = useState('');
  const [focus, setFocus] = useState('');
  const [focusOut, setFocusOut] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const handleFocus = (e) => setFocus(e.target);

  const handleFocusOut = (e) => setFocusOut(e.target);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    setSignup('signup');
  }, []);

  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <Container>
        <Wrap>
          <JoinLink signup={signup} />
          <UserInput
            signup={signup}
            values={values}
            focus={focus}
            focusOut={focusOut}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleFocusOut}
          />
          <SignButton signup={signup} />
          <JoinSns />
        </Wrap>
      </Container>
    </>
  );
}

export default SignupPage;
