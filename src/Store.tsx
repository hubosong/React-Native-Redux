import { createStore } from 'redux'
import { mainReducer } from './stores/Reducers'

export const Store = createStore(mainReducer)