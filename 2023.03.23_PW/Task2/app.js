const fs = require('fs');
let Parser = require('./parser');

let filePath = "text.txt";

fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    let result = new Parser(data);
    console.log(result);
});