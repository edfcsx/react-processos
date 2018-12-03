const Varas = require('./varas')

Varas.methods(['get','post','put','patch','delete'])

Varas.updateOptions({new: true, runValidators: true})

module.exports = Varas