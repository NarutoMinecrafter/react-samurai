import { usersAPI } from "../DAL/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const CURRENT_PAGE = 'CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOOGLE_IS_FECHING = 'TOOGLE-IS-FECHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFeching: true,
    followingProgress: []

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return  {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
    case SET_USERS: {
        return {
            ...state, users: action.users}
    }
    case CURRENT_PAGE: {
        return {
            ...state, currentPage: action.page}
    }
    case SET_TOTAL_COUNT: {
        return {
            ...state, totalCount: action.totalCount}
    }
    case TOOGLE_IS_FECHING: {
        return {
            ...state, isFeching: action.isFeching}
    }

    case TOOGLE_IS_FOLLOWING_PROGRESS: {
        return {
            ...state, followingProgress: action.isFeching
                ? [...state.followingProgress, action.userid]
                : state.followingProgress.filter(id => id != action.userid)
        }
    }
        default:
            return state;
    }
}

export const follow = (userid) => ({ type:FOLLOW, userid })
export const unFollow = (userid) => ({ type:UNFOLLOW, userid })
export const setUsers = (users) => ({ type:SET_USERS, users })
export const setCurrentPage = (page) => ({ type:CURRENT_PAGE, page })
export const setTotalCount = (totalCount) => ({ type:SET_TOTAL_COUNT, totalCount })
export const ToggleIsFeching = (isFeching) => ({ type:TOOGLE_IS_FECHING, isFeching })
export const ToggleFollowingProgress = (isFeching, userid) => ({ type:TOOGLE_IS_FOLLOWING_PROGRESS, isFeching , userid})

export const getUsers = (currentPage, pageSize) => (dispath) => {
    dispath(ToggleIsFeching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispath(ToggleIsFeching(false))
            dispath(setUsers(data.items))
            dispath(setTotalCount(data.totalCount))
        })
}

export const deleteFollow = (userid) => (dispath) => {
    dispath(ToggleFollowingProgress(true, userid))
    usersAPI.deleteFollow(userid)
        .then(data => {
            if (data.resultCode === 0) dispath(unFollow(userid))
            dispath(ToggleFollowingProgress(false, userid))
        })
}

export const postFollow = (userid) => (dispath) => {
    dispath(ToggleFollowingProgress(true, userid))
    usersAPI.postFollow(userid)
        .then(data => {
            if (data.resultCode === 0) dispath(follow(userid))
            dispath(ToggleFollowingProgress(false, userid))
        })
}

export default usersReducer;

// книга "Проблемно Ориентированное Программирование" (DDD)

// замыкание