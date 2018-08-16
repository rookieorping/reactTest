import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import App from './App'

import *as EventName from './redux'
const store = createStore(EventName.counter,
    compose(
        applyMiddleware(thunk),
        // window.devToolsExtension?window.devToolsExtension():()=>{}
        )
    )
function render() {
    ReactDom.render(<App store={store} eventName={EventName}/>,document.getElementById('root'))
}
render()
store.subscribe(render)