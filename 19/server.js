const express = require('express')
const app = express()

app.get('/',rootHandler)
app.listen(9000)
