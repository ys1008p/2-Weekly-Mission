import FAB from "../common/FAB";
import Icon from "../common/Icon";

export default function FolderFAB() {
  return (
    <FAB
      content="폴더 추가"
      icon={<Icon name="add" />}
      className="fixed bottom-[3.2rem] z-20 mx-auto flex items-center gap-[0.4rem] rounded-[2rem] bg-u-primary px-[2.4rem] py-[0.8rem] text-[1.6rem] text-u-gray-10 tablet:hidden"
    />
  );
}
