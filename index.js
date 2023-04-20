const express = require('express')
const  kijane = require('./data.json');
const app = express()
const port = 5000


// app.get('/', (req, res) =>{
//     res.send('segun kajth')
// })


app.get('/kijane', (req, res) =>{
    res.send(kijane);
})

app.get('/kijane/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    // console.log(req.params);
    console.log('I need  data  for', id);
})

app.listen(port, ()=>{
    console.log(`Example app listensing on port ${port}`)
})