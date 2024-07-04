const http = require("http");

const fs = require("fs");

const port = 5000;

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        let data = fs.writeFileSync("new.txt","File write Sync method");
        if(data){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("File writte successfully at sync method");
            res.end();
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("File writte successfully at sync method");
            res.end();
        }
    }
});


server.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
})