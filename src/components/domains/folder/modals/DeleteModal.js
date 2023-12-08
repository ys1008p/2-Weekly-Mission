import styled from 'styled-components';

const DeleteModalLayout = styled.div`
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
    padding: 0.5rem 0.8rem;
    border-radius: 100%;
    background-color: #e7effb;
    color: #9fa6b2;
    border: none;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    font-weight: 700;
  }

  & h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  & p{
  font-size: 1.4rem;
  color: rgba(159, 166, 178, 1);
  margin-bottom: 2.4rem;
  }

  & button{
    width: 100%;
    padding: 1.6rem;
    border-radius: 0.8rem;
    color: white;
    font-weight: 600;
    background-color: rgba(255, 91, 86, 1);
    border: none;

  }
`;

function DeleteModal() {
  return (
    <DeleteModalLayout>
      <div>X</div>
      <h3>폴더 삭제</h3>
      <p>폴더명</p>
      <button>삭제하기</button>
    </DeleteModalLayout>
  );
}

export default DeleteModal;
