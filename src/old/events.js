const path=require("path");
const events=require('events');
const emitter=new events();

module.exports=emitter;

// console.log( path.normalize('./src') );
// console.log( path.normalize('src//webp') );

// console.log(path.basename("/src/app/") );
// console.log(path.basename("/src/app/index.js") );
// console.log(path.basename("/src/app/index.js",".js") );

//console.log( path.dirname("src/app/") );
//console.log( path.extname("src/app.js") );


// console.log( path.resolve('src') );
// console.log( path.resolve(__filename) );
// console.log( path.resolve(__dirname) );
// console.log( path.resolve("src","app") );

//console.log( path.join("./src","app") );
// const fs=require('fs');
    
// fs.ReadStream(path.resolve('src/data.txt')).on("open",()=>{
//     console.log("file open");
// });



// registering event
// emitter.on("appStart",(time)=>{
//     console.log(`App Starts at ${time}`);       
// });
// emitter.on("appStart",(time)=>{
//     console.log(`App Starts again at ${time}`);       
// });


// event trigger
//emitter.emit('appStart',2);
//emitter.emit('appStart',4);


// emitter.on("appStart",(x)=>{
//     console.log(`App Starts at ${x.time}`);   
//     //x.done=false;    
//  });
//  emitter.on("appStart",(x)=>{   
//     if( x.done ){
//         console.log(`App Starts again at ${x.time}`); 
//     }
//  });

// emitter.emit('appStart',{time:3,done:false});



// emitter.once("appStart",(x)=>{    
//     console.log(`App Starts at ${x}`);  
// });
// emitter.once("appStart",(x)=>{    
//     console.log(`App Starts again at ${x}`);  
// });


// emitter.emit('appStart',3);
// emitter.emit('appStart',4);


const x=require(path.resolve('./src/log'));
const y=require(path.resolve('./src/reg'));


emitter.emit("login");
emitter.emit("register");