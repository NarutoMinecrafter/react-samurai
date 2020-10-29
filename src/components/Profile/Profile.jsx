import React from 'react';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './MyPost/ProfileInfo/ProfileInfo';


const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer /> 
        </div>
    )
}

export default Profile;