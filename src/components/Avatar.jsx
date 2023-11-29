function Avatar({ imgUrl, classNames = '' }) {
  return <img src={imgUrl} alt="사용자 아바타" className={classNames} />;
}

export default Avatar;
