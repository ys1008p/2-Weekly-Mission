import styled from "styled-components";

export const AddLinkBar = styled.div`
  background-color: var(--gray-bg-color);
  padding-top: 6rem;
  padding-bottom: 9rem;

  @media (max-width: 1200px) {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
`;
export const AddLinkContainer = styled.div`
  position: relative;
  max-width: 80rem;
  margin: auto;
`;

export const AddLinkInput = styled.input`
  width: 100%;
  padding-left: 5rem;
  height: 6.9rem;
  border-radius: 1.5rem;
  border: 1px solid var(--primary-color);
  color: var(--gray-60-color);
  font-size: 1.6rem;
`;

export const AddLinkButton = styled.button`
  background-image: var(--gradient-purpleblue-skyblue);
  color: var(--white-color);
  border-radius: 0.8rem;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  width: 8.1rem;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 1.6rem;
`;

export const AddLinkImg = styled.img`
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
`;

export const LinkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: start;
  border-radius: 0.8rem;
  padding: 0.8rem;
  width: 26.4rem;
  height: 4rem;

  &:hover,
  &:focus {
    background-color: var(--gray-bg-color);
  }

  span {
    flex: 1;
    color: var(--gray-60-color);
    font-size: 1.4rem;
  }

  img {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const FolderLinkList = styled.div`
  display: flex;
  flex-direction: column;
`;
