// UserInfoLoader.js
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
  const infoLoad = async () => {
    let infoLoadResult;
    try {
      infoLoadResult = await getUserInfo();

      setUserInfo(infoLoadResult);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  const SharedFolder = async () => {
    let folderInfoResult;
    try {
      folderInfoResult = await getSharedFolder();
      const { folder } = folderInfoResult;
      setSharedFolderInfo(folder);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  const FolderInfo = async () => {
    try {
      const { data } = await getFolder();
      setFolderInfo(data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  const FolderListLoad = async () => {
    try {
      const { data } = await getUserFolderList();

      setUserFolderList(data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    infoLoad();
    SharedFolder();
    FolderInfo();
    FolderListLoad();
  }, []);

  return { userInfo, sharedFolderInfo, folderInfo, userFolderList };
};

export default InfoLoader;
