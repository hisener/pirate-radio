import http from 'http'
import express from 'express'
import path from 'path'
import compression from 'compression'

import { port } from '../config'
import routes from './routes'
import middlewares from './middlewares'

const app = express()

// Set the view engine
app.set('view engine', 'pug')
// Set the views folder
app.set('views', path.join(__dirname, 'views'))

// compress all requests
app.use(compression({
  filter: () => true
}))

app.use(express.static(path.join(__dirname, '../../static')))
app.use('/', routes)

// catch 404 and forward to error handler
app.use(middlewares.notFound)

// error handler
app.use(middlewares.internalError)

// create http server using express app.
const server = http.createServer(app)
server.listen(port, () => {
  console.log(`Server listening on ${port}`)
})

export default server
