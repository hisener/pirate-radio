/* eslint-disable react/jsx-boolean-value */

import React from 'react'
import PropTypes from 'prop-types'
import { Media, Player } from 'react-media-player'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import PlayIcon from 'material-ui/svg-icons/av/play-arrow'
import PauseIcon from 'material-ui/svg-icons/av/pause'

class CircleMediaPlayer extends React.Component {
  componentWillMount () {
    this.props.update()
    this.timer = setInterval(this.props.update, 30000)
  }

  componentWillUpdate () {
    this.props.update()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

// src='https://www.youtube.com/watch?v=papuvlVeZg8'
// vendor='youtube'
// onProgress={({ currentTime, duration }) => console.log(currentTime, duration) }

  render () {
    return (
      <Media>
        {({ isPlaying, playPause }) =>
          <div>
            <Player
              style={{display: 'none'}}
              src={this.props.src}
              vendor='audio'
              autoPlay={true}
            />
            <FloatingActionButton onClick={() => playPause()}>
              { isPlaying
                  ? <PauseIcon />
                  : <PlayIcon />
              }
            </FloatingActionButton>
          </div>
        }
      </Media>
    )
  }
}

CircleMediaPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired
}

export default CircleMediaPlayer
