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

    //TODO: Add fallback to fan art image if stadium is unavailable
    const divStyle = {
        backgroundImage: 'url(' + team.strStadiumThumb + ')',
    };

    return(
        <>
            <Header />
            <div className={styles.banner} style={divStyle}>
                <div className={styles.bannerContainer}>
                    <div>
                        <h1>{team.strTeam}</h1>
                       {team.intFormedYear > 0 && <span className={styles.smallSpan}>EST: {team.intFormedYear}</span>}
                    </div>
                    <img className={styles.bannerLogo} src={team.strTeamBadge} alt={`${team.strTeam} Badge`} />
                    {team.strStadium && <p>Home Stadium: {team.strStadium}</p>}
                    <div className={styles.bannerSocials}>
                        {
                            team.strFacebook && 
                            <a href={`https://${team.strFacebook}`} target="_blank">
                                <img src='/images/FacebookIcon.svg' alt={"Facebook Icon"}/>
                            </a>
                        }
                        {
                            team.strTwitter && 
                            <a href={`https://${team.strTwitter}`} target="_blank">
                            <img src='/images/TwitterIcon.svg' alt={"Twitter Icon"}/>
                            </a>
                        }
                        {
                            team.strInstagram && 
                            <a href={`https://${team.strInstagram}`} target="_blank">
                                <img src='/images/InstaIcon.svg' alt={"Instagram Icon"}/>
                            </a>
                        }
                        {
                            team.strWebsite && 
                            <a href={`https://${team.strWebsite}`} target="_blank">
                                <img src='/images/GlobeIcon.svg' alt={"Site Icon"}/>
                            </a>
                        }
                    </div>
                </div>
                <div className="content">
                    {team.strDescriptionEN && <>
                    <h2>
                        Team Description
                    </h2>
                    <p>
                        {team.strDescriptionEN}
                    </p>
                    </>}
                    {team.strStadiumDescription && 
                    <><h2>
                        Stadium Description
                    </h2>
                    <p>
                        {team.strStadiumDescription}
                    </p>
                    </>}
                </div>
            </div>
        </>
    )
}

export default TeamDetailsPage;