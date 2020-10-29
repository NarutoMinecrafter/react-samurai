import messageReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _callSubscriber() { console.log('state changed') },

    _state: {
        profilePage: {
            postData: [
                { id: '1', like: '14', message: 'Я воняю попай', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg' },
                { id: '2', like: '144', message: 'О, я тоже', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769' },
                { id: '3', like: '4', message: 'Прикольна', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg' },
                { id: '4', like: '1', message: 'Соглы', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769' },
                { id: '5', like: '16', message: 'Привет, Мир!', ava: 'https://i.ytimg.com/vi/nfb4N8LXs68/maxresdefault.jpg' },
                { id: '6', like: '10', message: 'Hello, World!', ava: 'https://i.ytimg.com/vi/0k_A0kEkKxs/maxresdefault.jpg' },
            ],
            newPostText:'',
        },
        messagePage: {
            dialogData: [
                { id: 1, name: 'Вадим', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg', activ:'Dialogs_activ__150-S'},
                { id: 2, name: 'Дима', ava: 'https://i.ytimg.com/vi/0k_A0kEkKxs/maxresdefault.jpg', activ:'' },
                { id: 3, name: 'Маша', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769', activ:'' },
                { id: 4, name: 'Богдана', ava: 'https://thumbs.dreamstime.com/b/как-кнопка-значка-стекловидная-желтая-круглая-102217772.jpg', activ:'' },
                { id: 5, name: 'Саша', ava: 'https://i.pinimg.com/originals/36/f4/80/36f4804b63c22e09f93a5a7e00878e66.jpg', activ:'' },
                { id: 6, name: 'Валера', ava: '' },
            ],
            messageData: [
                { id: 1, ava:'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg', messege_text: 'Dorou', sender:'Dialogs_i__1PiY_' },
                { id: 2, ava:'https://sun1-18.userapi.com/oshWOD47s62UCB6DiYbyA-WcYMz9yfKTLSU5sg/9KrG1vY3wtE.jpg', messege_text: 'Прив', sender:'Dialogs_u__1rRYs' },
                { id: 3, ava:'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg', messege_text: 'Как дела?', sender:'Dialogs_i__1PiY_' },
                { id: 4, ava:'https://sun1-18.userapi.com/oshWOD47s62UCB6DiYbyA-WcYMz9yfKTLSU5sg/9KrG1vY3wtE.jpg', messege_text: 'Норм', sender:'Dialogs_u__1rRYs' },
                { id: 5, ava:'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg', messege_text: 'Кру', sender:'Dialogs_i__1PiY_' },
                { id: 6, ava:'https://sun1-18.userapi.com/oshWOD47s62UCB6DiYbyA-WcYMz9yfKTLSU5sg/9KrG1vY3wtE.jpg', messege_text: 'соглы', sender:'Dialogs_u__1rRYs' },
            ],
            newMessageText:'',
        },
        navbar: {
            friends:[
                {ava:'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg', name:'Вадим'},
                {ava:'https://i.ytimg.com/vi/0k_A0kEkKxs/maxresdefault.jpg', name:'Саша'},
                {ava:'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769', name:'Маша'},
            ],
        },
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)

        this._callSubscriber();
    },
}

export default store;

// window.store = store;