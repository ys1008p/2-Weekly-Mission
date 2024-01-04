import React, { forwardRef } from "react";
import FolderInput from "./FolderInput";
import { info } from "styles/pageInfo";

const FolderInfo = forwardRef<HTMLDivElement, { isInterSecting: boolean }>(({ isInterSecting }, ref) => {
  return (
    <>
      <info.Wrapper ref={ref}>
        <info.FolderInputContainer $isInterSecting={isInterSecting}>
          <FolderInput />
        </info.FolderInputContainer>
      </info.Wrapper>
    </>
  );
});

export default FolderInfo;
