const express = require('express')
const  kijane = require('./data.json');
const users = require('./user.json');
const app = express()
const cors = require('cors')
const port = process.env.port || 5000


app.get('/', (req, res) =>{
    res.send('hlw')
})

app.use(cors());
// for reading body
app.use(express.json())



app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log("daata comimg");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    console.log(newUser);
    users.push(newUser);
    res.send(newUser);
    

})

app.listen(port, ()=>{
    console.log(`Example app running on port ${port}`)
  
})


// app.get('/kijane', (req, res) =>{
//     res.send(kijane);
// })

// app.get('/kijane/:id', (req, res) =>{
//     const id = parseInt(req.params.id);
//     // console.log(req.params);
//     console.log('I need  data  for', id);
// })