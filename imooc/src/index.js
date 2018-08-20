import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import reducers from './reducers'
import './config'
// import 'antd-mobile/dist/antd-mobile.css';
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './conpoment/authroute/authroute'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))
function Boss() {
    return <h2>BOSS页面</h2>
}
ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/login' component={Login}>登录</Route>
                <Route path='/register' component={Register}>注册</Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
