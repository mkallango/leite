'use strict'

const { defaults } = require('underscore')
const racional = require('../racional')

module.exports = (options = {}) => {
  options = defaults(options, {
    min: 10000.0,
    max: 1000000.0
  })

  return racional({ min: options.min, max: options.max })
}
