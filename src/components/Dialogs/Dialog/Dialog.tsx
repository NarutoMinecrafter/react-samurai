import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '.././Dialogs.module.css'

type PropsType = {
    id: num
    name: str
    ava: str
    activ?: str
}

const Dialog: React.FC<PropsType> = (props) => {
    return(
        <div className={s.dialog + ' ' + props.activ} >
            <div>
                <img src={props.ava} alt='' />
            </div>
            <div>
                <NavLink to={'/messages/' + props.id}  >{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Dialog;

// SOLID принципы