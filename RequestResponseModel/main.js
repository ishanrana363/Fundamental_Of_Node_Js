var http = require("http");

var server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.write("<h1>Home page</h1>");
        res.end();
    }else if( req.url=="/about" ){
        res.writeHead(200,{ "Content-type" : "text/html" });
        res.write("<h1>This is about page</h1>");
        res.end();
    }
});


server.listen(5050);
console.log("Server run successfully");