import styled from 'styled-components';

const InputModalLayout = styled.div`
  width: 36rem;
  padding: 4rem 3.2rem;
  border: 1px solid black;
  background-color: #ffffff;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid rgba(204, 213, 227, 1);
   
  & div {
    padding: 0.5rem 0.85rem;
    border-radius: 100%;
    background-color: #e7effb;
    color: #9fa6b2;
    border: none;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  & h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
  }

  & input{
    width: 100%;
   padding: 1.8rem 1.5rem;
   border-radius: 0.8rem;
    border: 0.1rem solid rgba(109, 106, 254, 1);
    margin-bottom: 1.5rem;
  }

  & button{
    width: 100%;
    padding: 1.6rem;
    border-radius: 0.8rem;
    color: white;
    font-weight: 600;
    background-image: linear-gradient(90deg, rgba(109, 106, 254, 1), rgba(106, 227, 254, 1));
    border: none;

  }
`;

function InputModal() {
  return (
    <InputModalLayout>
    <div>x</div>
      <h3>폴더 이름 변경</h3>
      <button>변경하기</button>
    </InputModalLayout>
  );
}

export default InputModal;
