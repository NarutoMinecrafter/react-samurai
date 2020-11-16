import React from 'react';
import Preloader from '../../../common/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    if  (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src='https://izobrazhenie.net/photo/0-0/2461_713574610.jpg' className={s.cap} alt='' />
            <div className={s.user}>
                <div className={s.ava} >
                    <img src={props.profile.photos.large} alt='' />
                </div>
                <div className={s.desc} >
                    <div>
                        <div>{props.profile.fullName}</div>
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                        <br/>
                        <div>Описание: {props.profile.aboutMe}</div>
                        <br/>
                        {props.profile.lookingForAJob ? <div>Ищу работу: </div> : <div>Не ищу работу: </div>}
                        <div>{props.profile.lookingForAJobDescription}</div>
                    </div>
                    <div>
                        <div>Контакты:</div>
                            <ul>
                                {props.profile.contacts.facebook && <li><a href={props.profile.contacts.facebook} >facebook</a></li>}
                                {props.profile.contacts.website && <li><a href={props.profile.contacts.website} >website</a></li>}
                                {props.profile.contacts.vk && <li><a href={props.profile.contacts.vk} >vk</a></li>}
                                {props.profile.contacts.twitter && <li><a href={props.profile.contacts.twitter} >twitter</a></li>}
                                {props.profile.contacts.instagram && <li><a href={props.profile.contacts.instagram} >instagram</a></li>}
                                {props.profile.contacts.youtube && <li><a href={props.profile.contacts.youtube} >youtube</a></li>}
                                {props.profile.contacts.github && <li><a href={props.profile.contacts.github} >github</a></li>}
                                {props.profile.contacts.mainLink && <li><a href={props.profile.contacts.mainLink} >mainLink</a></li>}
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;