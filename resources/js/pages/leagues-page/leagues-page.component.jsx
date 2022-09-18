import React, { useEffect, useState } from "react";

import Header from "../../components/header/header.component";
import Card from "../../components/card/card.component";
import SearchBar from "../../components/search-bar/search-bar.component";

import { useParams } from "react-router-dom";

const LeaguesPage = () => {
    const {sport} = useParams();
    const [leagues, setLeagues] = useState([]);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/leagues?sportSlug=${sport}`)
        .then((response) => response.json())
        .then((data) => {
            setLeagues(data['data']);
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

    return(
        <div>
            <Header />
            <h1>Browse {sport} Leagues</h1>

            <SearchBar 
                searchValue={filter}
                onChange={handleFilterChange}
            />

            <div>
                {loading && <span>Loading...</span>}
                {leagues.map(function(item, i){
                    if(item.strLeague.includes(filter)){
                        return(
                            <Card key={i} goTo="/teams" text={item.strLeague} icon={false}/>
                        )
                    }
                })}
            </div>
        </div>
        
    )
}
export default LeaguesPage;