import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import s from './Navbar.module.css';

const Navbar = (props) => {

let friendElement = props.state.friends.map(friend => <Friend ava={friend.ava} name={friend.name} key={friend} />)

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.activ}`}>
                <NavLink to='/profile' activeClassName={s.activ} >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages' activeClassName={s.activ} >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activ} >Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activ} >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activ} >Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activ} >Settings</NavLink>
            </div>
            <br />
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.activ} >Friends</NavLink>
            </div>
            <div className={s.friendItem} >
                {friendElement}
            </div>
        </nav>
    )
}

export default Navbar;