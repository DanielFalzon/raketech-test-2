import React from "react";

import styles from './search-bar.module.scss';

const SearchBar = ({searchValue, onChange}) => {
    return(
        <div className={styles.searchBoxContainer}>
                <img className={styles.searchIcon} src='/images/SearchIcon.svg' alt={"Raketech Logo"}/>
                <input 
                    className={styles.searchBox} 
                    type="text" 
                    value={searchValue} 
                    onChange={onChange}     
                />
        </div>
    )
}

export default SearchBar;