import React from 'react'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import { profileType, contactsType } from '../../../types/type'

const ProfileData: React.FC<PropsType> = ({ profile, ...props }) => {
    if (profile !== null) {
        return (
            <div className={s.desc} >
                <div>
                    <div>{profile.fullName}</div>
                    {props.status && <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />}
                    <br />
                    {profile.aboutMe && <div><b>Description:</b> {profile.aboutMe}</div>}
                    <br />
                    {profile.lookingForAJob ? <div><b>Looking for a job{profile.lookingForAJobDescription && ':'}</b> </div> : <div>Not looking for a job</div>}
                    <div>{profile.lookingForAJobDescription}</div>
                    <br />
                    {props.isOwner && <button onClick={() => props.setEditMode(true)} >edit</button>}
                </div>
                <div>
                    <div><b>Contacts:</b></div>
                    <ul>
                        {Object.keys(profile.contacts).map(key => {
                            return <Contacts key={key} contact={key} contactValue={profile.contacts[key as keyof contactsType]} />
                        })}
                    </ul>
                </div>
            </div>
        )
    } else return <></>
}

const Contacts: React.FC<ContactsType> = ({ contact, contactValue }) => contactValue ? <li><a href={contactValue} >{contact}</a></li> : <></>


export default ProfileData

type PropsType = {
    profile: Null<profileType>
    isOwner: bool
    updateStatus: (status: str) => void
    status: str | null
    setEditMode: (arg: bool) => void
}
type ContactsType = { contact: str, contactValue: str | null }