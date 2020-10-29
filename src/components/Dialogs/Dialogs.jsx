import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogElement = props.dialogData.map (dialog => <Dialog id={dialog.id} name={dialog.name} ava={dialog.ava} activ={dialog.activ}  key={dialog} />)

    let messageElement = props.messageData.map (message => <Message messege_text={message.messege_text} sender={message.sender} ava={message.ava} key={message} />)

    let addMessage = () => {
        props.addMessageCreator()
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageTextCreator(text)
    }

    return(
        <div className={s.dialog_page} >
            <div className={s.dialogs}>
                {dialogElement}
            </div>
            <div className={s.messageField}>
                <div className={s.messages} >
                    {messageElement}
                </div>
                <div className={s.newMssage} >
                    <div>
                        <textarea value={props.newMessageText} onChange={onMessageChange} />
                    </div>
                    <div>
                        <button onClick={addMessage} >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;