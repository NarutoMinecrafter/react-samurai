import React from 'react';
// import s from '../Navbar.module.css';

const Friend: React.FC<{name: str, ava: str}> = (props) => {
    return (
        <div>
            <div>
                <img src={props.ava} alt=""/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;