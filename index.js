const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) =>{
    res.send('segun kajth')
})

app.get('/', (req,res) =>{
    res.send("graju maju")
})

app.listen(port, ()=>{
    console.log(`Example app listensing on port ${port}`)
})