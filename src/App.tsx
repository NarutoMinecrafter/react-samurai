import React, { useEffect } from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
// import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { HashRouter, BrowserRouter, Router, Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Friends from './components/Friends/Friends'
import {Login} from './components/Login/Login'
import { connect } from 'react-redux'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader'
import store from './redux/redux-store'
import { Provider } from 'react-redux'
import WithSuspense from './HOC/WithSuspense'
import { AppStateType } from './redux/redux-store'
import {Users} from './components/Users/Users'
import clsx from 'clsx'
import {useTheme} from '@material-ui/core/styles'
import {Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, 
  ListItem, ListItemIcon, ListItemText, Container} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MailIcon from '@material-ui/icons/Mail'
import HomeIcon from '@material-ui/icons/Home'                                                                                                                                                                                                                                                                                                                                                                                                                                                       
import GroupIcon from '@material-ui/icons/Group'
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList'
import PersonIcon from '@material-ui/icons/Person'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import SettingsIcon from '@material-ui/icons/Settings'
import {useStyles} from './useStyles'
import { NavLink } from 'react-router-dom'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

const element = <h1>Привет, мир!</h1>

class App extends React.Component<MapPropsType & DispathPropsType> {

  errorEvent = (e: PromiseRejectionEvent) => {
    // alert(promiseRejectEvent.reason)
    console.warn("Внимание: Необработанная ошибка Promise. Позор вам! Причина: " + e.reason)
  }


  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.errorEvent)
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.errorEvent)
  }

  render() {

    if (!this.props.initialized) return <Preloader />

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
            <Route path='/users' render={() => <Users />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='*' render={() => <>404 NOT FOUND <br />{element}</>} />
          </Switch>
        </div>
      </div>
    </div>
  }
}

const App2: React.FC<MapPropsType & DispathPropsType> = (props) => {

  const errorEvent = (e: PromiseRejectionEvent) => {
    // alert(promiseRejectEvent.reason)
    console.warn("Внимание: Необработанная ошибка Promise. Позор вам! Причина: " + e.reason)
  }

  useEffect(() => {
    props.initializeApp()
    window.addEventListener("unhandledrejection", errorEvent)
  }, [])

  useEffect(() => {
    window.removeEventListener("unhandledrejection", errorEvent)
  })

  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        }, classes.appBarMy)}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={`${classes.toolbar} ${classes.backDarcGray}`}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className={classes.white} /> : <ChevronLeftIcon className={classes.white}/>}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button >
            <NavLink to='/profile' > 
              <ListItemIcon> 
                <HomeIcon className={classes.white} /> 
              </ListItemIcon>
              Profile
            </NavLink>
          </ListItem>
          <ListItem button >
            <NavLink to='/messages' >
              <ListItemIcon> 
                <MailIcon className={classes.white} />
              </ListItemIcon>
              Messages
            </NavLink>
          </ListItem>
          <ListItem button >
            <NavLink to='/users' >
              <ListItemIcon> 
                <GroupIcon className={classes.white} />
              </ListItemIcon>
              Users
            </NavLink>
          </ListItem>
          <ListItem button >
            <NavLink to='/news' >
              <ListItemIcon> 
                <FeaturedPlayListIcon className={classes.white} />
              </ListItemIcon>
              News
            </NavLink>
          </ListItem>
          <ListItem button >
            <NavLink to='/friends' >
              <ListItemIcon> 
                <PersonIcon className={classes.white} />
              </ListItemIcon>
              Friends
            </NavLink>
          </ListItem>
          <ListItem button >
            <NavLink to='/music' >
              <ListItemIcon> 
                <LibraryMusicIcon className={classes.white} />
              </ListItemIcon>
              Music
            </NavLink>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button >
            <NavLink to='/settings' >
              <ListItemIcon> 
                <SettingsIcon className={classes.white} />
              </ListItemIcon>
              Setings
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Switch>
            <Route exact path='/'><Redirect from='/' to='/login' /></Route>
            <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)} />
            <Route path='/messages' render={WithSuspense(DialogsContainer)} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/friends' render={() => <Friends />} />
            <Route path='/users' render={() => <Users />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='*' render={() => <>404 NOT FOUND <br />{element}</>} />
          </Switch>
      </main>
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => ({ initialized: state.app.initialized, navbar: state.navbar })

let AppContainer = connect(mapStateToProps, { initializeApp })(App2)

const MainApp: React.FC = () => (
  <BrowserRouter>
    <Provider store={store} >
      {/* <Router> */}
        <QueryParamProvider ReactRouterRoute={Route}>
          <AppContainer />
        </QueryParamProvider>
      {/* </Router>  */}
    </Provider>
  </BrowserRouter>
)

export default MainApp

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispathPropsType = { initializeApp: () => void }

// export default compose(withRouter, connect(null, { getMeThunk }))(App)
// Псевдо истина/ложь

// classnames documentation

/*
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon className={classes.white} /> : <MailIcon className={classes.white} />}</ListItemIcon>
              <ListItemText primary={text} className={classes.white} />
            </ListItem>
          ))}*/