import React from 'react'
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileData = props => (
    <div className={s.desc} >
        <div>
            <div>{props.profile.fullName}</div>
            {props.status && <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />}
            <br />
            {props.profile.aboutMe && <div><b>Description:</b> {props.profile.aboutMe}</div>}
            <br />
            {props.profile.lookingForAJob ? <div><b>Looking for a job{props.profile.lookingForAJobDescription && ':'}</b> </div> : <div>Not looking for a job</div>}
            <div>{props.profile.lookingForAJobDescription}</div>
            <br/>
            {props.isOwner && <button onClick={() => props.setEditMode(true)} >edit</button>}
        </div>
        <div>
            <div><b>Contacts:</b></div>
            <ul>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts key={key} contact={key} contactValue={props.profile.contacts[key]} />
                })}
            </ul>
        </div>
    </div>
)

const Contacts = ({ contact, contactValue }) => contactValue && <li><a href={contactValue} >{contact}</a></li>


export default ProfileData