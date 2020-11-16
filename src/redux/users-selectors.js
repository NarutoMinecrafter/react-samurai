import { createSelector } from 'reselect'

export const getUsers = state => state.usersPage.users
export const getPpageSize = state => state.usersPage.pageSize
export const getTotalCount = state => state.usersPage.totalCount
export const getCurrentPage = state => state.usersPage.currentPage
export const getIsFeching = state => state.usersPage.isFeching
export const getFollowingProgress = state => state.usersPage.followingProgress

// на случай сесли селектор очень сложный и посоянно перерисовывает проект
export const getUsersSuperSelector = createSelector(getUsers, (users) => users.filter(u => true)) 

//хуки