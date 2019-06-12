const fs = require('fs');
const path = './13/static/index.html';

const handleAccess = function (err){
    if (err) {
        console.log('EL archivo no existe');
    } else {
        fs.readFile(path, 'utf-8', handleRead);
    }
}

const handleRead = function (err, content){
    if (err) {
        throw err;
    } 
    console.log(content);
}

fs.access(path, fs.constants.F_OK, handleAccess);