const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require('./Models/UserModel')
const Volunteer = require('./Models/VolunteerModel')



const app = express()

app.use(express.json())
app.use(cors(app))

mongoose.connect("mongodb://127.0.0.1:27017/Logistics")

app.post('/setVol',(req,res)=>{
    Volunteer.create(req.body)
    .then(newProject => res.json(newProject))
    .catch(err => res.json(err))

})
app.listen(3002,()=>{
    console.log('server is running')
})