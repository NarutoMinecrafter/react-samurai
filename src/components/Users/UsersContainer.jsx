import React from 'react'
import Users from './Users';
import { connect } from 'react-redux'
import { setCurrentPage, requestUsers, deleteFollow, postFollow } from '../../redux/users-reducer'
import Preloader from '../common/Preloader';
import { getPpageSize, getUsers, getTotalCount, getCurrentPage, getIsFeching, getFollowingProgress } from '../../redux/users-selectors';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    pageChenget = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            { this.props.isFeching ? <Preloader /> : null}
            <Users {...this.props} pageChenget={this.pageChenget} />
        </>
    }
}

const mapStateToProps = state => ({
    users: getUsers(state),
    pageSize: getPpageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFeching: getIsFeching(state),
    followingProgress: getFollowingProgress(state),
})

const mapDispatchToProps = { setCurrentPage, requestUsers, deleteFollow, postFollow }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;

//reselect