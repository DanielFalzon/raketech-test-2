import React from "react";
import styles from "./card-list.module.scss";

const CardList = ({callback}) => {
    return(
        <div className={styles.cardListContainer}>
            {callback()}
        </div>
    )
}

export default CardList;