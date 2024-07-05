const http = require("http");
const fs = require("fs");
const port = 5050;

const server = http.createServer((req,res)=>{
    fs.exists("demo.txt",(result)=>{
        if(result){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("File asa");
            res.end();
        }else{
            res.writeHead(404,{"Content-Type":"text/html"});
            res.write("File nai");
            res.end();
        }
    })

});

server.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});