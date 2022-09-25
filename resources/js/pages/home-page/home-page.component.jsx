import React, { useEffect, useState } from "react";

import Header from "../../components/header/header.component";
import Card from "../../components/card/card.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import Loader from "../../components/loader/loader.component";
import CardList from "../../components/card-list/card-list.component";

const HomePage = () => {
    const [sports, setSports] = useState([]);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/sports')
        .then((response) => response.json())
        .then((data) => {
            setSports(data['data']);
        })
        .catch((err) => {
            console.log(err.message);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    const handleFilterChange = (e) => {
        const {value} = e.target;
        setFilter(value);
    }

    const cardLoader = () => {
        let el = sports.map(function(item, i){
            if(item.strSport.includes(filter)){
                return(
                    <Card key={i} goTo="/leagues" text={item.strSport} icon={item.strSportIconGreen}/>
                )
            }
        })

        return el;
    }

    //TODO: Create the search box as a component
    return(
        <>
            <Header />
            <h1>
                Browse Sports
            </h1>
            <SearchBar 
                searchValue={filter}
                onChange={handleFilterChange}
            />
            <div>
                {loading && <Loader />}
                <CardList callback={cardLoader} />
            </div>
        </>
    )
}
export default HomePage;