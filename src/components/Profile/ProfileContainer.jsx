import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux'
import { getProfile, getStatus, updateStatus, uploadPhoto, savePofileDescription } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import WithAuthRederect from '../../HOC/WithAuthRederect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
        }
        this.props.getStatus(userId)
        this.props.getProfile(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if ( this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
    }
    
    render() {
        return (
            <Profile updateStatus={this.props.updateStatus} 
                profile={this.props.profile} 
                status={this.props.status} 
                isOwner={!this.props.match.params.userId} 
                uploadPhoto={this.props.uploadPhoto}
                savePofileDescription={this.props.savePofileDescription}
            />
        )
    }
}

let mapDispatchToProps = ({getProfile, getStatus, updateStatus, uploadPhoto, savePofileDescription})

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, WithAuthRederect)(ProfileContainer)

// withRouter