const express=require('express');
require("dotenv").config();
const port=process.env.PORT;
const path=require("path");
const app=express();


 app.use(express.static(path.resolve("src/public")));
 app.use(express.static(path.resolve("node_modules/bootstrap/dist")));

// app.use((req,res,next)=>{
//     console.log("Use Login");
//     next();
// });


app.get("/",(req,res)=>{
    res.setHeader("Content-Type","text/html");
    
     res.status(200).send(req.url);
    // res.status(200).send(Buffer.from("abcd"));
    //res.status(200).send("Hello World");
    // res.status(200).send("<h1>Hello World</h1>");
});

app.get("/api",(req,res)=>{
    res.status(200).json([{name:"lorem",city:"delhi"},{name:"ipsum",city:"chennai"}]);
});

app.get("/search",(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.status(200).send(req.query);
    // res.status(200).json({'query':req.query});

});

app.get("/cars/",(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.status(200).send("Cars Search");
});
app.get("/cars/:brand",(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.status(200).send(req.params);
});
app.get("/cars/:brand/:name",(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.status(200).send(req.params);
});
app.get("/cars/:brand/:name/:variant",(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.status(200).send(req.params);
});


app.post('/login',(req,res)=>{
    console.log(`Body: ${req.body}`);
    res.status(200).send('data posted');
});


/* wild card handler */
app.get("/**",(req,res)=>{
    res.status(404).send("Page not found");
});

app.listen(port,()=>{
    console.log(`Server running at http://127.0.0.1:${port}`);
});