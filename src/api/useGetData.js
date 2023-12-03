import { axiosBaseURL } from "./axiosBaseURL";
import { useState, useEffect } from "react";

const useGetData = (url) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const getInfo = async () => {
    setUserData({});
    setLoading(true);

    try {
      const res = await axiosBaseURL.get(url);
      setUserData(res.data);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return { userData, loading };
};

export { useGetData };
