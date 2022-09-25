import React from "react";

const CardList = ({callback}) => {
    return(
    <div>
        {callback()}
    </div>
    )
}

export default CardList;