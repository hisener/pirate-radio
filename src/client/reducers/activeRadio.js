import { SET_ACTIVE_RADIO } from '../actions'

const activeRadio = (state = 0, action) => {
  switch (action.type) {
    case SET_ACTIVE_RADIO:
      return action.index
    default:
      return state
  }
}

export default activeRadio
