import React from 'react'
import s from '.././Dialogs.module.css'

const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={s.message + ' ' + props.sender } >
            <img src={props.ava} alt='' /> 
            {props.messege_text}
        </div>
    )
}

export default Message

type PropsType = {
    sender: str
    ava: str
    messege_text: str
}