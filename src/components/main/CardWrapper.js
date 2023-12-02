import Card from "./Card";

export function CardWrapper({ links }) {
  console.log("links", links);
  return (
    <div className="card-wrapper">
      {links[0] ? (
        links.map((link) => {
          return (
            <>
              <Card key={link.id} link={link} />
            </>
          );
        })
      ) : (
        <h1>이 폴더에는 아직 링크가 없습니다.</h1>
      )}
    </div>
  );
}

export default CardWrapper;
