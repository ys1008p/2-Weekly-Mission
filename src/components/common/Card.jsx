function Card({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function Thumbnail({ src, ...props }) {
  return <img src={src} {...props} />;
}

function Title({ title, ...props }) {
  const { content, headType: H } = title;
  return <H {...props}>{content}</H>;
}

function Description({ description, ...props }) {
  return <p {...props}>{description}</p>;
}

export default Object.assign(Card, {
  Thumbnail,
  Title,
  Description,
});
