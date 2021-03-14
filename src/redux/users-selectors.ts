import { createSelector } from 'reselect'
import { AppStateType } from './redux-store';

export const getUsers = (state: AppStateType) => state.usersPage.users
export const getPpageSize = (state: AppStateType) => state.usersPage.pageSize
export const getTotalCount = (state: AppStateType) => state.usersPage.totalCount
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const getIsFeching = (state: AppStateType) => state.usersPage.isFeching
export const getFollowingProgress = (state: AppStateType) => state.usersPage.followingProgress
export const getFilter = (state: AppStateType) => state.usersPage.filter

// на случай сесли селектор очень сложный и посоянно перерисовывает проект
export const getUsersSuperSelector = createSelector(getUsers, (users) => users.filter(u => true)) 

//хуки