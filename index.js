'use strict'
const less = require('less')

module.exports = ()=> ({
  source: '.less',
  target: '.css',
  via: [
    (input, done)=> void less.render(input.toString(), {}, done),
    function(result) {
      this.output.mimeType = 'text/css'
      return result.css
    }
  ],
})
