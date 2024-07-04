const http = require("http");

const fs = require("fs");

let port = 4000

const server = http.createServer((req,res)=>{
    let data = fs.readFileSync("blog.html");
    res.writeHead(200,{ "Content-type" : "text/html" });
    res.write(data);

});

server.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
})