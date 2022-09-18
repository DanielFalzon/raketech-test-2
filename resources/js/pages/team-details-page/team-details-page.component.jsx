import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const TeamDetailsPage = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        //TODO: a check for the teams, if they are not in session storage, get the leagues from API.
        let allData = JSON.parse(sessionStorage.getItem("teamsData"));
        setTeam(allData[teamId]);
        console.log(allData[teamId]);
    },[]);

    return(
        <>
        <h1>{team.strTeam}</h1>
        </>
    )
}

export default TeamDetailsPage;