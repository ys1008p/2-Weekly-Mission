import './CardList.css';
export default function CardList({ links }) {
  return (
    <div>
      <ul className="CardList">
        {links.map((item) => {
          return (
            <li key={item.id} className="Card">
              <div className="Card-thumbnail">
                <img src={item.imageSource} alt="링크 썸네일" />
              </div>
              <div>
                <div>{item.createdAt}</div>
                <div>{item.description}</div>
                <div>{item.createdAt}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
