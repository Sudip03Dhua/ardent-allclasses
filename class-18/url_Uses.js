var http=require('http');
var server=http.createServer(function (req,res){
if(req.url=='/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><h2>NSEC</h2></body></html>');
    res.end();
}
else if(req.url=='/admin'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><h3>Nhis is admin page</h3></body></html>');
    res.end();    
}else
{
    res.end("Invalid request"); 
}
});
server.listen(5000);
console.log("Server started.");