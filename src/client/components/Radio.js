import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardActions, CardHeader } from 'material-ui/Card'

import CircleMediaPlayer from './CircleMediaPlayer'

/**
 * Radio Component that contains information about radio and its player.
 * @param {string} id tunein id of the radio
 * @param {string} title title of the radio
 * @param {string} image avatar image of the radio
 * @param {string} song song that is playing now on the radio
 * @param {string} stream stream url of the radio
 * @param {function} update periodic update function
 */
const Radio = ({ id, title, image, song, stream, update }) => (
  <Card>
    <CardHeader
      title={title}
      subtitle={song}
      avatar={image}
      style={{ overflowX: 'hidden' }}
    />
    <CardActions>
      <CircleMediaPlayer src={stream} update={update} />
    </CardActions>
  </Card>
)

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  stream: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired
}

export default Radio
