import styled from "styled-components";


export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 6rem;
  background-color: var(--linkbrary-backgroundgray);
  width: 100%;
  @media (max-width: 1199px){
    padding: 4rem 3.2rem 6rem
  }
  @media (max-width: 767px){
    padding: 2rem 3.2rem 4rem;
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 106rem;
  @media (max-width: 1124px){
    max-width: 70.4rem;
  }
  @media (max-width: 767px){
    max-width: 33rem;
  }
`

export const CardListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem 2rem;
  margin-top: 4rem;
  @media (max-width: 1124px){
    gap: 2.4rem;
  }
`