import React, { useEffect } from 'react'
import Profile from './Profile'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, getStatus } from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import WithAuthRederect from '../../HOC/WithAuthRederect'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'


type PropsType = {} & {} & RouteComponentProps<{ userId: str }>

const ProfileContainer: React.FC<PropsType> = (props) => {

    const autorizedUserId = useSelector((state: AppStateType) => state.auth.id)
    const dispatch = useDispatch()

    const GetProfile = (userid: num) => { dispatch(getProfile(userid)) }
    const GetStatus = (userid: num) => { dispatch(getStatus(userid)) }

    const refreshProfile = () => {
        let userId: num | null = +props.match.params.userId
        if (!userId) {
            userId = autorizedUserId
        }
        GetStatus(userId as num)
        GetProfile(userId as num)
    }

    useEffect(() => { refreshProfile() }, [])
    // useEffect(() => {  if ( props.match.params.userId !== prevProps.match.params.userId) refreshProfile() })
    // componentDidUpdate(prevProps: PropsType) { if ( this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile() }

    return <Profile isOwner={!props.match.params.userId} />
}
export default compose<React.ComponentType>(withRouter, WithAuthRederect)(ProfileContainer)