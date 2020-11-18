import { stopSubmit } from "redux-form";
import { ProfileAPI } from "../DAL/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
    postData: [
        { id: 1, like: '14', message: 'Я воняю попай', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg' },
        { id: 2, like: '144', message: 'О, я тоже', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769' },
        { id: 3, like: '4', message: 'Прикольна', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg' },
        { id: 4, like: '1', message: 'Соглы', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769' },
        { id: 5, like: '16', message: 'Привет, Мир!', ava: 'https://i.ytimg.com/vi/nfb4N8LXs68/maxresdefault.jpg' },
        { id: 6, like: '10', message: 'Hello, World!', ava: 'https://i.ytimg.com/vi/0k_A0kEkKxs/maxresdefault.jpg' },
    ],
    profile: null,
    status: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '7', like: '0', message: action.value, ava: 'https://sun1-18.userapi.com/oshWOD47s62UCB6DiYbyA-WcYMz9yfKTLSU5sg/9KrG1vY3wtE.jpg'
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postData: [...state.postData].filter(p => p.id !== action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (value) => ({ type: ADD_POST, value })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhoto = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getProfile = (userId) => async (dispath) => {
    let data = await ProfileAPI.getProfile(userId)
    dispath(setUserProfile(data))
}

export const getStatus = (userId) => async (dispath) => {
    let data = await ProfileAPI.getStatus(userId)
    dispath(setStatus(data))
}

export const updateStatus = (status) => async (dispath) => {
    try {
        let data = await ProfileAPI.updateStatus(status)
        if (data.resultCode === 0) { dispath(setStatus(status)) }
    } catch(error) {
        alert('updateStatus error')
    }
}

export const uploadPhoto = file => async dispath => {
    let data = await ProfileAPI.uploadPhoto(file)
    if (data.resultCode === 0) { dispath(savePhoto(data.data.photos)) }
}

export const savePofileDescription = desc => async (dispath, getState) => {
    let data = await ProfileAPI.savePofileDescription(desc)
    if (data.resultCode === 0) {dispath(getProfile(getState().auth.id))}
    else {
        // let message = data.messages.lenght > 0 ? 'Some error' : data.messages[0]
        // dispath(stopSubmit('profile-data', { "contacts": {"facebook": data.messages[0] }}))
        dispath(stopSubmit('profile-data', { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer;