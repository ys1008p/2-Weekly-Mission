import { ShardData } from "utils/type";
import { info } from "styles/pageInfo";
import avatar from "assets/images/Avatar.png";

interface SharedInfoProps {
  folder: ShardData | null;
}

const SharedInfo: React.FC<SharedInfoProps> = ({ folder }) => {
  return (
    <info.Wrapper>
      <info.SharedAvatar className="profileImg" src={folder?.owner.profileImageSource || avatar} alt="avatar" />
      <info.SharedOwner>{folder?.owner.name || "@codeit"}</info.SharedOwner>
      <info.SharedFolder>{folder?.name || "⭐️ 즐겨찾기"}</info.SharedFolder>
    </info.Wrapper>
  );
};

export default SharedInfo;
