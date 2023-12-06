import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import FolderUser from '../../components/FolderUser'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SearchBar from '../../components/SearchBar'
import useAsync from '../../hook/useAsync'
import CardList from './cardList/CardList'
import '../../components/root.css'

function SharedPage() {
  const [cardList, setCardList] = useState([])
  const [profileImg, setProfileImg] = useState(null)
  const [profileEmail, setProfileEmail] = useState('')
  const [folderUserProfile, setFolderUserProfile] = useState(null)
  const [folderUserName, setFolderUserName] = useState('')
  const [folderName, setFolderName] = useState('')

  const [getProfileSample] = useAsync('/sample/user', '', '', '')
  const [getFolderSample] = useAsync('/sample/folder', '', '', '')

  const handleLoadProfile = async () => {
    const { email, profileImageSource } = await getProfileSample()
    setProfileImg(profileImageSource)
    setProfileEmail(email)
  }

  const handleLoadFolder = async () => {
    const { folder } = await getFolderSample()
    const { links } = folder
    setFolderName(folder.name)
    setFolderUserName(folder?.owner?.name)
    setFolderUserProfile(folder?.owner?.profileImageSource)
    setCardList(links)
  }

  const handleMouseOver = (e) => e.currentTarget.classList.add('active')

  const handleMouseOut = (e) => e.currentTarget.classList.remove('active')

  useEffect(() => {
    handleLoadProfile()
    handleLoadFolder()
  }, [])

  return (
    <>
      <Helmet>
        <title>SharedPage</title>
      </Helmet>
      <div className="container">
        <header>
          <Nav profileEmail={profileEmail} profileImg={profileImg} />
          <FolderUser
            folderName={folderName}
            folderUserName={folderUserName}
            folderUserProfile={folderUserProfile}
          />
        </header>
        <div className="main">
          <SearchBar />
          <div className="card">
            <ul>
              <CardList
                links={cardList}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
            </ul>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default SharedPage
