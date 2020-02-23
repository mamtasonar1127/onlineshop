const fs = require('fs');
const http = require('http');
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8'); //getting data from datajson file

const laptopData = JSON.parse(json);
console.log(laptopData);
