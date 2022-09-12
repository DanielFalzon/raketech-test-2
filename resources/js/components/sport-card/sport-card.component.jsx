import React from 'react';

const SportCard = ({item}) => {
    return(
        <div>
            <span> {item.strSport}</span>
            <img src={item.strSportIconGreen} height='20px' />
        </div>
    )
}

export default SportCard;