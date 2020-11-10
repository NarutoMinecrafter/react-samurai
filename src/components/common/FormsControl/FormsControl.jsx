import React from 'react'
import s from './FormsControl.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError && s.error} >   
            <textarea {...input} {...props} ></textarea>
            <br/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError && s.error} >   
            <input {...input} {...props} />
            <br/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
} 