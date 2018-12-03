const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('./cors')

const server = express()

server.use(cors)
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`Processos API 1.0\nDev:Eduardo Cipriano\nInicializando a matriz de dados...\nServidor executando na porta ${port}`)
})

module.exports = server