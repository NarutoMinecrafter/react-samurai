import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import { Component } from 'react';

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
                <addMessageReduxForm onSubmit={props.onSubmit} />
            </div>
        </div>
    )
}

class addMessageForm extends Component {
    render(){
        return( 
        <form onSubmit={this.props.handleSubmit} >
            <div>
                <Field name='addNewMessageText'  component='textarea' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
        )
    }
}

const addMessageReduxForm = reduxForm({form: 'AddMessage'})(addMessageForm)

export default Dialogs;