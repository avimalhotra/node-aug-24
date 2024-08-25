const emitter=require('./app');

emitter.once("register",(x)=>{
    console.log(`user registered`);      
});
