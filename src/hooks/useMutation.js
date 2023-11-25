import { useState } from "react";
// POST 요청 처리
// 미완성
export const useMutation = (url) => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null,
  });

  function mutation(data) {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setState((prev) => ({ ...prev, data, loading: false })))
      .catch((error) =>
        setState((prev) => ({ ...prev, error, loading: false }))
      );
  }

  return [mutation, { ...state }];
};
