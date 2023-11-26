const Cards = ({ userPick }) => {
const 
const howManyTimesAgo  =({userPick}) => {

  
  const upLoadTime = new Date(prev);
  const diff = (now - upLoadTime) / 1000;
  if()  
}

  return (
    <section >
      <img src={userPick.imageSource} />
      <div>
        <p>{}
        </p>
      </div>
    </section>
  );
};

export default function CardsList({ userPick }) {
  return (
    <article>
      {userPick.map((card) => {
        return (
          <div>
            <Cards key={userPick.id} userPick={userPick} />
          </div>
        );
      })}
    </article>
  );
}
