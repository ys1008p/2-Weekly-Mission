import '../styles/Avatar.css'

function Avatar({ userProfile }) { 
  const { email, profileImageSource } = userProfile
  
  return (
    <a href="/folder" className="avatar avatar-direction-row">
      <div className="avatar-image">
        <img src={profileImageSource} alt="프로필 이미지" />
      </div>
      <span className="avatar-text sm-hidden">{email}</span>
    </a>
  )
}

export default Avatar 