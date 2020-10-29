// import React from 'react'
import { connect } from 'react-redux'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/message-reducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        dialogData: state.messagePage.dialogData,
        messageData: state.messagePage.messageData,
        newMessageText: state.messagePage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessageCreator: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageTextCreator: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;