const restful = require('node-restful')
const mongoose = restful.mongoose

const ProcessosSchema = mongoose.Schema({
    processNumber : {type: Number, required: true},
    ClientProcess : {type: String, required: true},
    state: {type: Boolean, default: false}
})

module.exports = restful.model('Processos',ProcessosSchema)