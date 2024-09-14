const express=require('express');
require("dotenv").config();
const port=process.env.PORT;
const path=require("path");
const app=express();
const admin=require("./routes/admin");
const cars=require("./routes/cars");


const cookieParser=require('cookie-parser');
app.use(cookieParser("secret"));


const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 


/* router */
app.use("/admin",admin);
app.use("/cars",cars);

 //app.use(express.static(path.resolve("src/public")));
 //app.use(express.static(path.resolve("node_modules/bootstrap/dist")));

// app.use((req,res,next)=>{
//     console.log("Use Login");
//     next();
// });


app.get("/",(req,res)=>{
    res.setHeader("Content-Type","text/html");

    // res.cookie("fb-token","1234567893456789",{signed:true});
    // res.status(200).send(req.cookies);
    res.cookie("city","noida", {maxAge:86400000, httpOnly: true})

    res.status(200).send(req.signedCookies);
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



/* post */
app.post('/login',(req,res)=>{
    console.log(req.body);
    res.status(200).send(`Email: ${req.body.email}, password: ${req.body.password}`);
});

/* wild card handler */
app.get("/**",(req,res)=>{
    res.status(404).send("Page not found");
});

app.listen(port,()=>{
    console.log(`Server running at http://127.0.0.1:${port}`);
});