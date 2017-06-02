/* eslint-disable react/jsx-boolean-value */

import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { connect } from 'react-redux'
import { addRadio } from '../actions'

const AddRadio = ({ onClick }) => {
  let textField
  return (
    <div>
      <TextField
        id='add-radio-text-field'
        hintText='TuneIn ID'
        ref={node => {
          textField = node
        }}
      />
      <FloatingActionButton mini={true} onTouchTap={e => {
        e.preventDefault()
        if (!textField.input.value.trim()) {
          return
        }
        onClick(textField.input.value)
        textField.input.value = ''
      }}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
}

AddRadio.propTypes = {
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (id) => {
      dispatch(addRadio(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRadio)
