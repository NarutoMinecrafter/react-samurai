import React from 'react';
import Header from './Header';
import { connect } from 'react-redux'
import { unLoginisation } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

class HeaderContainer extends React.Component<MSTP & MDTP> {
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, { unLoginisation })(HeaderContainer)

type MSTP = {
    login: str | null
    isAuth: bool
}

type MDTP = { unLoginisation: () => void }