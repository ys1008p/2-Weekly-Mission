import styles from "../styles/CardList.module.css";
import Card from "./Card";

function CardList({links}){
    return(
        <>
            {
                links && links.map((link)=>(
                    <Card key={link.id} link={link}/>
                ))
            }
        </>
    )
}


export default CardList