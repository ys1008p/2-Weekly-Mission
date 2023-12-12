import { useContext } from "react";
import Icon from "../common/Icon";
import Popover from "../common/Popover";
import { PopoverActionContext } from "../common/Popover";

export default function CardOptionMenu({ onClickMenuItem = () => {} } = {}) {
  const optionItems = [{ label: "삭제하기" }, { label: "폴더에 추가" }];

  return (
    <Popover>
      <Popover.Trigger className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-[0.5rem] transition-[background] hover:bg-[rgba(0,0,0,0.05)] data-[on=true]:bg-[rgba(0,0,0,0.05)]">
        <Icon name="kebab" />
      </Popover.Trigger>
      <Popover.Board
        options={{
          closeWhenClickOutside: true,
        }}
        className="absolute bottom-[3.2rem] right-[-4rem] z-10 flex flex-col overflow-hidden rounded-[0.5rem] bg-u-white shadow-[0px_2px_8px_0px_rgba(51,50,54,0.10)]"
      >
        <CardOptionMenuContent
          optionItems={optionItems}
          onClickMenuItem={onClickMenuItem}
        />
      </Popover.Board>
    </Popover>
  );
}

function CardOptionMenuContent({ optionItems, onClickMenuItem }) {
  const toggle = useContext(PopoverActionContext);

  const handleCardOptionClick = (e) => {
    onClickMenuItem(e);
    toggle();
  };

  return (
    <menu>
      {optionItems.map((item, i) => (
        <li
          key={`${item.value}-${i}`}
          value={item.value ?? item.label}
          onClick={handleCardOptionClick}
          className="bg-u-white px-[1.2rem] py-[0.8rem] text-[1.4rem] transition-[background] hover:bg-u-gray-10 active:text-u-primary"
        >
          {item.label}
        </li>
      ))}
    </menu>
  );
}
