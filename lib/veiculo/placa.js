'use strict'

const inteiro = require('./../inteiro')
const { ABC } = require('./../../helpers/constants')

module.exports = () => {
  let letrasPlaca = ''
  for (let i = 0; i < 3; i++) {
    const rnum = Math.floor(Math.random() * ABC.length)
    letrasPlaca += ABC.substring(rnum, rnum + 1)
  }
  return letrasPlaca + inteiro({ min: 1000, max: 9999 })
}
