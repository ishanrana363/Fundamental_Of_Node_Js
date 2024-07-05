const http = require("http");
const fs = require("fs");
const port = 5050;
const server = http.createServer((req,res)=>{
    let result = fs.existsSync("abc.txt");
    if(result){
        res.end("True")
    }else{
        res.end("False")
        
    }
});

server.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});