const express = require('express');
const auth = require('./auth');
const app = express();
const port = 9000;

app.use('/auth', auth);

app.listen(port);