import { stopSubmit } from "redux-form";
import { getMe, login, logout } from "../DAL/api";

const SET_USER_DATA = 'auth-reducer/SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })

export const getMeThunk = () => async (dispath) => {
    let data = await getMe()
    if (data.resultCode === 0) {
        let { id, email, login } = data.data
        dispath(setUserData(id, email, login, true))
    }
}

export const loginisation = (formData) => async (dispath) => {
    let data = await login(formData)
    if (data.resultCode === 0) {
        dispath(getMeThunk())
    } else {
        let message = data.messages.lenght > 0 ? 'Some error' : data.messages[0]
        dispath(stopSubmit('login', { _error: message }))
    }
}

export const unLoginisation = () => async (dispath) => {
    let data = await logout()
    if (data.resultCode === 0) {
        dispath(setUserData(null, null, null, false))
    }
}

export default authReducer