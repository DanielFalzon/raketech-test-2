import React from "react";
import styles from "./header.module.scss";

const Header = () => {
    return(
        <div className={styles.header}>   
            <img className={styles.logo} src='/images/RaketechLogo.png' alt={"Raketech Logo"}/>
        </div>
    )
}
export default Header;