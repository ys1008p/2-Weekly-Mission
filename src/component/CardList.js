import styles from "../styles/CardList.module.css";
import { useState } from "react";
import Card from "./Card";

function CardList({links}){
    const [isHover, setIsHover] = useState(false);
    const handleHover=()=>{
        setIsHover(true)
    }
    return(
        <>
            <div className={styles.cardList}>
                {
                    links && links.map((link)=>(
                        <Card isHover={isHover} onMouseOver={handleHover} key={link.id} link={link}/>
                    ))
                }
            </div>
        </>

    )
}


export default CardList