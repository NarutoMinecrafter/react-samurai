import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux'
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import WithAuthRederect from '../../HOC/WithAuthRederect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.autorizedUserId
        this.props.getStatus(userId)
        this.props.getProfile(userId)
    }
    
    render() {
        return (
            <Profile updateStatus={this.props.updateStatus} profile={this.props.profile} status={this.props.status}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})
debugger
export default compose(connect(mapStateToProps, {getProfile, getStatus, updateStatus}), withRouter, /*WithAuthRederect*/)(ProfileContainer)

// withRouter