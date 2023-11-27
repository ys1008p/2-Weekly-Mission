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
    setState((prevState) => ({ ...prevState, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) =>
        setState((prevState) => ({ ...prevState, data, loading: false }))
      )
      .catch((error) =>
        setState((prevState) => ({ ...prevState, error, loading: false }))
      );
  }

  return [mutation, { ...state }];
};
