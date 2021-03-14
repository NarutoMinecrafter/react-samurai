import React from 'react'
import { WrappedFieldProps } from 'redux-form'
import s from './FormsControl.module.css'

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? s.error: ''} >   
            <textarea {...input} {...props} ></textarea>
            <br/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({ input, meta, ...props } ) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? s.error: ''} >   
            <input {...input} {...props} />
            <br/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
} 