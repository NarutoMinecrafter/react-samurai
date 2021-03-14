let initialState = {
    friends:[
        {ava:'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg', name:'Вадим'},
        {ava:'https://i.ytimg.com/vi/0k_A0kEkKxs/maxresdefault.jpg', name:'Саша'},
        {ava:'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769', name:'Маша'},
    ],
}

const navbarReducer = (state = initialState): initialStateType => {
    return state;
}

export default navbarReducer

export type initialStateType = typeof initialState