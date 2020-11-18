import React from 'react';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './MyPost/ProfileInfo/ProfileInfo';


const Profile = props => <div>
            <ProfileInfo {...props} />
            <MyPostContainer /> 
        </div>;

export default Profile;