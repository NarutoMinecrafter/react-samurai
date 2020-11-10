import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const WithAuthRederect = (Component) => {
    const RederectComponent = (props) => {
    if (!props.isAuth) return <Redirect to='login' />
    return <Component {...props} />
    }

    return connect(mapStateToProps)(RederectComponent)

}

export default WithAuthRederect