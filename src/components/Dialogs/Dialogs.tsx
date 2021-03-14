import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import { dialogDataType, messageDataType } from '../../types/type';
import { Textarea } from '../common/FormsControl/FormsControl';

const Dialogs: React.FC<PropsType> = (props): JSX.Element => {

    let dialogElement = props.dialogData.map(dialog => <Dialog id={dialog.id} name={dialog.name} ava={dialog.ava} activ={dialog.activ}  key={dialog.id} />)

    let messageElement = props.messageData.map(message => <Message messege_text={message.messege_text} sender={message.sender} ava={message.ava} key={message.id} />)

    let addMessage = (value: {newMessageText: str}) => {
        props.addMessageCreator(value.newMessageText)
    }

    // let onMessageChange = (event) => {
    //     let text = event.target.value;
    //     props.updateNewMessageTextCreator(text)
    // }

    return(
        <div className={s.dialog_page} >
            <div className = {s.dialogs}>
                {dialogElement}
            </div>
            <div className={s.messageField}>
                <div className={s.messages} >
                    {messageElement}
                </div>
                {/* {<addMessageMyReduxForm onSubmit={/ *props.onSubmit* / addMessage} />} */}
            </div>
        </div>
    )
}

type addMessageFormType =  {name: "newMessageText", component: "textarea"}

const addMessageForm: React.FC<InjectedFormProps<addMessageFormType, {}> & {}> = (props) => {
    return( 
        <form onSubmit={props.handleSubmit} >
            <div>
                {/* <Field<addMessageFormType> name='newMessageText' component='textarea' /> */}
                <Field component={Textarea} placeholder='input message text...' name='newMessageText' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const addMessageMyReduxForm = reduxForm<addMessageFormType, {}>({form: 'AddMessage'})(addMessageForm)

export default Dialogs

type PropsType = {
    dialogData: dialogDataType[]
    messageData: messageDataType[]
    addMessageCreator: (value: str) => void
}