import { useState } from "react";

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  console.log(`start: ${pending}`);
  const wrappedFunction = async (...args) => {
    try {
      setPending(true);
      console.log(`try: ${pending}`);
      return await asyncFunction(...args);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  console.log(`end: ${pending}`);
  return [pending, error, wrappedFunction];
}

export default useAsync;
