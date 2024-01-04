const mongoose = require('mongoose')

const VolunteerSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confirmPassword:String,
    profile:String
    // contactNo:String,
    // profile:String,
    // organization:String,
    // organizationArea:String,
    // organizationHead:String,
    // numberOfEmplyee:String,
    // experience:String,
    // licence:String,
    // contact1:String,
    // contact2:String,
    // address:String,
    // img:String
})

const VolunteerModel = mongoose.model('volunteer',VolunteerSchema)
module.exports = VolunteerModel;