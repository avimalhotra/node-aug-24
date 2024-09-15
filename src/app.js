const express=require('express');
require("dotenv").config();
const port=process.env.PORT;
const path=require("path");
const app=express();
const admin=require("./routes/admin");
const cars=require("./routes/cars");
//const parseurl=require('parseurl');


// const session=require("express-session");
// // trust first proxy
// app.set('trust proxy', 1); 
// app.use(session({
//     secret:"session",
//     resave:false,
//     saveUninitialized:true,
//     cookie:{secure:false,maxAge:(1000 * 3)}
// }));


// const cookieParser=require('cookie-parser');
// app.use(cookieParser("secret"));


const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 


const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public/uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);          // for original name 
      //cb(null, Date.now() + path.extname(file.originalname)) 
    }
  });

// const upload = multer({ storage:storage });


/* router */
app.use("/admin",admin);
app.use("/cars",cars);

 app.use(express.static(path.resolve("src/public")));
 app.use(express.static(path.resolve("node_modules/bootstrap/dist")));

// app.use((req,res,next)=>{
//     if(!req.session.views){
//         req.session.views={};
//     }

//     let pathname = parseurl(req).pathname;

//     req.session.views.pathname=(req.session.views.pathname || 0) +1;
    
//     next();
// });




app.get("/",(req,res)=>{
    res.setHeader("Content-Type","text/html");

    // res.cookie("fb-token","1234567893456789",{signed:true});
    // res.status(200).send(req.cookies);
    //res.cookie("city","noida", {maxAge:86400000, httpOnly: true})

    //res.status(200).send(req.signedCookies);
    // res.status(200).send(Buffer.from("abcd"));
    // res.status(200).send("Hello World");
    //res.status(200).send(` Session Id : ${req.sessionID}, page views: ${req.session.views.pathname}`);
    res.status(200).send("<h1>Hello World</h1>");
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

// app.post('/upload', upload.single('pic'),(req,res)=>{
//     console.log(req.file);
//     res.status(200).send("file uploaded");
// });
const upload = multer().single('pic');
app.post('/upload',(req,res)=>{
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                console.error( err );
            } else if (err) {
                console.error( err );
            }
            else{
                res.status(200).send("file uploaded");
            }
        })
});


/* wild card handler */
app.get("/**",(req,res)=>{
    res.status(404).send("Page not found");
});

app.listen(port,()=>{
    console.log(`Server running at http://127.0.0.1:${port}`);
});