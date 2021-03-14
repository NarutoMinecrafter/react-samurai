import React, { FC, useEffect } from "react"
import User from './User'
import Paginator from '../common/Paginator/Paginator'
import { usersType } from '../../types/type'
import { UsersSearchForm } from './UsersSearchForm'
import { filterType, requestUsers, actions, deleteFollow, postFollow } from '../../redux/users-reducer'
import { getPpageSize, getUsers, getTotalCount, getCurrentPage, getIsFeching, getFollowingProgress, getFilter } from '../../redux/users-selectors'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../common/Preloader'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'
// import { useQueryParam, StringParam } from 'use-query-params'

export const Users: FC = () => {

    const users = useSelector(getUsers)
    const pageSize = useSelector(getPpageSize)
    const totalCount = useSelector(getTotalCount)
    const currentPage = useSelector(getCurrentPage)
    const followingProgress = useSelector(getFollowingProgress)
    const isFeching = useSelector(getIsFeching)
    const filter = useSelector(getFilter)

    const dispath = useDispatch()
    const history = useHistory()

    const unfollow = (userid: num) => { dispath(deleteFollow(userid)) }
    const follow = (userid: num) => { dispath(postFollow(userid)) }

    const pageChenget = (pageNumber: num) => {
        dispath(requestUsers(pageNumber, pageSize, filter))
        dispath(actions.setCurrentPage(pageNumber))
    }

    const onFilterChanget = (filter: filterType) => {
        dispath(requestUsers(1, pageSize, filter))
    }

    useEffect(() => { dispath(requestUsers(currentPage, pageSize, filter)) }, [])
    // const [term] = useQueryParam('term', StringParam)
    // const [friend] = useQueryParam('friend', StringParam) 
    // const [page] = useQueryParam('page', StringParam) 

    useEffect(() => {

        const parsed = queryString.parse(history.location.search)
        console.log(parsed)
    
        let actualPage = currentPage
        let actualFilter = filter
    
        if (parsed.page) actualPage = +parsed.page

        if (parsed.term) actualFilter = {...actualFilter, term: parsed.term as str }

        if (parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false }
        
        dispath(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        history.push({
            pathname: '/users',
            search: `${filter.term && `&term=${filter.term}`}${filter.friend !== null ? `&friend=${filter.friend}` : ''}${currentPage !== 1 ? `&page=${currentPage}` : ''}`
        })
    }, [filter, currentPage])

    return <>
        {isFeching ? <Preloader /> : null}
        <div>
            <UsersSearchForm onFilterChanget={onFilterChanget} />
            USERS
            <div>
                <Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} pageChenget={pageChenget} portionSize={10} />
            </div>
            {users.map((u: usersType) => (<User u={u} followingProgress={followingProgress} deleteFollow={unfollow} postFollow={follow} key={u.id} />))}
        </div>
    </>
}