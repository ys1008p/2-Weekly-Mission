import { useEffect, useState } from "react";
import {
  getUserInfo,
  getFolder,
  getUserFolderList,
  getSharedFolder,
} from "../api";

const InfoLoader = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [folderInfo, setFolderInfo] = useState([]);
  const [userFolderList, setUserFolderList] = useState([]);
  const [sharedFolderInfo, setSharedFolderInfo] = useState({});
  const fetchData = async () => {
    try {
      const [
        userInfoResult,
        sharedFolderResult,
        folderInfoResult,
        userFolderListResult,
      ] = await Promise.all([
        getUserInfo(),
        getSharedFolder(),
        getFolder(),
        getUserFolderList(),
      ]);

      setUserInfo(userInfoResult);
      setSharedFolderInfo(sharedFolderResult.folder);
      setFolderInfo(folderInfoResult.data);
      setUserFolderList(userFolderListResult.data);
    } catch (err) {
      console.log(err);

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { userInfo, sharedFolderInfo, folderInfo, userFolderList };
};

export default InfoLoader;
