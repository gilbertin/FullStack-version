const fs = require('fs');
const http = require('http');

let path = './13/static/';
let resGlobal = '';

const handleAccess = function (err){
    if (err) {
        resGlobal.write('EL archivo no existe');
        resGlobal.end();
    } else {
        fs.readFile(path, 'utf-8', handleRead);
    }
}

const handleRead = function (err, content){
    if (err) {
        throw err;
    } 
    resGlobal.write(content);
    resGlobal.end();
}

const server = http.createServer(function (req, res) {
    resGlobal = res;
    const myURL = require('url').parse(req.url);
    res.writeHead(200, {'Content-Type':'text/plain'});
    if (myURL.pathname == '/' || myURL.pathname == '/index.html') {
        path = path + 'index.html';
        fs.access(path, fs.constants.F_OK, handleAccess);
    } else if (myURL.pathname == '/about.html') {
        path = path + 'about.html';
        fs.access(path, fs.constants.F_OK, handleAccess);
    } else {
        fs.access(path + myURL.pathname, fs.constants.F_OK, handleAccess);
    }
});

server.listen(8000);