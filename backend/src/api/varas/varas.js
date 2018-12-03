const restful = require('node-restful')
const mongoose = restful.mongoose

const varasSchema = new mongoose.Schema({
    description: {type: String, required: true},
    type: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Varas',varasSchema)

