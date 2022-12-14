import React, {useEffect, useState} from "react";

import Header from "../../components/header/header.component";
import Card from "../../components/card/card.component";
import CardList from "../../components/card-list/card-list.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import Loader from "../../components/loader/loader.component";

import { useParams } from "react-router-dom";

const TeamsPage = () => {
    const {league} = useParams();
    const [teams, setTeams] = useState([]);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);

    //Play around with having API functions and conntecting the isLoading state
    useEffect(() => {
        fetch(`/api/teams?leagueSlug=${league}`)
        .then((response) => response.json())
        .then((data) => {
            setTeams(data['data']);
            sessionStorage.setItem("teamsData", JSON.stringify(data["data"]));
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
        let el = Object.entries(teams).map(([i,item]) => {
            if(item.strTeam.includes(filter)){
                    return (<Card key={i} goTo="/team" text={item.strTeam} id={item.idTeam} icon={item.strTeamBadge}/>)
            }
        });
        return el;
    }

    return(
        <>
            <Header />
            <h1>Browse {league} Teams</h1>
            {!loading && <SearchBar 
                searchValue={filter}
                onChange={handleFilterChange}
            />}
            {loading && <Loader />}
            <CardList callback={cardLoader} />
        </>
    )
}
export default TeamsPage;