const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogData: [
        { id: 1, name: 'Вадим', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg', activ: 'Dialogs_activ__150-S' },
        { id: 2, name: 'Дима', ava: 'https://i.ytimg.com/vi/0k_A0kEkKxs/maxresdefault.jpg', activ: '' },
        { id: 3, name: 'Маша', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769', activ: '' },
        { id: 4, name: 'Богдана', ava: 'https://thumbs.dreamstime.com/b/как-кнопка-значка-стекловидная-желтая-круглая-102217772.jpg', activ: '' },
        { id: 5, name: 'Саша', ava: 'https://i.pinimg.com/originals/36/f4/80/36f4804b63c22e09f93a5a7e00878e66.jpg', activ: '' },
        { id: 6, name: 'Валера', ava: '' },
    ],
    messageData: [
        { id: 1, ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg', messege_text: 'Dorou', sender: 'Dialogs_i__1PiY_' },
        { id: 2, ava: 'https://sun1-18.userapi.com/oshWOD47s62UCB6DiYbyA-WcYMz9yfKTLSU5sg/9KrG1vY3wtE.jpg', messege_text: 'Прив', sender: 'Dialogs_u__1rRYs' },
        { id: 3, ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg', messege_text: 'Как дела?', sender: 'Dialogs_i__1PiY_' },
        { id: 4, ava: 'https://sun1-18.userapi.com/oshWOD47s62UCB6DiYbyA-WcYMz9yfKTLSU5sg/9KrG1vY3wtE.jpg', messege_text: 'Норм', sender: 'Dialogs_u__1rRYs' },
        { id: 5, ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg', messege_text: 'Кру', sender: 'Dialogs_i__1PiY_' },
        { id: 6, ava: 'https://sun1-18.userapi.com/oshWOD47s62UCB6DiYbyA-WcYMz9yfKTLSU5sg/9KrG1vY3wtE.jpg', messege_text: 'соглы', sender: 'Dialogs_u__1rRYs' },
    ],
    newMessageText: '',
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMssage = {
                id: 7, ava: 'https://sun1-18.userapi.com/oshWOD47s62UCB6DiYbyA-WcYMz9yfKTLSU5sg/9KrG1vY3wtE.jpg', messege_text: state.newMessageText, sender: 'Dialogs_u__1rRYs'
            }
            return {
                ...state,
                messageData: [...state.messageData, newMssage],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;

    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default messageReducer;