const express = require('express')

module.exports = function(server){

    const router = express.Router()
    server.use('/api', router)

    const VarasService = require('../api/varas/varasService')
    VarasService.register(router,'/varas')

    const ClientesService = require('../api/clientes/clientesService')
    ClientesService.register(router,'/clientes')

    const ProcessosService = require('../api/processos/processosService')
    ProcessosService.register(router,'/processos')
}