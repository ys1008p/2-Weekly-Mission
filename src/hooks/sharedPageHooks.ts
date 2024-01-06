import { useEffect, useState } from "react";
import axios from 'axios';
import { SHARED_API_URL } from '../constants/constants';
import { SharedFolderType, UserType } from "../constants/type";

export function useSharedPageUser(){
  const [user, setUser] = useState<UserType>();

  const getUser = async() => {
    try{
      const response = await axios.get(`${SHARED_API_URL}/user`);
      const user = await response.data;
      setUser(user);
    } catch(error) {
      alert(error)
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return user;
}

export function useSharedPageFolder(){
  const [folder, setFolder] = useState<SharedFolderType>();

  const getFolder = async() => {
    try{
      const response = await axios.get(`${SHARED_API_URL}/folder`);
      const { folder } = await response.data;
      setFolder(folder);
    } catch(error) {
      alert(error)
    }
  }

  useEffect(() => {
    getFolder();
  }, []);

  return folder;
}
