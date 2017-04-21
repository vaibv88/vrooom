var http =require('http');

var server =http.createServer(function(req, res){
    req.setHeader(200,{"content-type":"text/html"});
    res.end("Hello, World");
    
});


server.listen("3001");
console.log("Sever is listening on port:3001");
