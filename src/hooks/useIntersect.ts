import { useCallback, useEffect, useRef } from 'react';

interface Options extends IntersectionObserverInit {
  root?: Element | null;
}

type Callback = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
) => void;

export const useIntersect = (callback: Callback, options: Options) => {
  const ref = useRef(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callback(entry, observer);
      });
    },
    [callback],
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [handleIntersect, options]);

  return ref;
};
