import React from 'react'
import Users from './Users';
import { connect } from 'react-redux'
import { setCurrentPage, getUsers, deleteFollow, postFollow } from '../../redux/users-reducer'
import Preloader from '../common/Preloader';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    pageChenget = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            { this.props.isFeching ? <Preloader/> : null}
            <Users {...this.props} pageChenget={this.pageChenget} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFeching: state.usersPage.isFeching,
        followingProgress: state.usersPage.followingProgress
    }
}

const mapDispatchToProps = {  setCurrentPage, getUsers, deleteFollow, postFollow }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;