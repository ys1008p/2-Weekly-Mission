import './AddLinkBar.css';
import linkIcon from './link.svg';
import CTA from '../CTA';
export default function AddLinkBar() {
  return (
    <div className="AddLinkBar__container">
      <div className="AddLinkBar">
        <img src={linkIcon}></img>
        <input className="AddLinkBar__input" placeholder="링크를 추가해보세요" />
        <CTA />
      </div>
    </div>
  );
}
