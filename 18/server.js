const express = require('express')
const app = express()

app.use(express.static('public'))

// app.get('/', (resquest, response) => {
//   response.send('Hello World')
// })

app.listen(9000)
