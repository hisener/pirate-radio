import express from 'express'
import apicache from 'apicache'

import { getStation, getPlayingNow } from '../../api/tunein'

let cache = apicache.middleware
let apiRouter = express.Router()

/**
 * Get Station route
 * Cache for 5 minutes
 * @see server/api/tunein.js#getStation
 */
apiRouter.get('/station/:id', cache('5 minutes'), function (req, res) {
  getStation(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

/**
 * Get playing now route
 * Cache for 15 seconds
 * @see server/api/tunein.js#getPlayingNow
 */
apiRouter.get('/playing-now/:id', cache('15 seconds'), function (req, res) {
  getPlayingNow(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = apiRouter
