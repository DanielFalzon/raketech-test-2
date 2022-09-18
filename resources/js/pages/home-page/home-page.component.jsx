import React, { useEffect, useState } from "react";

import Header from "../../components/header/header.component";
import SportCard from "../../components/sport-card/sport-card.component";

import styles from './home-page.module.scss';

const HomePage = () => {
    const [sports, setSports] = useState([]);
    const [filter, setFilter] = useState("");
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

    const handleFilterChange = (value) => {
        console.log(value);
        setFilter(value);
    }

    return(
        <div>
            <Header />
            <h1>
                Browse Sports
            </h1>
            <div className={styles.searchBoxContainer}>
                <img className={styles.searchIcon} src='/images/SearchIcon.svg' alt={"Raketech Logo"}/>
                <input type="text" className={styles.searchBox} value={filter} onChange={
                    event => handleFilterChange(event.target.value)
                } />
            </div>
            
            <div>
                {loading && <span>Loading...</span>}
                {sports.map(function(item, i){
                    if(item.strSport.includes(filter)){
                        return(
                            <SportCard key={i} item={item}/>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default HomePage;