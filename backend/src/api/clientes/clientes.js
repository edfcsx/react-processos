const restful = require('node-restful')
const mongoose = restful.mongoose

const clientesSchema = new mongoose.Schema({
    name: {type: String, required: true}
})

module.exports = restful.model('Clientes',clientesSchema)