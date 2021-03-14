// import { ReturnType } from "typescript"
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from '../redux/redux-store'

export type contactsType = {
    facebook: null | str
    website: null | str
    vk: null | str
    twitter: null | str
    instagram: null | str
    youtube: null | str
    github: null | str
    mainLink: null | str
}

export type photosType = {
    small: null | str
    large: null | str
}

export type profileType = {
    aboutMe: null | str
    contacts: contactsType
    lookingForAJob: null | bool
    lookingForAJobDescription: null | str
    fullName: null | str
    userId: null | num
    photos: photosType
}

export type postDataType= {
    id: num
    like: num
    message: str
    ava: str
}

export type usersType =     {
    name: str
    id: num
    uniqueUrlName?: str
    photos: photosType
    followed: bool
}

export type dialogDataType = {
    id: num
    name: str
    ava: str
    activ?: str
}
export type messageDataType = {
    id: num
    ava: str
    messege_text: str
    sender: str
}

export type loginFormDataType = {
    email: str
    password: str
    rememberMe: bool
    captcha: str | null
}

export type InferActionTypes<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action> = ThunkAction<Promise<void>, AppStateType, unknown, A>