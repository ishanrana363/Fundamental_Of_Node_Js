const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    fs.readFile("demo.txt",(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            return res.end()
        }
    })

});

server.listen(5050,()=>{
    console.log(`Server run successfully at http://localhost:5050`)
});