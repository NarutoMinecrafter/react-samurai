import authReducer from "./auth-reducer"
import messageReducer from "./message-reducer"
import navbarReducer from "./navbar-reducer"
import profileReducer from "./profile-reducer"
import usersReducer from "./users-reducer"
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer"
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

// const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
// @ts-ignore
window.store = store

type ReducerType = typeof reducers
export type AppStateType = ReturnType<ReducerType> 