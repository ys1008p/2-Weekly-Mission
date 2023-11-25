function Profile({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function Thumbnail({ src, ...props }) {
  return <img src={src} alt="프로필 썸네일" {...props} />;
}

function Name({ name, ...props }) {
  return <span {...props}>{name}</span>;
}

export default Object.assign(Profile, {
  Thumbnail,
  Name,
});
