interface BannerProps {
  owner: { name: string; profileImageSource: string };
  folder: string;
}

const Banner = ({ owner, folder }: BannerProps) => (
  <section className="banner">
    <div>
      <img src={owner.profileImageSource} alt="avatar" />
      <span>{owner.name}</span>
      <h1>{folder}</h1>
    </div>
  </section>
);

export default Banner;
