const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    let myUrl = "http://ishan.com/blog.html?year=2004&month=april";
    let myUrlObj = url.parse(myUrl,true);
    let hostName = myUrlObj.host;
    let pathName = myUrlObj.path;
    let searchName = myUrlObj.path;
    res.writeHead(200,{"Content-type":"text/html"});
    res.write(hostName);
    // res.write(pathName);
    // res.write(searchName);
    res.end();
});


server.listen(5050);

console.log(`Server running successfully at http://localhost:5050`)