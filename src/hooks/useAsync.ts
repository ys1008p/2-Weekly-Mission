import { useCallback, useState } from 'react';

type AsyncFunctionType = (...args: any[]) => Promise<any>;

type UseAsyncReturnType = [
  boolean,
  Error | null,
  (...args: any[]) => Promise<any>,
];

const useAsync = (asyncFunction: AsyncFunctionType): UseAsyncReturnType => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const wrappedFunction = useCallback(
    async (...args: any[]) => {
      setLoading(true);
      setError(null);
      try {
        return await asyncFunction(...args);
      } catch (error) {
        const errorObject =
          error instanceof Error ? error : new Error(String(error));
        setError(errorObject);
        return;
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction],
  );

  return [loading, error, wrappedFunction];
};

export default useAsync;
