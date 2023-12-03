import styled from 'styled-components';
import TitleArea from './TitleArea';
import { useState } from 'react';

const StyledButton = styled.button`
  background-color: #ffffff;
  border: 1px solid var(--primary-color);
  font-size: 1.6rem;
  border-radius:0.5rem;
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  &:hover{
    background-color:var(--primary-color);
    color: #ffffff;
  }
`;

const ButtonBox = styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 2.4rem;
`

const Buttons =styled.div`
  display:flex;
  justify-content: space-between;
  gap:1.2rem;
`

const AddLink = styled.div`
  color: var(--primary-color);
  border:none;
  font-size:3rem;
`

function Button({folder,setId}){
  const handleChangeID = (folderId) => {
    setId(folderId)
  };
  return(
    <StyledButton onClick={() => handleChangeID(folder.id)}>{folder && folder.name}</StyledButton>
    )
  }
  

function ButtonList({setId,folders}){
    return(
        <>
        <div>
        <ButtonBox>
          <Buttons>
             {folders && folders.map((folder)=>(<Button setId={setId} folder={folder} key={folder.id}/>))}
          </Buttons>
          <AddLink>+</AddLink>
        </ButtonBox>
        </div>
        </>
    )
}

export default ButtonList 