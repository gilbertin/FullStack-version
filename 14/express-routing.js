const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (request, response) {
    response.send('Hello GET!!');
});

app.post('/', function (request, response) {
    response.send('Hello POST!!');
});

app.put('/', function (request, response) {
    response.send('Hello PUT!!');
});

app.delete('/', function (request, response) {
    response.send('Hello delete!!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});