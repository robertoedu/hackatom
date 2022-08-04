import React from "react";

import styles from"../styles/Header.module.scss"
import Logo from '../images/logo.jpeg'

export const Header = () => {

    return (

        <header className={styles.header}>
            <img src={Logo} alt="logo no precinho" />
        </header>
    )
}