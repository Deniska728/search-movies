import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from './rootSaga'
import rootReducer from './rootReducer'
import Routes from './Routes'

import 'styles/index.scss'

const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
)  

sagaMiddleware.run(rootSaga)

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />   
    </ConnectedRouter>
  </Provider>
), document.getElementById('app'))