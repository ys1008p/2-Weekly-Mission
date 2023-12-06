import "../styles/CardList.css";
import defaultImage from "../assets/default.png"

function CardListItems(){
  
}
function formatDate(value) {
  console.log(value)
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}


function  CardList({links}) {

  return(
    <section className="contents-structure">
        <div className="contents-box">
          <div className="content-card">
            <div className="CardList">
                
                {links?.map((links, i) => {
                  return (
                    <div>
                         <img
                        className="content-image"
                        src={links.imageSource || defaultImage}
                        alt={links.title}
                      />
                      <div className="content-card" key={i}>
                        <p>{formatDate(links.createdAt)}</p>
                        <h2 className="content-info-text">
                          {links.description}
                        </h2>
                      </div>
                    </div>
                  );
                })}

            </div>
          </div>
        </div>
      </section>

   
  )
}

export default CardList

// 처음 창이 열렸을 때 folder 파일이 배치되어야 함
// function CardList() {

   

//   return (
//     <ul className="content-info-text">
//        {/* {cards.map((card)=> {
//         return (
//           <li>
//             <CardListItem card={card}/>
//           </li>
//         )
//       })}  */}
//       <h1>hey</h1>
//     </ul>
//   );
// }
 /* <img src={imageSource || defaultImage} alt={title}/>
     <div>
      <p>{createdAt}</p>
      <h2>{description}</h2>
      <p>{formatData(createdAt)}</p> */

