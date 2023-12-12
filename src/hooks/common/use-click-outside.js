import { useEffect, useRef } from "react";

export const useClickOutside = (onClickOutside, options = {}) => {
  const target = useRef(null);
  const callback = useRef(onClickOutside);
  const { dispatchCondition = true } = options;

  useEffect(() => {
    if (!dispatchCondition) return () => {};

    const handler = (e) => {
      const el = target.current;
      if (el && !el.contains(e.target)) {
        callback.current(e);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [dispatchCondition]);

  return target;
};
