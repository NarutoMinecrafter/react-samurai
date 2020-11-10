import React from 'react';
import Header from './Header';
import { connect } from 'react-redux'
import { getMeThunk, unLoginisation } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getMeThunk()
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
console.log(mapStateToProps)

export default connect(mapStateToProps, {getMeThunk, unLoginisation})(HeaderContainer)