import "./Loding.css";
import Spinner from "./LodingSpinner.gif";

const Loding = () => {
  return (
    <div className="background">
      <p className="lodingText">잠시만 기다려 주세요.</p>
      <img src={Spinner} alt="로딩중" width="5%" />
    </div>
  );
};

export default Loding;
