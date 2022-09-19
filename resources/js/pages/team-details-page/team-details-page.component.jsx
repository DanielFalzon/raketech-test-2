import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import styles from './team-details-page.module.scss';
import Header from "../../components/header/header.component";

const TeamDetailsPage = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        //TODO: a check for the teams, if they are not in session storage, get the leagues from API.
        let allData = JSON.parse(sessionStorage.getItem("teamsData"));
        setTeam(allData[teamId]);
        console.log(allData[teamId]);
    },[]);

    const divStyle = {
        backgroundImage: 'url(' + team.strStadiumThumb + ')',
    };

    return(
        <div>
            <Header />
            <div className={styles.banner} style={divStyle}>
                <div className={styles.bannerContainer}>
                    <img className={styles.bannerLogo} src={team.strTeamBadge} alt={`${team.strTeam} Badge`} />
                    <h1>{team.strTeam}</h1>
                    {team.intFormedYear}
                </div>
            </div>
        </div>
    )
}

export default TeamDetailsPage;