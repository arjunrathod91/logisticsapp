const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require('./Models/UserModel')
const Volunteer = require('./Models/VolunteerModel')
const Request = require('./Models/Request')
const socketIo = require('socket.io');
const http = require('http');


const app = express()
const server = http.createServer(app);
const io = socketIo(server);
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Logistics")



app.get('/getUser', async (req,res)=>{

  const { email, password } = req.query;

  User.findOne({ email, password })
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
  )


app.get('/getVolunteer',(req,res)=>{

    const { email, password } = req.query;
  
    Volunteer.findOne({ email, password })
      .then((vol) => {
        if (!vol) {
          res.status(404).json({ message: 'User not found' });
          return;
        }
        res.json(vol);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
    )
app.post('/setVol',(req,res)=>{
    Volunteer.create(req.body)
    .then(newVol => res.json(newVol))
    .catch(err => res.json(err))
})

// app.get('/getVol',(req,res)=>{
//     const userId = 65993ffb1cff4049e0f2b6ad
//     Volunteer.findById({ _id: ObjectId(userId) })
//     .then(newVol => res.json(newVol))
//     .catch(err => res.json(err))
// })

app.post('/newUser',(req,res)=>{
    User.create(req.body)
    .then(request => res.json(request))
    .catch(err => res.json(err))
})

app.post('/sendRequest',(req,res)=>{
    Request.create(req.body)
    .then(request => res.json(request))
    .catch(err => res.json(err))
})

app.get('/newRequest',(req,res)=>{
  Request.find()
  .then(vol=>res.json(vol))
  .catch(err=>res.json(err))
})

app.get('/nearbyVol',(req,res)=>{
    Volunteer.find()
     .then(newVol => res.json(newVol))
     .catch(err => res.json(err))
})

/*app.put('/getVol/:userId', (req,res)=>{
    const UserId = req.params.userId;
    console.log(UserId)
    const updatedData = req.body;
    console.log(updatedData)
    const updatedUser = Volunteer.findOneAndUpdate(
        { _id: UserId },
        { $set: updatedData }, 
        { new: true })
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
        })*/
 
/*app.delete('/delUser/:userId',async (req,res)=>{
    try {
        const userId = req.params.userId;
    
        // Find and delete the user in MongoDB
        await Volunteer.findByIdAndDelete(userId);
    
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete user', details: error });
      }
    })
    */
        



io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('userData', (data) => {
        // Broadcast the received data to all connected clients except the sender
        socket.broadcast.emit('broadcastData', data);
      });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  
    // Add more socket event listeners here as needed
  });

//post create(req.body) //creates a new data //not need to make a collection it creates automatic
//update findOneAndUodate req.params.userId //for id of data req.body data we provided
//delete findOneAndDelete req.params.userId //for id of data req.body data we provided
//get    find 


app.listen(3002,()=>{
    console.log('server is running')
})