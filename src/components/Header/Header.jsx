import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://www.seekpng.com/png/full/56-564353_lions-cut-big-free-images-at-clker-logo.png' className={s.logo}/>
            <center>narutominecrafter</center>
        </header>
    )
}

export default Header;