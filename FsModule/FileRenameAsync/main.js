const http = require("http");

const fs = require("fs");


const port = 5000;

const server = http.createServer((req,res)=>{

    if(req.url=="/"){
        fs.rename("nex.txt","demo.txt",(err)=>{
            if(err){
                res.writeHead(403,{"Content-Type":"text/html"});
                res.write("File rename fail");
                res.end();
            }else{
                res.writeHead(200,{"Content-Type":"text/html"});
            }
        })
    }

});
server.listen(port,()=>{
    console.log(   `Server run successfully at http://localhost:${port}`);
})