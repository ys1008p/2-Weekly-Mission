import "../css/Nav.css";
import logo from "../assets/logo.svg";
import myprofile from "../assets/myprofile.svg";

export default function Nav({ items }) {
  return (
    <nav>
      <div className="navCenter">
        <div className="navBarRight">
          <a href="/">
            <img src={logo} alt="Linkbary logo" />
          </a>
        </div>
        <div className="navBarLeft">
          {items ? (
            <>
              <span>
                <img src={myprofile} />
              </span>
              <p>{items.email}</p>
            </>
          ) : (
            <a href="signin.html">로그인</a>
          )}
        </div>
      </div>
    </nav>
  );
}
