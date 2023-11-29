import axios from 'axios';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { API_URL } from './constants/constants';
import { useEffect, useState } from 'react';
import Folder from './components/Folder';

const INITIAL_USER_VALUE = {
  email:'',
  id:0,
  name:'',
  profileImageSource:''
};
const INITIAL_FOLDER_VALUE = {
  links:[],
  name:'',
  owner: {
    name:'',
    profileImageSource:''
  }
};

function App() {
  const [user, setUser] = useState(INITIAL_USER_VALUE);
  const [folder, setFolder] = useState(INITIAL_FOLDER_VALUE);

  const getUser = async() => {
    try{
      const response = await axios.get(`${API_URL}/user`);
      const user = await response.data;
      setUser(user);
    } catch(error) {
      alert(error)
      setUser(INITIAL_USER_VALUE);
    }
  }

  const getData = async() => {
    try{
      const response = await axios.get(`${API_URL}/folder`);
      const { folder } = await response.data;
      setFolder(folder);
    } catch(error) {
      alert(error)
      setFolder(INITIAL_FOLDER_VALUE);
    }
  }
  
  useEffect(() => {
    getUser();
    getData()
  },[])

  return (
    <div className="App">
      <Nav profile={user}/>
      <Folder owner={folder.owner} name={folder.name} links={folder.links}></Folder>
      <Footer/>
    </div>
  );
}

export default App;
