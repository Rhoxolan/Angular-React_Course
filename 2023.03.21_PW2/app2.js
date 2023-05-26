const http = require("http");
const os = require("os");

const server = http.createServer((req, res) => {
    let networkInterfaces = os.networkInterfaces();
    res.end(JSON.stringify(networkInterfaces));
});

server.listen(8000); 