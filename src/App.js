import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
      <div className='bcg'>
        <div className='app-wrapper'>
          <Header/>
          <Navbar state={props.store.getState().navbar} />
          <div className='app-wrapper-content'>
            <Route path='/profile' render={ () => <Profile /> } />
            <Route path='/messages' render={ () => <DialogsContainer /> } />
            <Route path='/news' render={ () => <News /> } />
            <Route path='/music' render={ () => <Music /> } />
            <Route path='/settings' render={ () => <Settings /> } />
            <Route path='/friends' render={ () => <Friends /> } />
            <Route path='/users' render={ () => <UsersContainer/> } />
          </div>
        </div>
      </div>
  );
}

export default App;

// ctrl K F