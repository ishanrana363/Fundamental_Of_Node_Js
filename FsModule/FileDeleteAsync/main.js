const http = require("http");
const fs = require("fs");

const port = 5000;

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.unlink("demo.txt",(error)=>{
            if(error){
                res.writeHead(409,{"Content-Type":"text/html"});
                res.write("File delete fail");
            }else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write("Fail delete successfully");
            }
        })
    }
});

server.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});