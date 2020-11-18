import React, { useState, useEffect } from 'react'

const ProfileStatusWithHooks = props => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => setStatus(props.status), [props.status])

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = e => setStatus(e.currentTarget.value)

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