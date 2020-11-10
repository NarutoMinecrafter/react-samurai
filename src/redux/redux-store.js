import authReducer from "./auth-reducer";
import messageReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers ({
    profilePage: profileReducer,
    messagePage: messageReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;