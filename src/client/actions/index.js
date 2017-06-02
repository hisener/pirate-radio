import fetch from 'isomorphic-fetch'

export const ADD_RADIO = 'ADD_RADIO'
export const UPDATE_RADIO_SONG = 'UPDATE_RADIO_SONG'
export const SET_ACTIVE_RADIO = 'SET_ACTIVE_RADIO'

/**
 * Dispatch fetchRadio if the radio does not exits in the state.
 * @param {number} id tunein id of the radio
 * @return {function} dispatch function
 * @see fetchRadio
 */
export const addRadio = (id) => {
  return (dispatch, getState) => {
    if (getState().radios.filter(obj => obj.id === id).length === 0) {
      return dispatch(fetchRadio(id))
    }
  }
}

/**
 * Fetch data of the radio and dispatch ADD_RADIO.
 * @param {number} id tunein id of the radio
 * @return {function} dispatch function
 */
const fetchRadio = (id) => {
  return dispatch => {
    return fetch(window.location.href + 'api/station/' + id)
      .then(response => response.json())
      .then(json => dispatch({
        type: ADD_RADIO,
        ...json
      }))
      .catch(err => {
        console.error(err)
      })
  }
}

/**
 * Dispatch fetchPlayingNow with the id of the activeRadio.
 * @return {function} dispatch function
 * @see fetchPlayingNow
 */
export const updateRadioSong = () => {
  return (dispatch, getState) => {
    let id = getState().radios[getState().activeRadio].id
    return dispatch(fetchPlayingNow(id, getState().activeRadio))
  }
}

/**
 * Fetch current playing song of the radio.
 * @param {number} id     tunein id of the radio
 * @param  {number} index the index of the radio in the state
 * @return {function}     dispatch function
 */
const fetchPlayingNow = (id, index) => {
  return dispatch => {
    return fetch(window.location.href + 'api/playing-now/' + id)
      .then(response => response.json())
      .then(json => dispatch({
        type: UPDATE_RADIO_SONG,
        index: index,
        ...json
      }))
      .catch(err => {
        console.error(err)
      })
  }
}

/**
 * Sets the active radio.
 * @param {number} index the index of the selected radio in the state
 */
export const setActiveRadio = (index) => {
  return {
    type: SET_ACTIVE_RADIO,
    index: index
  }
}
