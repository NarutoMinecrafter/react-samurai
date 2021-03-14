import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainApp from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<MainApp/>,document.getElementById('root'))

serviceWorker.unregister()

// bind почитать
// чистые функции

// Чистая функция - функция которая обязательно отдаёт данные, а также принимает данные 

// иденпотентность и детерменированность имьютабельность

// shouldComponentUpdate
// PureComponent
// React.memo