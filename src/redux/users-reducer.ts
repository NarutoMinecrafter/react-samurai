import { Dispatch } from "redux"
import { usersAPI, resultCodeEnum, ResponseType } from '../DAL/api'
import { usersType, InferActionTypes, BaseThunkType } from '../types/type'
import { updateObjInArr } from "../utils/obj-helpers"

// const FOLLOW = 'FOLLOW' 
// const UNFOLLOW = 'UNFOLLOW'
// const SET_USERS = 'SET-USERS'
// const CURRENT_PAGE = 'CURRENT-PAGE'
// const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
// const TOOGLE_IS_FECHING = 'TOOGLE-IS-FECHING'
// const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [] as usersType[],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    filter: {
        term: '',
        friend: null as Null<bool>
    },
    isFeching: true,
    followingProgress: [] as num[] // array user id
}

const usersReducer = (state = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjInArr(state.users, action.userid, "id", { followed: true })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjInArr(state.users, action.userid, "id", { followed: false })
            }
        case 'SET_USERS': {
            return {
                ...state, users: action.users
            }
        }
        case 'CURRENT_PAGE': {
            return {
                ...state, currentPage: action.page
            }
        }
        case 'SET_FILTER': {
            return {
                ...state, filter: action.filter
            }
        }
        case 'SET_TOTAL_COUNT': {
            return {
                ...state, totalCount: action.totalCount
            }
        }
        case 'TOOGLE_IS_FECHING': {
            return {
                ...state, isFeching: action.isFeching
            }
        }

        case 'TOOGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state, followingProgress: action.isFeching
                    ? [...state.followingProgress, action.userid]
                    : state.followingProgress.filter(id => id !== action.userid)
            }
        }
        default:
            return state
    }
}
export const actions = {
    follow: (userid: num) => ({ type: 'FOLLOW', userid } as const),
    unFollow: (userid: num) => ({ type: 'UNFOLLOW', userid } as const),
    setUsers: (users: usersType[]) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (page: num) => ({ type: 'CURRENT_PAGE', page } as const),
    setFilter: (filter: filterType) => ({ type: 'SET_FILTER', filter } as const),
    setTotalCount: (totalCount: num) => ({ type: 'SET_TOTAL_COUNT', totalCount } as const),
    ToggleIsFeching: (isFeching: bool) => ({ type: 'TOOGLE_IS_FECHING', isFeching } as const),
    ToggleFollowingProgress: (isFeching: bool, userid: num) => ({ type: 'TOOGLE_IS_FOLLOWING_PROGRESS', isFeching, userid } as const)
}

export const requestUsers = (currentPage: num, pageSize: num, filter: filterType): ThunkType => async (dispath: Dispatch<actionsType>) => {
    dispath(actions.ToggleIsFeching(true))
    dispath(actions.setFilter(filter))
    let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
    dispath(actions.ToggleIsFeching(false))
    dispath(actions.setUsers(data.items))
    dispath(actions.setTotalCount(data.totalCount))
}

const _followUnfollow = async (dispath: Dispatch<actionsType>, apiMetod: (userid: num) => Promise<ResponseType<{}>>, actionCreator: (userid: num) => actionsType, userid: num) => {
    dispath(actions.ToggleFollowingProgress(true, userid))
    let data = await apiMetod(userid)
    if (data.resultCode === resultCodeEnum.Succes) dispath(actionCreator(userid))
    dispath(actions.ToggleFollowingProgress(false, userid))
}

export const deleteFollow = (userid: num): ThunkType => async (dispath: Dispatch<actionsType>) =>
    await _followUnfollow(dispath, usersAPI.deleteFollow.bind(usersAPI), actions.unFollow, userid)

export const postFollow = (userid: num): ThunkType => async (dispath: Dispatch<actionsType>) =>
    await _followUnfollow(dispath, usersAPI.postFollow.bind(usersAPI), actions.follow, userid)

export default usersReducer

type actionsType = InferActionTypes<typeof actions>
export type ThunkType = BaseThunkType<InferActionTypes<typeof actions>>

export type initialStateType = typeof initialState
export type filterType = typeof initialState.filter

// книга "Проблемно Ориентированное Программирование" (DDD)

// замыкание