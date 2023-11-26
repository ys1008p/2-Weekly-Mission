import styles from "../styles/CardList.module.css";
import { useState } from "react";
import Card from "./Card";

function CardList({links}){
    

    return(
        <>
            <div className={styles.cardList}>
                {
                    links && links.map((link)=>(
                        <Card  key={link.id} link={link}/>
                    ))
                }
            </div>
        </>

    )
}


export default CardList