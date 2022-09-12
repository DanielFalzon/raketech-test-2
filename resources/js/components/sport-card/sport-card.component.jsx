import React from 'react';
import styles from './sport-card.module.scss';

const SportCard = ({item}) => {
    return(
        <div className={styles.sportCard}>
            <span className={styles.label}> {item.strSport}</span>
            <img src={item.strSportIconGreen} height='20px' />
        </div>
    )
}

export default SportCard;