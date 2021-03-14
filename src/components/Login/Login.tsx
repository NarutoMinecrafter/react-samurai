import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { loginisation } from '../../redux/auth-reducer'
import { required } from '../../utils/validator'
import { Input } from '../common/FormsControl/FormsControl'
import  s from '../common/FormsControl/FormsControl.module.css'
import { AppStateType } from '../../redux/redux-store'
import { loginFormDataType } from '../../types/type'

type MyPropsType = {
    CapthaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<loginFormDataType, MyPropsType> & MyPropsType> = (props) => {
    const reset = () => setTimeout(props.reset, 1)
    return (
        <form onSubmit={props.handleSubmit} >
            <div><Field component={Input} name='email' placeholder='Login' validate={[required]}  /></div>
            <div><Field component={Input} name='password' placeholder='Password' validate={[required]} /></div>
            <div><Field component={Input} name='rememberMe' type="checkbox" validate={[required]} />remember me</div>
            {props.CapthaUrl && <img src={props.CapthaUrl} alt='' />}
            {props.CapthaUrl && <div><Field component={Input} name='captcha' placeholder='input text from image' validate={[required]} /></div>}
            {props.error && <div className={s.errorForm} >{props.error}</div>}
            <div><button type="submit" onClick={reset}>Отправить форму</button></div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<loginFormDataType, MyPropsType>({ form: 'login'})(LoginForm)

export const Login: React.FC = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const CapthaUrl = useSelector((state: AppStateType) => state.auth.CapthaUrl)
    const dispath = useDispatch()

    const onSubmit = (formData: loginFormDataType) => {
        dispath(loginisation(formData))
    }

    if (isAuth) return <Redirect to='/profile' />

    return <>
        <h1 className="center" >Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} CapthaUrl={CapthaUrl}/>
    </>
}

// mcdonaldsman9000@gmail.com