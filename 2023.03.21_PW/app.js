const http = require("http");

var routes = {
    "/": (req, resp) => resp.end("Home page"),
    "/about": (req, resp) => resp.end("About page")
};

const server = http.createServer((req, resp) => {
    let url = req.url.toLowerCase()
    if (url in routes) {
        return routes[url](req, resp);
    }
    resp.writeHead(404);
    resp.end(http.STATUS_CODES[404]);
});

server.listen(8000);