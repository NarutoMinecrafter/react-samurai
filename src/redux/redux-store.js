import messageReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers ({
    profilePage: profileReducer,
    messagePage: messageReducer,
    navbar: navbarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;

window.store = store;