import React from 'react'
import MyPostContainer from './MyPost/MyPostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { AppStateType } from '../../redux/redux-store'
import { useSelector, useDispatch } from 'react-redux'
import { updateStatus, uploadPhoto, savePofileDescription } from '../../redux/profile-reducer'
import { profileType } from '../../types/type'

const Profile: React.FC<{ isOwner: bool }> = (props) => {

    const profile = useSelector((state: AppStateType) => state.profilePage.profile)
    const status = useSelector((state: AppStateType) => state.profilePage.status)
    const dispatch = useDispatch()

    const UpdateStatus = (status: str) => { dispatch(updateStatus(status)) }
    const UploadPhoto = (file: File) => { dispatch(uploadPhoto(file)) }
    const SavePofileDescription = (desc: profileType) => { dispatch(savePofileDescription(desc)) }

    return <div>
        <ProfileInfo
            profile={profile}
            status={status}
            updateStatus={UpdateStatus}
            uploadPhoto={UploadPhoto}
            savePofileDescription={SavePofileDescription}
            isOwner={props.isOwner}
        />
        <MyPostContainer />
    </div>
}

export default Profile