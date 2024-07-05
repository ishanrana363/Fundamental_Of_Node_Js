const http = require("http");
const fs = require("fs");
const port = 5050;

const server = http.createServer((req,res)=>{

    const error = fs.unlinkSync("text.html");
    if(error){
        res.writeHead(500,{"Content-Type":"text/html"});
        res.write("File delete fail");
        res.end();
    }else{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("File delete successfully");
        res.end();
    }

});
server.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});