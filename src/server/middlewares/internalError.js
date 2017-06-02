import { isProd } from '../../config'

/**
 * Internal error middleware
 * @param  {Object}   err  error object
 * @param  {Object}   req  request object
 * @param  {Object}   res  response object
 * @param  {Function} next next middleware
 */
export default function internalError (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: (isProd) ? {} : err
  })
}
