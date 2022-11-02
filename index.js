const express = require('express')
const server = express()
const colors = require('colors')
const {callbackPort}= require('./app/config')
const port =process.env.PORT
server.get('/', (req, res) => {
    res.send(process.env.ENTORNO)
})

server.listen(port, callbackPort)
