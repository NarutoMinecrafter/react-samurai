import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://www.seekpng.com/png/full/56-564353_lions-cut-big-free-images-at-clker-logo.png' className={s.logo} alt=''/>
            <center className={s.narutominecrafter} >{props.login}</center>
            <div className={s.loginBlock} >
                {props.isAuth   ? <div>{props.login} <button onClick={props.unLoginisation} >Log out</button></div> 
                                : <NavLink to='/login' >login</NavLink>}
            </div>
        </header>
    )
}

export default Header;