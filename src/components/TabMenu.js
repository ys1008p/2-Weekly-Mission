function TabMenu({ 
  menu, 
  menuActive, 
  handleClick 
}){
  const All = {
    id: 'all',
    name: '전체',
  }
  const folderNameArr = [...menu];
  folderNameArr.unshift(All);

  const folderName = folderNameArr.map((item) => (
    <li key={item.id}>
      <button type="button" className={menuActive === item.id ? "active" : ""} onClick={() => handleClick(item)}>{item.name}</button>
    </li>
  ))
  return folderName;
}

export default TabMenu;
