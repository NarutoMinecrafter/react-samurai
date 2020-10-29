import React  from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unFollowAC } from '../../redux/users-reducer'
import Users from './Users'

const mapStateToProps = (state) => {
    // console.log(state)
    // debugger
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid))
        },
        unfollow: (userid) => {
            dispatch(unFollowAC(userid))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        } 
    }
} 

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;