import React from "react";
import { info } from "styles/pageInfo";
import { ReactComponent as LinkIcon } from "assets/icons/link.svg";

const FolderInfo = () => {
  return (
    <info.Wrapper>
      <info.FolderInputContainer>
        <LinkIcon />
        <info.FolderInput placeholder="링크를 추가해 보세요." />
        <info.FolderInputButton>
          <span>추가하기</span>
        </info.FolderInputButton>
      </info.FolderInputContainer>
    </info.Wrapper>
  );
};

export default FolderInfo;
