import React, { useEffect, useState } from "react";

import Header from "../../components/header/header.component";
import SportCard from "../../components/sport-card/sport-card.component";

const HomePage = () => {
    const [sports, setSports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/sports')
        .then((response) => response.json())
        .then((data) => {
            console.log(data['data']);
            setSports(data['data']);
        })
        .catch((err) => {
            console.log(err.message);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    return(
        <div>
            <Header />
            <h1>
                Browse Sports
            </h1>
            <div>
                {loading && <span>Loading...</span>}
                {sports.map(function(item, i){
                    return(
                        <SportCard key={i} item={item}/>
                    )
                })}
            </div>
        </div>
    )
}
export default HomePage;