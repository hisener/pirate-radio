import React from 'react'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from '../configureStore'
import App from './App'

let preloadedState = {
  radios: [
    {
      'id': '16534',
      'title': 'Capital London',
      'image': 'https://cdn-radiotime-logos.tunein.com/s16534q.png',
      'song': 'Unknown',
      'stream': 'http://media-the.musicradio.com/CapitalMP3'
    }, {
      'id': '126794',
      'title': '181.FM UK Top 40',
      'image': 'https://cdn-radiotime-logos.tunein.com/s126794q.png',
      'song': 'Unknown',
      'stream': 'http://listen.181fm.com/181-uktop40_128k.mp3?noPreRoll=true'
    }
  ]
}

const store = configureStore(preloadedState)
injectTapEventPlugin()

export default class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
