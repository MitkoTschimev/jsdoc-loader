var jsdoc = require('jsdoc-api');

// Identity loader
module.exports = function (input, map) {
  if (this.cacheable) {
    this.cacheable();
  }
  var callback = this.async();

  jsdoc.explain({
    source: input,
    configure: process.cwd() + '/jsdoc.conf'
  }).then(function () {
    return callback(null, input, map);
  }).catch(function (error) {
    return callback(error);
  });

  return input;
};
