import React, { useState } from 'react';
import Preloader from '../../../common/Preloader';
import s from './ProfileInfo.module.css';
import defaultAvatar from '../../../img/userAvatar.jpg'
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';

// import cn from 'classnames';
// <div className={cn(s.user, s.ban, s.lol)}></div>

const ProfileInfo = (props) => {
    
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onSubmit = (formData) => {
        props.savePofileDescription(formData).then(() => setEditMode(false))
    }

    let photoSelected = e => {
        if (e.target.files.length) props.uploadPhoto(e.target.files[0])
    }

    return (
        <div>
            <img src='https://izobrazhenie.net/photo/0-0/2461_713574610.jpg' className={s.cap} alt='' />
            <div className={s.user}>
                <div className={s.ava} >
                    <img src={props.profile.photos.large || defaultAvatar} alt='' />
                    {props.isOwner && <input type='file' onChange={photoSelected} />}
                </div>
                {editMode   ? <ProfileDataForm profile={props.profile} setEditMode={setEditMode} onSubmit={onSubmit} initialValues={props.profile} /> 
                            : <ProfileData {...props} setEditMode={setEditMode} />}
            </div>
        </div>
    )
}

export default ProfileInfo;