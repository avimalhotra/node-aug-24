const http=require('http');
const fs=require('fs');
const path=require('path');
const port=8080;
const ip='127.0.0.1';


const server=http.createServer((req,res)=>{
    //res.write(req.url);
    // res.write(req.method);
    //res.statusCode=200;
    //res.setHeader('Content-Type','text/html');
    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.write(req.headers.host);
    //res.write(`Response from server`);

    //res.end("Response from server");
    //res.end();

    if(req.url=="/" && req.method=="GET"){
        fs.readFile(path.resolve('src/index.html'),{encoding:'utf-8'},(err,data)=>{
            if(err){
                res.end(err)
            }
            else{
                res.end(data);
            }
        });
    }
    else{
        res.end(`404, Page not Found`)
    }
});

server.listen(port,ip,()=>{
    console.log(`Server running at http://${ip}:${port}`);
});



/*
http.createServer((req,res)=>{
    //res.write(`<h1>`);
    //res.write(`Date: ${new Date().toLocaleString()}`);
    //res.write(`</h1>`);

    res.write(`Date: ${new Date().toLocaleString()}`);
    res.end();
}).listen(port,ip,()=>{
    console.log(`App running at http://${ip}:${port}`);
});*/

