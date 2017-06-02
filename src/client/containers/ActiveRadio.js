import { connect } from 'react-redux'

import Radio from '../components/Radio'
import { updateRadioSong } from '../actions'

const mapStateToProps = (state, ownProps) => {
  let index = state.activeRadio
  return {
    ...state.radios[index]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: () => dispatch(updateRadioSong())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radio)
