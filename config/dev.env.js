var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENDPOINT:'"http://www.omdbapi.com/?apikey=b9aa932b&t="'
})
