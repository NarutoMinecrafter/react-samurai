import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../redux/redux-store';

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

function WithAuthRederect <T>(Component: React.ComponentType<T>){
    const RederectComponent: React.FC<{} & MSPType> = (props) => {
        let { isAuth, ...restProps } = props 
        if (!isAuth) return <Redirect to='login' />
        return <Component {...restProps as T} />
    }

    return connect<MSPType, {}, T, AppStateType>(mapStateToProps, {})(RederectComponent)

}

export default WithAuthRederect

type MSPType = {isAuth: bool}