import React, { useState, useEffect, ChangeEvent } from 'react'

const ProfileStatusWithHooks: React.FC<PropsType> = props => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => setStatus(props.status), [props.status])

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

    return(
        <div>
        {!editMode
            ? <div><span onDoubleClick={() => setEditMode(true)} ><b>Status:</b> {props.status}</span></div>
            : <div><input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode} /></div>
        }
    </div>
    )
}

export default ProfileStatusWithHooks 

type PropsType = {
    status: str
    updateStatus: (status: str) => void
}