function MainLink({ item }) {
  const { createdAt, url, title, imageSource, description} = item;

  return (
    <li className="card" key={item.id}>
    <a href={url} target="_blank" className="cardATag"> 
      <img src={imageSource} className="cardImgtag" /> 
      <div className="textLine">
      <h1 className="cardDescripTag">{description}</h1>
      <p className="cardDateTag">{createdAt}</p>
      </div>
    </a>
    </li>
  );
}

export default MainLink