import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '.././Dialogs.module.css'

const Dialog = (props) => {
    return(
        <div className={s.dialog + ' ' + props.activ} >
            <div>
                <img src={props.ava}/>
            </div>
            <div>
                <NavLink to={'/messages/' + props.id}  >{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Dialog;

// SOLID принципы