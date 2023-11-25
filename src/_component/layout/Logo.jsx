import { PATH_HOME } from "/src/_constant/routes";
import Icon from "/src/_component/common/Icon";

export default function Logo() {
  return (
    <a href={PATH_HOME}>
      <Icon
        name="logo"
        className="tablet:h-[2.4rem] tablet:w-[13.3rem] h-[1.6rem] w-[8.7rem]"
      />
    </a>
  );
}
