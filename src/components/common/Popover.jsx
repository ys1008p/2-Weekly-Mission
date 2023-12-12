import { useClickOutside } from "@/hooks/common/use-click-outside";
import { useToggle } from "@/hooks/common/use-toggle";
import { createContext, useContext } from "react";

export const PopoverContext = createContext(false);
export const PopoverActionContext = createContext(() => {});

function Popover({ children }) {
  const [popped, toggle] = useToggle();

  return (
    <PopoverContext.Provider value={popped}>
      <PopoverActionContext.Provider value={toggle}>
        {children}
      </PopoverActionContext.Provider>
    </PopoverContext.Provider>
  );
}

function Trigger({ type = "button", onClick = () => {}, children, ...props }) {
  const T = type;
  const popped = useContext(PopoverContext);
  const toggle = useContext(PopoverActionContext);

  const handleTriggerClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
    onClick(e);
  };

  return (
    <T data-on={popped} onClick={handleTriggerClick} {...props}>
      {children}
    </T>
  );
}

function Board({ children, options, ...props }) {
  const popped = useContext(PopoverContext);
  const toggle = useContext(PopoverActionContext);
  const clickOutsideTarget = useClickOutside(
    () => {
      toggle();
    },
    { dispatchCondition: popped },
  );

  const { closeWhenClickOutside } = options;
  const boardRef = closeWhenClickOutside ? clickOutsideTarget : null;

  return popped ? (
    <div ref={boardRef} {...props}>
      {children}
    </div>
  ) : null;
}

export default Object.assign(Popover, {
  Trigger,
  Board,
});
