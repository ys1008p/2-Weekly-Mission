import { useState, useEffect } from "react";
import axios from "axios";
import { FOLDER_PAGE_API_URL } from "../constants/constants";

export function useFolderPageUser(){
  const [user, setUser] = useState();

  const getUser = async() => {
    try{
      const response = await axios.get(`${FOLDER_PAGE_API_URL}/1`);
      setUser(response.data.data[0]);
    } catch(error) {
      alert(error)
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return user;
}

export function useFolderPageFolder(){
  const [folder, setFolder] = useState([]);

  const getFolder = async() => {
    try{
      const response = await axios.get(`${FOLDER_PAGE_API_URL}/1/folders`);
      setFolder(response.data.data);
    } catch(error){
      alert(error)
    }
  }

  useEffect(() => {
    getFolder();
  }, [])

  return folder;
}
