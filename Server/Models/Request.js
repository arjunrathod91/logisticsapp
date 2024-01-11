const mongoose = require('mongoose')

const RequestSchema = new mongoose.Schema({
    name:String,
    contact:String,
    location:String,
    help:String
})
const RequestModel = mongoose.model('request',RequestSchema)

module.exports = RequestModel;