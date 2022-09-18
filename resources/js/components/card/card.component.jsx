import React from 'react';
import styles from './card.module.scss';
import { Link } from "react-router-dom";

const Card = ({goTo, text, icon}) => {
    return(
        <Link to={`${goTo}/${text}`}>
            <div className={styles.sportCard}>
                <span className={styles.label}> {text}</span>
                {icon && <img src={icon} height='20px' />}
            </div>
        </Link>
    )
}

export default Card;