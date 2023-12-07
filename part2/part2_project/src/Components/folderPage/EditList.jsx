import { Children } from "react";
import penImg from "../../img/pen.svg";
import shardImg from "../../img/share.svg";
import deleteImg from "../../img/trashCan.svg";
import styled from "styled-components";

const EditBox = styled.section`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin: 1.5rem 0;
`;

const EditButtons = styled.article`
  display: flex;
  gap: 0.25rem;
  color: var(--linkbrary-gray-60, #9FA6B2);
  font-size: 14px;
  font-weight: 600;
  }
`;

export default function EditList() {
  return (
    <EditBox>
      <EditButtons>
        <img src={shardImg} alt="공유하기" />
        <p>공유</p>
      </EditButtons>
      <EditButtons>
        <img src={penImg} alt="이름 변경" />
        <p>이름 변경</p>
      </EditButtons>
      <EditButtons>
        <img src={deleteImg} alt="삭제하기" />
        <p>삭제</p>
      </EditButtons>
    </EditBox>
  );
}
