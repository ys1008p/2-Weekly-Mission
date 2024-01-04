import { useEffect } from 'react';

const useOutsideClick = (ref, closePopover) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closePopover();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, closePopover]);
};

export default useOutsideClick;
