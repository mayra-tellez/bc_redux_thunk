import { configureStore }  from '@reduxjs/toolkit'
import reducers from './reducers'
import state from './state'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default configureStore({reducer:reducers}, state, applyMiddleware(thunk))