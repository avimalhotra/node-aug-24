const express=require('express');
require("dotenv").config();
const port=process.env.PORT;
const path=require("path");
const app=express();


app.use(express.static(path.resolve("src/public")));

// app.use((req,res,next)=>{
//     console.log("Use Login");
//     next();
// });



app.get("/",(req,res)=>{
    res.status(200).send("Hello World");
});
app.get("/api",(req,res)=>{
    res.status(200).json([{name:"lorem",city:"delhi"},{name:"ipsum",city:"chennai"}]);
});


/* wild card handler */
app.get("/**",(req,res)=>{
    res.status(404).send("Page not found");
});

app.listen(port,()=>{
    console.log(`Server running at http://127.0.0.1:${port}`);
});