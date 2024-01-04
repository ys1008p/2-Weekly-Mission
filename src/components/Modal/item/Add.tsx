import React from "react";
import { modalItem } from "styles/modal/item";
function Add() {
  return (
    <>
      <modalItem.Title>폴더 추가</modalItem.Title>
      <modalItem.Input placeholder="내용 입력" />
      <modalItem.Button>추가하기</modalItem.Button>
    </>
  );
}

export default Add;
