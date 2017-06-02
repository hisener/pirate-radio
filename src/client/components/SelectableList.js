import React from 'react'
import PropTypes from 'prop-types'
import {List, makeSelectable} from 'material-ui/List'

class SelectableList extends React.Component {
  constructor (props) {
    super(props)

    this.handleRequestChange = this.handleRequestChange.bind(this)
  }

  componentWillMount () {
    this.setState({
      selectedIndex: this.props.defaultValue
    })
  }

  handleRequestChange (event, index) {
    this.setState({
      selectedIndex: index
    })
  }

  render () {
    let ComposedComponent = makeSelectable(List)
    return (
      <ComposedComponent
        value={this.state.selectedIndex}
        onChange={this.handleRequestChange}
      >
        {this.props.children}
      </ComposedComponent>
    )
  }
}

SelectableList.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.number.isRequired
}

export default SelectableList
