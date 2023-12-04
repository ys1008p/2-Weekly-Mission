import styled from "styled-components"

export const Div = styled.div`
  position: relative;
  max-width: 34rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  background-color: inherit;
  @media (max-width: 767) {
    max-width: 32.5rem;
  }
  `
export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  &:hover {
    z-index: 1;
    transform: scale(1.3, 1.3);
    transition-duration: 0.1s;
  }
  @media (max-width: 767) {
    height: 19.2rem;
  }
`
export const DetailBox= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 0 0 1.5rem 1.5rem;
  text-align: left;
  `
export const ElapsedTime = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: var(--lightgray-text);
  `
export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`
export const CreateDate = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.7rem;
  color: var(--darkgray-text);
`