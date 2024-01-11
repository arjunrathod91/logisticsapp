const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirmpassword:String,
    contact:String,
    location:String
})
const UserModel = mongoose.model('user',UserSchema)

module.exports = UserModel;