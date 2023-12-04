import shareIcon from '../assets/share.svg';
import penIcon from '../assets/pen.svg';
import deleteIcon from '../assets/delete.svg';
import '../styles/FolderTitle.css';
import { ALL_FOLDER } from '../constants/constants';

const optionItems = [
  {
    id : 0,
    icon : shareIcon,
    name : '공유'
  },
  {
    id : 1,
    icon : penIcon,
    name : '이름 변경'
  },
  {
    id : 2,
    icon : deleteIcon,
    name : '삭제'
  }
]

const Option = ({ icon, name }) => {
  return (
    <button className='option--item'>
      <img src={icon} alt={`${name} 아이콘`} className='option--icon'/>
      <p className='option--name'>{name}</p>
    </button>
  )
};

const FolderTitle = ({ folders, activeFolder }) => {
  const selectedFolder = activeFolder === 0 ? ALL_FOLDER : folders?.find((folder) => folder.id === activeFolder);

  return (
    <div className='folder-title--container'>
      <p className='folder-title'>{selectedFolder?.name}</p>
      {activeFolder !== 0 &&
        <div className='option--container'>
          {optionItems.map((option) => <Option key={option.id} icon={option.icon} name={option.name}/>)}
        </div>
      }
    </div>
  )
};

export default FolderTitle;
