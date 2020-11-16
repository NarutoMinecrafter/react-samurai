import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginisation } from '../../redux/auth-reducer';
import { required } from '../../utils/validator';
import { Input } from '../common/FormsControl/FormsControl';
import  s from '../common/FormsControl/FormsControl.module.css';

const LoginForm = (props) => {
    const reset = () => setTimeout(props.reset, 1)
    return (
        <form onSubmit={props.handleSubmit} >{}
            <div><Field component={Input} name='email' placeholder='Login' validate={[required]} /></div>
            <div><Field component={Input} name='password' placeholder='Password' validate={[required]} /></div>
            <div><Field component={Input} name='rememberMe' type="checkbox" validate={[required]} />remember me</div>
            {/* <div><Field component='input' name='captcha' type="checkbox" />captcha</div> */}
            {props.error && <div className={s.errorForm} >{props.error}</div>}
            <div><button type="submit" onClick={reset}>Отправить форму</button></div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginisation(formData)
        
    }

    if (props.isAuth) return <Redirect to='/profile' />

    return <>
        <h1><center>Login</center></h1>
        <ReduxLoginForm onSubmit={onSubmit} />
    </>
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {loginisation})(Login)