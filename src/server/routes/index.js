import express from 'express'
import api from './api'

const router = express.Router()

/**
 * Index route
 */
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Pirate Radio',
    desc: 'Initial description of Pirate Radio' // TODO: description meta
  })
})

// Use api module under /api route
router.use('/api', api)

module.exports = router
