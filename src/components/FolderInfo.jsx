import React from "react";
import avatar from "assets/images/Avatar.png";
import { info } from "assets/styles/PageInfo";
import infoIcon from "assets/icons/link.svg";

const FolderInfo = ({ path, folder }) => {
  return (
    <info.Wrapper>
      {path === "/shared" ? (
        <>
          <info.SharedAvatar
            className="profileImg"
            src={folder?.owner.profileImageSource || avatar}
            alt="avatar"
          />
          <info.SharedOwner>{folder?.owner.name || "@codeit"}</info.SharedOwner>
          <info.SharedFolder>
            {folder?.name || "⭐️ 즐겨찾기"}
          </info.SharedFolder>
        </>
      ) : (
        <info.FolderInputContainer>
          <img src={infoIcon} alt={"link"} />
          <info.FolderInput placeholder="링크를 추가해 보세요." />
          <info.FolderInputButton>
            <span>추가하기</span>
          </info.FolderInputButton>
        </info.FolderInputContainer>
      )}
    </info.Wrapper>
  );
};

export default FolderInfo;
