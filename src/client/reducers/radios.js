import { ADD_RADIO, UPDATE_RADIO_SONG } from '../actions'

const radio = (state = {}, action) => {
  switch (action.type) {
    case ADD_RADIO:
      return {
        id: action.id,
        title: action.title,
        image: action.image,
        song: action.song,
        stream: action.stream
      }

    default:
      return state
  }
}

const radios = (state = [], action) => {
  switch (action.type) {
    case ADD_RADIO:
      return [
        ...state,
        radio(undefined, action)
      ]

    case UPDATE_RADIO_SONG:
      if (state[action.index].song === action.song) {
        return state
      }

      state[action.index].song = action.song
      return [
        ...state
      ]

    default:
      return state
  }
}

export default radios
