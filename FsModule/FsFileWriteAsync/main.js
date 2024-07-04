const http = require("http");

const fs = require("fs");

const port = 5000;

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.writeFile("demo.txt"," Welcome to Universe It, and universe soft tech company ",(error)=>{
    
            if(error){
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write("File writte fail");
                res.end();
            }else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write("File writte successfully");
                res.end();
            }
    
        })}
});


server.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
})