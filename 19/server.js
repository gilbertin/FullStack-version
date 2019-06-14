const express = require('express')
const app = express()

function rootHandler (request, response){
    response.send('hello world')
}
app.get('/',rootHandler)
app.listen(9000)
