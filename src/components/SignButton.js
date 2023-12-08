import styled from 'styled-components';

const BtnBox = styled.div`
  margin: 30px 0 0;

  button {
    display: block;
    width: 100%;
    padding: 16px 20px;
    border: 0;
    border-radius: 8px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    cursor: pointer;
    color: var(--btn-color);
    background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  }
`;

function SignButton() {
  return (
    <BtnBox>
      <button type="button">회원가입</button>
    </BtnBox>
  )
}

export default SignButton;
