import React, { useEffect, useState } from 'react';
import { HeaderApi, LoginProfile } from '../api'; 

export default function Header() {
  const [userData, setUserData] = useState(null);
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      const userResponse = await HeaderApi();
      const folderResponse = await LoginProfile();

      setUserData(userResponse);
      setFolderData(folderResponse.folder);
    };

    fetchData();
  }, []); 

  return (
    <div className='HeaderContainer'> 
      {userData && (
        <div className='HeaderBox'>
            <img src={folderData.owner.profileImageSource} alt="유저이미지" className='ImgHeader' />
            <p className='HeaderText'>@{folderData.owner.name}</p>
          <p className='HeaderDescription'>{folderData.name}</p>
        </div>
      )}
    </div>
  );
}

