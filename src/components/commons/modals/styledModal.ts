import styled from "styled-components";

export const DeleteModalModalBox = styled.div`
  width: 36rem;
  padding: 4rem 3.2rem;
  border: 1px solid black;
  background-color: #ffffff;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid rgba(204, 213, 227, 1);
  position: relative;

  & h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  & p {
    font-size: 1.4rem;
    color: rgba(159, 166, 178, 1);
    margin-bottom: 2.4rem;
  }

  & button {
    width: 100%;
    padding: 1.6rem;
    border-radius: 0.8rem;
    color: white;
    font-weight: 600;
    background-color: rgba(255, 91, 86, 1);
    border: none;
  }
`;

export const InputModalBox = styled.div`
  width: 36rem;
  padding: 4rem 3.2rem;
  border: 1px solid black;
  background-color: #ffffff;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid rgba(204, 213, 227, 1);
  position: relative;

  & h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
  }

  & input {
    width: 100%;
    padding: 1.8rem 1.5rem;
    border-radius: 0.8rem;
    border: 0.1rem solid rgba(109, 106, 254, 1);
    margin-bottom: 1.5rem;
  }

  & button {
    width: 100%;
    padding: 1.6rem;
    border-radius: 0.8rem;
    color: white;
    font-weight: 600;
    background-image: linear-gradient(
      90deg,
      rgba(109, 106, 254, 1),
      rgba(106, 227, 254, 1)
    );
    border: none;
  }
`;

export const ModalLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
`;
