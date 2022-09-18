import React, { useEffect, useState } from 'react';
import styles from './card.module.scss';
import { Link } from "react-router-dom";

const Card = ({goTo, text, id, icon}) => {
    const [url, setUrl] = useState("");

    //TODO: Change to always leverage ID instead of string 
    useEffect(() => {
        if(id) {
            setUrl(`${goTo}/${id}`);
        } else {
            setUrl(`${goTo}/${text}`)
        }
    }, [])

    return(
        <Link to={url}>
            <div className={styles.sportCard}>
                <span className={styles.label}> {text}</span>
                {icon && <img src={icon} height='20px' />}
            </div>
        </Link>
    )
}

export default Card;