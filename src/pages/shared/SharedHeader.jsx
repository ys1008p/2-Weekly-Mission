import Avatar from '../../components/Avatar';

function SharedHeader({ folder }) {
  const { name, owner } = folder;

  return (
    <section className='wrap header' aria-label='사용자 정보 및 폴더명'>
      <Avatar imgUrl={owner?.profileImageSource} classNames='header__avatar' />
      <span className='header__user-name'>{owner.name}</span>
      <span className='header__folder-name'>{name}</span>
    </section>
  );
}

export default SharedHeader;
