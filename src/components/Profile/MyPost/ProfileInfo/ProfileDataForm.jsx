import s from './ProfileInfo.module.css';
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../common/FormsControl/FormsControl';
import er from '../../../common/FormsControl/FormsControl.module.css'

const ProfileDatForm = ({profile, handleSubmit, setEditMode, error}) => <div>
    <div><button onClick={() => setEditMode(false)} >Cancel</button></div>
    {error && <div className={er.errorForm} >{error}</div>}
    <form onSubmit={handleSubmit} >
        <div className={s.desc} >
            <div>
                <div><Field component={Input} name='fullName' placeholder='Full Name' /></div>
                <br />
                <div><Field component={Textarea} name='aboutMe' placeholder='Description' /></div>
                <br />
                <div><Field component={Input} name='lookingForAJob' type='checkbox' />looking faor a job</div>
                <div><Field component={Textarea} name='lookingForAJobDescription' 
                            placeholder='looking faor a job description' /></div>
                <br/>
            </div>
            <div>
                <div><b>Contacts:</b></div>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contacts key={key} contact={key} contactValue={profile.contacts[key]} />
                    })}
            </div>
            <button >send</button>
        </div>
    </form>
</div>

const Contacts = ({contact}) => <div><Field component={Input} name={`contacts.${contact}`} placeholder={contact} /></div>

const ReduxProfileDatForm = reduxForm({ form: 'profile-data'})(ProfileDatForm)


export default ReduxProfileDatForm