import ReactDOM from 'react-dom/client';
import App from './components/App';
// import SearchBar from './components/SearchBar';
import './styles/Main.css'
// import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
  {/* <div className='Main'>
  <SearchBar />
  </div>
  <Main /> */}
  </>
);



// 로그인같은거 있는거
// https://bootcamp-api.codeit.kr/api/sample/user


// 사진하고 여러개 묶여있는거
// https://bootcamp-api.codeit.kr/api/sample/folder