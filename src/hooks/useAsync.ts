import { useCallback, useState } from 'react';

type AsyncFunctionType = (...args: any[]) => Promise<any>;

const useAsync = (asyncFunction: AsyncFunctionType) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const wrappedFunction = useCallback(
    async (...args: any[]) => {
      setPending(true);
      setError(null);
      try {
        return await asyncFunction(...args);
      } catch (error) {
        const errorObject =
          error instanceof Error ? error : new Error(String(error));
        setError(errorObject);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction],
  );

  return [pending, error, wrappedFunction];
};

export default useAsync;
