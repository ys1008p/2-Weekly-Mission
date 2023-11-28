import { PATH_HOME } from "@/constants/routes";
import Icon from "@/components/common/Icon";

export default function Logo() {
  return (
    <a href={PATH_HOME}>
      <Icon
        name="logo"
        className="h-[1.6rem] w-[8.7rem] tablet:h-[2.4rem] tablet:w-[13.3rem]"
      />
    </a>
  );
}
