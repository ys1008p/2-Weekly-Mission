import React from "react";
import { modalItem } from "styles/modal/item";

function DeleteFolder() {
  return (
    <>
      <modalItem.Title>폴더 삭제</modalItem.Title>
      <modalItem.SubTitle>폴더명</modalItem.SubTitle>
      <modalItem.Button color="#ff5b56">삭제하기</modalItem.Button>
    </>
  );
}

export default DeleteFolder;
