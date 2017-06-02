import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import persistState from 'redux-localstorage'

import { isProd } from '../config'
import rootReducer from './reducers'

// if development use redux dev tools
const composeEnhancers = isProd
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore (preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware),
      persistState()  // use local storage for persistence
    )
  )
}
