import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader';
import store from './redux/redux-store'
import { Provider } from 'react-redux';
import WithSuspense from './HOC/WithSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {

  errorEvent = (promiseRejectEvent) => {
      alert(promiseRejectEvent.reason)
      console.warn("Внимание: Необработанная ошибка Promise. Позор вам! Причина: "+ promiseRejectEvent.reason);
    }
  

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.errorEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.errorEvent);
  }

  render() {

    if(!this.props.initialized) return <Preloader/>

    return <div className='bcg'>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar state={this.props.navbar} />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/'><Redirect from='/' to='/login' /></Route>
            <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)} />
            <Route path='/messages' render={WithSuspense(DialogsContainer)} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/friends' render={() => <Friends />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='*' render={() => <>404 NOT FOUND</>} />
          </Switch>
        </div>
      </div>
    </div>
  }

}

const mapStateToProps = (state) => ({initialized: state.app.initialized, navbar: state.navbar})

let AppContainer = connect(mapStateToProps, { initializeApp })(App)

const MainApp = () => (
  <BrowserRouter>
    <Provider store={store} >
        <AppContainer/>
    </Provider>
</BrowserRouter>
)

export default MainApp

// export default compose(withRouter, connect(null, { getMeThunk }))(App)
// Псевдо истина/ложь

// classnames documentation