const http = require("http");
const fs = require("fs");
const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        try {
            fs.renameSync("newdemo.txt", "demo.txt");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("File renamed successfully sync method");
        } catch (error) {
            res.writeHead(403, { "Content-Type": "text/html" });
            res.write("File rename failed sync method");
        }
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server running successfully at http://localhost:${port}`);
});
