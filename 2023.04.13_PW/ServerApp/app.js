require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;
const jsonParser = express.json();
var pgp = require("pg-promise")(/*options*/);
//console.log(process.env.password);
var db = pgp(`postgres://postgres:${process.env.password}@localhost:5432/Users`);

app.use((req, resp, next) => {
    resp.header('Access-Control-Allow-Origin', '*');
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    resp.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();
});

app.get('/users/:id', async (req, resp) => {
    let id = req.params.id;
    let user = await db.one(`SELECT * FROM public."Users" WHERE id=${id}`);
    resp.json(user);
});

app.delete("/users/:id", async (req, resp) => {
    let id = req.params.id;
    await db.one(`DELETE FROM public."Users" WHERE id=${id} returning id`);
    resp.end();
});

app.put("/users/:id", jsonParser, async (req, resp) => {
    let id = req.params.id;
    let user = await db.one(`SELECT * FROM public."Users" WHERE id=${id}`);
    if (!user) {
        resp.sendStatus(404);
    }
    user.name = req.body.name;
    user.age = req.body.age;
    if (!user.name && !user.age) {
        resp.sendStatus(422);
    }
    await db.none('UPDATE public."Users" SET name = ${name}, age = ${age} WHERE id=${id}', {
        name: user.name,
        age: user.age,
        id: user.id
    });
    resp.json(user);
});

app.post("/users", jsonParser, async (req, resp) => {
    let username = req.body.name;
    let userage = req.body.age;
    if (!username && !userage) {
        resp.sendStatus(422);
    }
    await db.none('INSERT INTO "Users"("name", "age") VALUES(${name}, ${age})', {
        name: username,
        age: userage,
    });
    resp.end();
});

app.get("/users", jsonParser, async (req, resp) => {
    let data = await db.query(`SELECT * FROM public."Users"`);
    resp.json(data);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});