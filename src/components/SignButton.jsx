import styled from 'styled-components';
import useAsync from '../hook/useAsync';
import { rules } from 'eslint-config-prettier';
import { getValue } from '@testing-library/user-event/dist/utils';

const BtnBox = styled.div`
  margin: 3rem 0 0;

  button {
    display: block;
    width: 100%;
    padding: 1.6rem 2rem;
    border: 0;
    border-radius: 0.8rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.1rem;
    cursor: pointer;
    color: var(--gray-f5f5);
    background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  }
`;

function SignButton({ signup }) {
  const handleClick = async () => {
    try {
      const USER_INFO = {
        email: 'test@codeit.com',
        password: 'sprint101',
      };
      const response = await fetch(
        'https://bootcamp-api.codeit.kr/api/sign-in',
        {
          method: 'POST',
          body: JSON.stringify(USER_INFO),
        }
      );

      const { email, password } = USER_INFO;
      // if(value.email === email && value.password === password){
      //   window.location.href="../../page/FolderPage.js";
      // }

      if (!response.ok) throw new Error('로그인 정보가 일치하지 않습니다');
    } catch (error) {
      console.log(error);
    }
  };
}

export default SignButton;
