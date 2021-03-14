import { stopSubmit } from "redux-form"
import { ProfileAPI } from "../DAL/api"
import { photosType, postDataType, profileType, InferActionTypes, BaseThunkType } from '../types/type'

let initialState = {
    postData: [
        { id: 1, like: 14, message: 'Я воняю попай', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg' },
        { id: 2, like: 144, message: 'О, я тоже', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769' },
        { id: 3, like: 4, message: 'Прикольна', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg' },
        { id: 4, like: 1, message: 'Соглы', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769' },
        { id: 5, like: 16, message: 'Привет, Мир!', ava: 'https://i.ytimg.com/vi/nfb4N8LXs68/maxresdefault.jpg' },
        { id: 6, like: 10, message: 'Hello, World!', ava: 'https://i.ytimg.com/vi/0k_A0kEkKxs/maxresdefault.jpg' },
    ] as postDataType[],
    newPostText: '',
    profile: null as null | profileType,
    status: null as null | str
}

const profileReducer = (state = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            let newPost = {
                id: 7, like: 0, message: action.value, ava: 'https://sun1-18.userapi.com/oshWOD47s62UCB6DiYbyA-WcYMz9yfKTLSU5sg/9KrG1vY3wtE.jpg'
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        }
        case 'DELETE_POST': {
            return {
                ...state,
                postData: [...state.postData].filter(p => p.id !== action.postId)
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as profileType
            }
        }
        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: (value: str) => ({ type: 'ADD_POST', value } as const),
    deletePost: (postId: num) => ({ type: 'DELETE_POST', postId } as const),
    setUserProfile: (profile: Null<profileType> ) => ({ type: 'SET_USER_PROFILE', profile } as const),
    setStatus: (status: str) => ({ type: 'SET_STATUS', status } as const),
    savePhoto: (photos: photosType) => ({ type: 'SAVE_PHOTO_SUCCESS', photos } as const)
}

export const getProfile = (userId: num ): ThunkType => async (dispath) => {
    let data = await ProfileAPI.getProfile(userId)
    dispath(actions.setUserProfile(data))
}

export const getStatus = (userId: num): ThunkType => async (dispath) => {
    let data = await ProfileAPI.getStatus(userId)
    dispath(actions.setStatus(data))
}

export const updateStatus = (status: str): ThunkType => async (dispath) => {
    try {
        let data = await ProfileAPI.updateStatus(status)
        if (data.resultCode === 0) { dispath(actions.setStatus(status)) }
    } catch (error) {
        alert('updateStatus error')
    }
}

export const uploadPhoto = (file: File): ThunkType => async (dispath) => {
    let data = await ProfileAPI.uploadPhoto(file)
    if (data.resultCode === 0) { dispath(actions.savePhoto(data.data.photos)) }
}

export const savePofileDescription = (desc: profileType): ThunkType => async (dispath, getState) => {
    const id =  getState().auth.id
    let data = await ProfileAPI.savePofileDescription(desc)
    if (data.resultCode === 0) {id !== null && dispath(getProfile(id)) }
    else {
        // let message = data.messages.lenght > 0 ? 'Some error' : data.messages[0]
        // dispath(stopSubmit('profile-data', { "contacts": {"facebook": data.messages[0] }}))
        dispath(stopSubmit('profile-data', { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer

type actionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<actionsType | ReturnType<typeof stopSubmit>>

type initialStateType = typeof initialState