import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div>
      <h3>잠시만 기다려주세요.</h3>
      <img src={Spinner} alt="loading spinner" width="10%"></img>
    </div>
  );
}
