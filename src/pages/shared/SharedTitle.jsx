import Avatar from '../../components/Avatar';

function SharedTitle({ folder }) {
  const { name, owner } = folder;

  return (
    <section className="wrap title" aria-label="사용자 정보 및 폴더명">
      <Avatar imgUrl={owner?.profileImageSource} classNames="title__avatar" />
      <span className="title__user-name">{owner.name}</span>
      <span className="title__folder-name">{name}</span>
    </section>
  );
}

export default SharedTitle;
