import React from 'react';
// import s from '../Navbar.module.css';

const Friend = (props) => {
    return (
        <div>
            <div>
                <img src={props.ava} />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;