const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get('/paintings', (req, res) => {
    //fs.createReadStream('./paintings.json').pipe(res);
    res.sendFile(__dirname + "/paintings.json");
});

app.get('/paintings/:id', (req, res) => {
    fs.readFile("db.json", 'utf-8', function (err, data) {
        if (err) {
            console.error(err);
            //return res.status(500).send("1Internal Server Error");
        }
        try {
            let id = req.params.id;
            let dbData = JSON.parse(data);
            let painting = dbData.find(item => item.id == id);
            if (!painting) {
                //return res.status(404).send("2Painting not found");
            }
            return res.sendFile(__dirname + painting.path);
        }
        catch {
            //return res.status(500).send("3Internal Server Error");
        }
    });
    //return res.status(500).send("4Internal Server Error");
});

app.get('/paintings/:id/size/100', (req, res) => {
    let id = req.params.id;
    fs.readFile("db.json", 'utf-8', function (err, data) {
        let dbData = JSON.parse(data);
        console.log(data);
    });
    res.status(200).send();
});



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});