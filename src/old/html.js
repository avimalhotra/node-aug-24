const http=require('http');
const fs=require('fs');
const path=require('path');
require('dotenv').config();
const port=process.env.PORT;
const ip=process.env.IP;


const server=http.createServer((req,res)=>{

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
    else if(req.url=="/login" && req.method=="GET"){
        fs.readFile(path.resolve('src/login.html'),{encoding:'utf-8'},(err,data)=>{
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

