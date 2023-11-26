const MainCardImg = ({ className, src, alt }) => (
  <div className={className}>
    <img src={src} alt={alt}></img>
  </div>
);

const MainCardContent = ({ className, ago, des, date }) => (
  <div className={className}>
    <span className="card-ago">{ago}</span>
    <p className="card-description">{des}</p>
    <span className="card-date">{date}</span>
  </div>
);

export { MainCardImg, MainCardContent };
