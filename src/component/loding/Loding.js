import "./Loding.css";
import Spinner from "./Spinner";

function Loding() {
  return (
    <div className="background">
      <p className="lodingText">잠시만 기다려 주세요.</p>
      <Spinner />
    </div>
  );
}

export default Loding;
