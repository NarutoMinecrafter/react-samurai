import { stopSubmit } from "redux-form";
import { getMe, login, logout } from "../DAL/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return{
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({ type:SET_USER_DATA, data:{userId, email, login, isAuth} })

export const getMeThunk = () => (dispath) => {
    getMe()
    .then(data => {
        if(data.resultCode === 0) {
            let {userId, email, login} = data.data
            dispath(setUserData(userId, email, login, true))
        }
    })
}

export const loginisation = (formData) => (dispath) => {
    login(formData)
    .then(data => {
        if(data.resultCode === 0) {
            dispath(getMeThunk())
        } else {
            let message = data.messages.lenght > 0 ? 'Some error' : data.messages[0]
            dispath(stopSubmit('login', {_error: message}))
        }
    })
}

export const unLoginisation = () => (dispath) => {
    logout()
    .then(data => {
        if(data.resultCode === 0) {
            dispath(setUserData(null, null, null, false))
        }
    })
}

export default authReducer