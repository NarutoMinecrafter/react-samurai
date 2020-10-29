import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store'
import { Provider } from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
            <App store={store} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



serviceWorker.unregister();

// bind почитать
// чистые функции

// Чистая функция - функция которая обязательно отдаёт данные, а также принимает данные 

// иденпотентность и детерменированность имьютабельность