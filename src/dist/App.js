"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var HeaderContainer_1 = require("./components/Header/HeaderContainer");
var Navbar_1 = require("./components/Navbar/Navbar");
// import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
var react_router_dom_1 = require("react-router-dom");
var use_query_params_1 = require("use-query-params");
var News_1 = require("./components/News/News");
var Music_1 = require("./components/Music/Music");
var Settings_1 = require("./components/Settings/Settings");
var Friends_1 = require("./components/Friends/Friends");
var Login_1 = require("./components/Login/Login");
var react_redux_1 = require("react-redux");
var app_reducer_1 = require("./redux/app-reducer");
var Preloader_1 = require("./components/common/Preloader");
var redux_store_1 = require("./redux/redux-store");
var react_redux_2 = require("react-redux");
var WithSuspense_1 = require("./HOC/WithSuspense");
var Users_1 = require("./components/Users/Users");
var clsx_1 = require("clsx");
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var Menu_1 = require("@material-ui/icons/Menu");
var ChevronLeft_1 = require("@material-ui/icons/ChevronLeft");
var ChevronRight_1 = require("@material-ui/icons/ChevronRight");
var Mail_1 = require("@material-ui/icons/Mail");
var Home_1 = require("@material-ui/icons/Home");
var Group_1 = require("@material-ui/icons/Group");
var FeaturedPlayList_1 = require("@material-ui/icons/FeaturedPlayList");
var Person_1 = require("@material-ui/icons/Person");
var LibraryMusic_1 = require("@material-ui/icons/LibraryMusic");
var Settings_2 = require("@material-ui/icons/Settings");
var useStyles_1 = require("./useStyles");
var react_router_dom_2 = require("react-router-dom");
var DialogsContainer = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return require('./components/Dialogs/DialogsContainer'); }); });
var ProfileContainer = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return require('./components/Profile/ProfileContainer'); }); });
var element = react_1["default"].createElement("h1", null, "\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0438\u0440!");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.errorEvent = function (e) {
            // alert(promiseRejectEvent.reason)
            console.warn("Внимание: Необработанная ошибка Promise. Позор вам! Причина: " + e.reason);
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.errorEvent);
    };
    App.prototype.componentWillUnmount = function () {
        window.removeEventListener("unhandledrejection", this.errorEvent);
    };
    App.prototype.render = function () {
        if (!this.props.initialized)
            return react_1["default"].createElement(Preloader_1["default"], null);
        return react_1["default"].createElement("div", { className: 'bcg' },
            react_1["default"].createElement("div", { className: 'app-wrapper' },
                react_1["default"].createElement(HeaderContainer_1["default"], null),
                react_1["default"].createElement(Navbar_1["default"], { state: this.props.navbar }),
                react_1["default"].createElement("div", { className: 'app-wrapper-content' },
                    react_1["default"].createElement(react_router_dom_1.Switch, null,
                        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/' },
                            react_1["default"].createElement(react_router_dom_1.Redirect, { from: '/', to: '/login' })),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: '/profile/:userId?', render: WithSuspense_1["default"](ProfileContainer) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: '/messages', render: WithSuspense_1["default"](DialogsContainer) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: '/news', render: function () { return react_1["default"].createElement(News_1["default"], null); } }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: '/music', render: function () { return react_1["default"].createElement(Music_1["default"], null); } }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: '/settings', render: function () { return react_1["default"].createElement(Settings_1["default"], null); } }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: '/friends', render: function () { return react_1["default"].createElement(Friends_1["default"], null); } }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: '/users', render: function () { return react_1["default"].createElement(Users_1.Users, null); } }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: '/login', render: function () { return react_1["default"].createElement(Login_1.Login, null); } }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: '*', render: function () { return react_1["default"].createElement(react_1["default"].Fragment, null,
                                "404 NOT FOUND ",
                                react_1["default"].createElement("br", null),
                                element); } })))));
    };
    return App;
}(react_1["default"].Component));
var App2 = function (props) {
    var _a, _b, _c, _d;
    var errorEvent = function (e) {
        // alert(promiseRejectEvent.reason)
        console.warn("Внимание: Необработанная ошибка Promise. Позор вам! Причина: " + e.reason);
    };
    react_1.useEffect(function () {
        props.initializeApp();
        window.addEventListener("unhandledrejection", errorEvent);
    }, []);
    react_1.useEffect(function () {
        window.removeEventListener("unhandledrejection", errorEvent);
    });
    var classes = useStyles_1.useStyles();
    var theme = styles_1.useTheme();
    var _e = react_1["default"].useState(false), open = _e[0], setOpen = _e[1];
    var handleDrawerOpen = function () {
        setOpen(true);
    };
    var handleDrawerClose = function () {
        setOpen(false);
    };
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(core_1.CssBaseline, null),
        react_1["default"].createElement(core_1.AppBar, { position: "fixed", className: clsx_1["default"](classes.appBar, (_a = {},
                _a[classes.appBarShift] = open,
                _a), classes.appBarMy) },
            react_1["default"].createElement(core_1.Toolbar, null,
                react_1["default"].createElement(core_1.IconButton, { color: "inherit", "aria-label": "open drawer", onClick: handleDrawerOpen, edge: "start", className: clsx_1["default"](classes.menuButton, (_b = {},
                        _b[classes.hide] = open,
                        _b)) },
                    react_1["default"].createElement(Menu_1["default"], null)),
                react_1["default"].createElement(core_1.Typography, { variant: "h6", noWrap: true }, "Mini variant drawer"))),
        react_1["default"].createElement(core_1.Drawer, { variant: "permanent", className: clsx_1["default"](classes.drawer, (_c = {},
                _c[classes.drawerOpen] = open,
                _c[classes.drawerClose] = !open,
                _c)), classes: {
                paper: clsx_1["default"]((_d = {},
                    _d[classes.drawerOpen] = open,
                    _d[classes.drawerClose] = !open,
                    _d))
            } },
            react_1["default"].createElement("div", { className: classes.toolbar + " " + classes.backDarcGray },
                react_1["default"].createElement(core_1.IconButton, { onClick: handleDrawerClose }, theme.direction === 'rtl' ? react_1["default"].createElement(ChevronRight_1["default"], { className: classes.white }) : react_1["default"].createElement(ChevronLeft_1["default"], { className: classes.white }))),
            react_1["default"].createElement(core_1.Divider, null),
            react_1["default"].createElement(core_1.List, null,
                react_1["default"].createElement(core_1.ListItem, { button: true },
                    react_1["default"].createElement(react_router_dom_2.NavLink, { to: '/profile' },
                        react_1["default"].createElement(core_1.ListItemIcon, null,
                            react_1["default"].createElement(Home_1["default"], { className: classes.white })),
                        "Profile")),
                react_1["default"].createElement(core_1.ListItem, { button: true },
                    react_1["default"].createElement(react_router_dom_2.NavLink, { to: '/messages' },
                        react_1["default"].createElement(core_1.ListItemIcon, null,
                            react_1["default"].createElement(Mail_1["default"], { className: classes.white })),
                        "Messages")),
                react_1["default"].createElement(core_1.ListItem, { button: true },
                    react_1["default"].createElement(react_router_dom_2.NavLink, { to: '/users' },
                        react_1["default"].createElement(core_1.ListItemIcon, null,
                            react_1["default"].createElement(Group_1["default"], { className: classes.white })),
                        "Users")),
                react_1["default"].createElement(core_1.ListItem, { button: true },
                    react_1["default"].createElement(react_router_dom_2.NavLink, { to: '/news' },
                        react_1["default"].createElement(core_1.ListItemIcon, null,
                            react_1["default"].createElement(FeaturedPlayList_1["default"], { className: classes.white })),
                        "News")),
                react_1["default"].createElement(core_1.ListItem, { button: true },
                    react_1["default"].createElement(react_router_dom_2.NavLink, { to: '/friends' },
                        react_1["default"].createElement(core_1.ListItemIcon, null,
                            react_1["default"].createElement(Person_1["default"], { className: classes.white })),
                        "Friends")),
                react_1["default"].createElement(core_1.ListItem, { button: true },
                    react_1["default"].createElement(react_router_dom_2.NavLink, { to: '/music' },
                        react_1["default"].createElement(core_1.ListItemIcon, null,
                            react_1["default"].createElement(LibraryMusic_1["default"], { className: classes.white })),
                        "Music"))),
            react_1["default"].createElement(core_1.Divider, null),
            react_1["default"].createElement(core_1.List, null,
                react_1["default"].createElement(core_1.ListItem, { button: true },
                    react_1["default"].createElement(react_router_dom_2.NavLink, { to: '/settings' },
                        react_1["default"].createElement(core_1.ListItemIcon, null,
                            react_1["default"].createElement(Settings_2["default"], { className: classes.white })),
                        "Setings")))),
        react_1["default"].createElement("main", { className: classes.content },
            react_1["default"].createElement("div", { className: classes.toolbar }),
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/' },
                    react_1["default"].createElement(react_router_dom_1.Redirect, { from: '/', to: '/login' })),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/profile/:userId?', render: WithSuspense_1["default"](ProfileContainer) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/messages', render: WithSuspense_1["default"](DialogsContainer) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/news', render: function () { return react_1["default"].createElement(News_1["default"], null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/music', render: function () { return react_1["default"].createElement(Music_1["default"], null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/settings', render: function () { return react_1["default"].createElement(Settings_1["default"], null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/friends', render: function () { return react_1["default"].createElement(Friends_1["default"], null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/users', render: function () { return react_1["default"].createElement(Users_1.Users, null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/login', render: function () { return react_1["default"].createElement(Login_1.Login, null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '*', render: function () { return react_1["default"].createElement(react_1["default"].Fragment, null,
                        "404 NOT FOUND ",
                        react_1["default"].createElement("br", null),
                        element); } })))));
};
var mapStateToProps = function (state) { return ({ initialized: state.app.initialized, navbar: state.navbar }); };
var AppContainer = react_redux_1.connect(mapStateToProps, { initializeApp: app_reducer_1.initializeApp })(App2);
var MainApp = function () { return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(react_redux_2.Provider, { store: redux_store_1["default"] },
        react_1["default"].createElement(use_query_params_1.QueryParamProvider, { ReactRouterRoute: react_router_dom_1.Route },
            react_1["default"].createElement(AppContainer, null))))); };
exports["default"] = MainApp;
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
