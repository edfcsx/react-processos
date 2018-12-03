const Clientes = require('./clientes')

Clientes.methods(['get','post','put','patch','delete'])
Clientes.updateOptions({new: true, runValidators: true})

module.exports = Clientes