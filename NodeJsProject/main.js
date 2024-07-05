const http = require("http");
const fs = require("fs");

const port = 5050; 

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        let data = fs.readFileSync("home.html","utf-8");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    }else if(req.url=="/blog"){
        let data = fs.readFileSync("blog.html","utf-8");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    }else if(req.url=="/contact"){
        let  data = fs.readFileSync("contact.html","utf-8");
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(data);
        res.end();
    }else if( req.url=="/term"){
        let  data = fs.readFileSync("term.html","utf-8");
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(data);
        res.end();
    }
});

server.listen(port,()=>{
    console.log(`Server run successfully http://localhost:${port}`);
});