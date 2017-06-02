/* eslint-disable react/jsx-boolean-value */

import React from 'react'
import PropTypes from 'prop-types'
import {ListItem} from 'material-ui/List'
// import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import { connect } from 'react-redux'

import SelectableList from '../components/SelectableList'
import { setActiveRadio } from '../actions'

const RadioList = ({ radios, activeRadio, onClick }) => {
  return (
    <SelectableList defaultValue={activeRadio}>
      {
        radios.map((radio, index) =>
          <ListItem
            key={index}
            value={index}
            leftAvatar={<Avatar src={radio.image} />}
            primaryText={radio.title}
            secondaryText={
              <p>{radio.song}</p>
            }
            secondaryTextLines={1}
            onTouchTap={() => { onClick(index) }}
          />
        )
      }
    </SelectableList>
  )
}

RadioList.propTypes = {
  radios: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (index) => {
      dispatch(setActiveRadio(index))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioList)
