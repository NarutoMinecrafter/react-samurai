import { stopSubmit } from "redux-form";
import { getCapthaUrlApi, getMe, login, logout } from "../DAL/api";

const SET_USER_DATA = 'auth-reducer/SET-USER-DATA';
const SET_CAPTHA_URL = 'auth-reducer/SET-CAPTHA-URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    CapthaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_CAPTHA_URL: {
            return {
                ...state,
                CapthaUrl: action.url
            }
        }
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })
export const setCapthaUrl = (url) => ({ type: SET_CAPTHA_URL, url })

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
        if (data.resultCode === 10) dispath(getCapthaUrl())
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

export const getCapthaUrl = () => async (dispath) => {
    let data = await getCapthaUrlApi()
    dispath(setCapthaUrl(data.url))
}

export default authReducer