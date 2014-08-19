/**
 * Creates a repeating timer and runs the function before launching timer
 *
 * @param  callback, milliseconds
 * @return setInterval instance
 */
module.exports = function(cb, milliseconds) {
  cb();
  return setInterval(cb, milliseconds);
}
