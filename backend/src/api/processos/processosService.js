const Processos = require('./processos')

Processos.methods(['get','post','put','patch','delete'])
Processos.updateOptions({new: true, runValidators: true})

module.exports = Processos