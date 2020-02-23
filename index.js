const fs = require('fs');
const http = require('http');
const url = require('url');

var port = process.env.PORT || 3000;

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8'); //getting data from datajson file

const laptopData = JSON.parse(json);
console.log(laptopData);

//Creating a server
const server = http.createServer((req, res) => {
    
    res.end('Hello');
    
    
});

server.listen(3000, () => {
    console.log('Listening for requests now');
});