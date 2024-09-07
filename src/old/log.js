const emitter=require('./app');


emitter.on("login",(x)=>{
    console.log(`user login starts`);      
});

emitter.on("login",(x)=>{
    console.log(`user login ends`);      
});

