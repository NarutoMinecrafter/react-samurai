import { stopSubmit } from "redux-form"
import { getCapthaUrlApi, getMe, login, logout, getMeResponseDataType, resultCodeEnum, resultCodeCapthaEnum } from '../DAL/api'
import { loginFormDataType, InferActionTypes, BaseThunkType } from '../types/type'

let initialState = {
    id: null as Null<num>,
    email: null as Null<str>,
    login: null as Null<str>,
    isAuth: false,
    CapthaUrl: null as Null<str>
}

const authReducer = (state = initialState, action: actionsType):initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.data
            }
        }
        case 'SET_CAPTHA_URL': {
            return {
                ...state,
                CapthaUrl: action.url
            }
        }
        default:
            return state;
    }
}
export const actions = {
    setUserData: (id: Null<num>, email: Null<str>, login: Null<str>, isAuth: bool) => ({ type: 'SET_USER_DATA', data: { id, email, login, isAuth } } as const),
    setCapthaUrl: (url: str) => ({ type: 'SET_CAPTHA_URL', url } as const )
}

export const getMeThunk = ():ThunkType => async (dispath) => {
    let data = await getMe()
    if (data.resultCode === resultCodeEnum.Succes) {
        let { id, email, login }: getMeResponseDataType = data.data
        dispath(actions.setUserData(id, email, login, true))
    }
}

export const loginisation = (formData: loginFormDataType):ThunkType => async (dispath) => {
    let data = await login(formData)
    if (data.resultCode === resultCodeEnum.Succes) {
        dispath(getMeThunk())
    } else {
        if (data.resultCode === resultCodeCapthaEnum.CapthaIsRequaried) dispath(getCapthaUrl())
        let message = data.messages.length > 0 ? 'Some error' : data.messages[0]
        dispath(stopSubmit('login', { _error: message }))
    }
}

export const unLoginisation = ():ThunkType => async (dispath) => {
    let data = await logout()
    if (data.resultCode === resultCodeEnum.Succes) {
        dispath(actions.setUserData(null, null, null, false))
    }
} 

export const getCapthaUrl = ():ThunkType => async (dispath) => {
    let data = await getCapthaUrlApi()
    dispath(actions.setCapthaUrl(data.url))
}

export default authReducer

type actionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<actionsType | ReturnType<typeof stopSubmit>>

export type initialStateType = typeof initialState