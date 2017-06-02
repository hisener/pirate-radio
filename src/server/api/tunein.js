import fetch from 'isomorphic-fetch'

const baseAddress = 'http://tunein.com/tuner/tune/?tuneType=Station&stationId='

/**
 * Get a station data.
 * @param  {number} stationId tunein id of the station
 * @return {Promise}          a Promise object
 */
export function getStation (stationId) {
  return new Promise((resolve, reject) => {
    fetch(baseAddress + stationId)
      .then(response => response.json())
      .then(json => {
        let result = {
          id: stationId,
          title: json.ShareData.title,
          image: json.ShareData.image,
          song: (json.SongPlayingTitle) ? json.SongPlayingTitle : 'Unknown'
        }
        getStream(json.StreamUrl)
          .then(stream => {
            result.stream = stream
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Get the stream address from the related url.
 * @param  {string}   url the api url
 * @return {Promise}  a Promise object
 */
function getStream (url) {
  if (!url.startsWith('http')) {
    url = 'http:' + url
  }

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        resolve(json.Streams[0].Url)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Get the playing song of the station.
 * @param  {number} stationId tunein id of the station
 * @return {Promise}          a Promise object
 */
export function getPlayingNow (stationId) {
  return new Promise((resolve, reject) => {
    fetch(baseAddress + stationId)
      .then(response => response.json())
      .then(json => {
        let result = {
          id: stationId,
          song: (json.SongPlayingTitle) ? json.SongPlayingTitle : 'Unknown'
        }
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  })
}
