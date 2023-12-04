import '../styles/Footer.css'
import facebookImg from '../images/icon_facebook.png'
import twitterImg from '../images/icon_twitter.png'
import youtubeImg from '../images/icon_youtube.png'
import instagramImg from '../images/icon_instagram.png'

function Footer() { 
  return (
    <footer className="footer">
      <div className="container">
        <span className="copyright">
          ©codeit - 2023
        </span>
        <div className="footer-info">
          <a className="privacy" href="/privacy">Privacy Policy</a>
          <a className="faq" href="/faq">FAQ</a>
        </div>
        <div className="footer-sns">
          <a href="https://www.facebook.com/">
            <img className="image" src={facebookImg} alt="페이스북" target="_blank" />
          </a>
          <a href="https://twitter.com/">
            <img className="image" src={twitterImg} alt="트위터" target="_blank" />
          </a>
          <a href="https://www.youtube.com/">
            <img className="image" src={youtubeImg} alt="유튜브" target="_blank" />
          </a>
          <a href="https://www.instagram.com/">
            <img className="image" src={instagramImg} alt="인스타그램" target="_blank" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer