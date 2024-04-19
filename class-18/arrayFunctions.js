const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hello my dear student?</h1>');
});

server.listen(4000,()=>{
    console.log("Server started.");
});