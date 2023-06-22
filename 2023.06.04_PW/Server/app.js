const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get('/paintings', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    fs.readFile("paintings.json", 'utf-8', function (err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
        }
        try {
            return res.json(JSON.parse(data));
        }
        catch {
            return res.status(500).send("Internal Server Error");
        }
    });
});

app.get('/paintings/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    fs.readFile("db.json", 'utf-8', function (err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
        }
        try {
            let id = req.params.id;
            let dbData = JSON.parse(data);
            let painting = dbData.find(item => item.id == id);
            if (!painting) {
                return res.status(404).send("Painting not found");
            }
            return res.sendFile(__dirname + painting.path);
        }
        catch {
            return res.status(500).send("Internal Server Error");
        }
    });
});

app.get('/paintings/:id/size/100', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    fs.readFile("db.json", 'utf-8', function (err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
        }
        try {
            let id = req.params.id;
            let dbData = JSON.parse(data);
            let painting = dbData.find(item => item.id == id);
            if (!painting) {
                return res.status(404).send("Painting not found");
            }
            return res.sendFile(__dirname + painting.pathThumbnail);
        }
        catch {
            return res.status(500).send("Internal Server Error");
        }
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});