import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import ViewListIcon from 'material-ui/svg-icons/action/view-list'
import ThumbDownIcon from 'material-ui/svg-icons/action/thumb-down'
import SettingsIcon from 'material-ui/svg-icons/action/settings'

import RadioList from './RadioList'
import AddRadio from './AddRadio'

class Content extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      slideIndex: 0
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value) {
    this.setState({
      slideIndex: value
    })
  }

  render () {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style={{paddingTop: 5}}
        >
          <Tab icon={<ViewListIcon />} value={0} />
          <Tab icon={<ThumbDownIcon />} value={1} />
          <Tab icon={<SettingsIcon />} value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <RadioList />
            <AddRadio />
          </div>
          <div>
            slide n°2
          </div>
          <div>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

Content.propTypes = {

}

export default Content
