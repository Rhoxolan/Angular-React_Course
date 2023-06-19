const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //fs.createReadStream('./paintings.json').pipe(res);
    res.sendFile(__dirname + "/paintings.json");
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});