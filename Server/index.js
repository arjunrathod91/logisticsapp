const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require('./Models/UserModel')
const Volunteer = require('./Models/VolunteerModel')
const socketIo = require('socket.io');



const app = express()
const io = socketIo(app);
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Logistics")

app.post('/setVol',(req,res)=>{
    Volunteer.create(req.body)
    .then(newVol => res.json(newVol))
    .catch(err => res.json(err))
})

//socket.io
io.on('connection', (socket) => {
    console.log('A user connected');
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  
    // Add more socket event listeners here as needed
  });


app.listen(3002,()=>{
    console.log('server is running')
})