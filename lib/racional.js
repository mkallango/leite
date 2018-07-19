'use strict'

const { defaults } = require('underscore')
const random = require('./../helpers/random')
const { MIN_FLOAT, MAX_FLOAT } = require('./../helpers/constants')

module.exports = (options = {}) => {
  options = defaults(options, {
    min: MIN_FLOAT,
    max: MAX_FLOAT
  })
  return (random() * (options.max - options.min + 1) + options.min).toFixed(2)
}
