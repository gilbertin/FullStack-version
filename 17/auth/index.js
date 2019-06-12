const express = require('express');
const router = express.Router();

router.post('/login', function (request, response) {
    response.send('LOGIN');
});

router.get('/logout', function (request, response) {
    response.send('LOGOUT');
});

router.get('/recovery', function (request, response) {
    response.send('RECOVERY');
});

module.exports = router;