const mongoose = require('mongoose')

const VolunteerSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirmpassword:String,
    organizationName:String,
    aboutOrganization:String,
    whatYouProvide:String,
    organizationHead:String,
    numberOfWorkers:String,
    experience:String,
    licence:String,
    contact1:String,
    contact2:String,
    tollFreeNumber:String,
    address:String,
    verifyNumber:String
    // img:String
})

const VolunteerModel = mongoose.model('volunteer',VolunteerSchema)
module.exports = VolunteerModel;