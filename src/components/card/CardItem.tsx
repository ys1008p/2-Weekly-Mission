interface CardItemProps {
  thumbnail?: string;
  createdAt: string;
  title: string;
  url: string;
}

const CardItem = (props: CardItemProps) => (
  <article className="card-item">
    <a href={props.url}>
      <div
        className="thumbnail"
        style={{ backgroundImage: `url(${props.thumbnail})` }}
      ></div>
      <div className="contents">
        <span className="time">{props.createdAt}</span>
        <div className="title">{props.title}</div>
        <span className="date">{props.createdAt}</span>
      </div>
    </a>
  </article>
);

export default CardItem;
