import React from "react";
import { modalItem } from "styles/modal/item";
function DeleteLink() {
  return (
    <>
      <modalItem.Title>링크 삭제</modalItem.Title>
      <modalItem.SubTitle>https://www.abc.com</modalItem.SubTitle>
      <modalItem.Button color="#ff5b56">삭제하기</modalItem.Button>
    </>
  );
}

export default DeleteLink;
