/**
 * Not found middleware
 * @param  {Object}   req  request object
 * @param  {Object}   res  response object
 * @param  {Function} next next middleware
 */
export default function notFound (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
}
