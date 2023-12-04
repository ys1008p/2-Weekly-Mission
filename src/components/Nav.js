import '../styles/Nav.css'
import Avatar from './Avatar.js'
import SigninButton from './SigninButton.js'
import logoImg from '../images/logo.svg'

function Nav({ userProfile, isSignin }) {

  return (
    <nav className="nav">
      <h1 className="logo">
        <a className="link-home" href="/">
          <img className="image-logo" src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
      </h1>
      <div className="auth">
        {isSignin ? <Avatar userProfile={userProfile} /> : <SigninButton />}
      </div>
    </nav>
  )
}

export default Nav