const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get('/paintings', (req, res) => {
    //fs.createReadStream('./paintings.json').pipe(res);
    res.sendFile(__dirname + "/paintings.json");
});

app.get('/paintings/:id', (req, res) => {
    let id = req.params.id;
    fs.readFile("db.json", function(err, data) {
        let dbData = JSON.parse(data);
        console.log(data);
    });
    res.status(200).send();
});



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});