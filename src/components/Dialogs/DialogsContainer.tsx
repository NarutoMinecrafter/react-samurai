// import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import WithAuthRederect from '../../HOC/WithAuthRederect'
import { actions } from '../../redux/message-reducer'
import Dialogs from './Dialogs'
import { AppStateType } from '../../redux/redux-store';
import { dialogDataType, messageDataType } from '../../types/type';

export type MapStatePropsType = {
    dialogData: dialogDataType[]
    messageData: messageDataType[]
    newMessageText: str
}

export type MapDispathPropsType = {
    addMessageActionCreator: () => void
    updateNewMessageTextActionCreator: (text: str) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogData: state.messagePage.dialogData,
        messageData: state.messagePage.messageData,
        newMessageText: state.messagePage.newMessageText,
    }
}
const mapDispatchToProps: MapDispathPropsType = {
    addMessageActionCreator: actions.addMessageActionCreator, updateNewMessageTextActionCreator: actions.updateNewMessageTextActionCreator
}

export default compose<React.ComponentType>(connect<MapStatePropsType, MapDispathPropsType, {}, AppStateType>
    (mapStateToProps, mapDispatchToProps), WithAuthRederect)(Dialogs)

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessageCreator: () => {
//             dispatch(addMessageActionCreator())
//         },
//         updateNewMessageTextCreator: (text) => {
//             dispatch(updateNewMessageTextActionCreator(text))
//         },
//     }
// }