import React from 'react'
import s from '.././Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.message + ' ' + props.sender } >
            <img src={props.ava} /> 
            {props.messege_text}
        </div>
    )
}

export default Message;