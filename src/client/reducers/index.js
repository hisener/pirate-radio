import { combineReducers } from 'redux'
import radios from './radios'
import activeRadio from './activeRadio'

export default combineReducers({
  radios,
  activeRadio
})
