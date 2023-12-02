import Card from "./Card";

export function CardWrapper({ links }) {
  return (
    <div className="card-wrapper">
      {links ? (
        links.map((link) => {
          return (
            <>
              <Card key={link.id} link={link} />
            </>
          );
        })
      ) : (
        <div>links가 없다.</div>
      )}
    </div>
  );
}

export default CardWrapper;
