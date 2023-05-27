const http = require("http");

const server = http.createServer((req, resp) => {
    let url = new URL(req.url, `http:\\${req.headers.host}`);
    console.log();
    console.log(`Host: ${url.host}`);
    console.log(`Href: ${url.href}`);
    for (const [name, value] of url.searchParams) {
        console.log(name, ' => ', value);
    }
    console.log();
    resp.end(http.STATUS_CODES[200]);
});

server.listen(8000); 