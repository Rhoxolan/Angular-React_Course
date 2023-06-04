const express = require("express");
const app = express();
const port = 3000;
let message = process.argv[2];

app.get('/', (req, res) => {
    res.send(message)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
