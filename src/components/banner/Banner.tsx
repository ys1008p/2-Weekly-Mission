import Avatar from '@/assets/images/icon/avatar.svg';

const Banner = () => (
  <section className="banner">
    <div>
      <img src={Avatar} alt="avatar" />
      <span>@코드잇</span>
      <h1>⭐️ 즐겨찾기</h1>
    </div>
  </section>
);

export default Banner;
