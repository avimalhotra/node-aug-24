const os=require('os');
const fs=require('fs');

//console.log( os.cpus().length + " threads" );    
//console.log( os.cpus()[0].model + ", Clock Speed: "+ os.cpus()[0].speed + "Ghz");
//console.log( os.totalmem()/1073741824 + "GB Total Ram");
//console.log( (os.freemem()/1073741824).toFixed(2) + "GB Total Ram");
//console.log( os.networkInterfaces() );
//console.log( os.platform() );
//console.log( os.type() );
//console.log( os.uptime() );
//console.log( os.userInfo() );

//const data=fs.readFileSync('src/data.txt');                     // sync
//console.log( data.toString() );

// fs.readFile('src/data.txt',{encoding:'utf-8'},(err,data)=>{         // async
//     if(err){ console.warn(err)}
//     else{ console.log(data)}
// });

// fs.stat('src/data.txt',(err,data)=>{                            // async
//     if(err){ console.warn(err)}
//     else{ 
//         console.log(data.isFile());
//         console.log(data.isDirectory());
//         console.log(data.size);
//     }
// });

//fs.writeFile('src/data.txt',"hello JS",'utf-8',(err)=>{console.warn(err)});


//fs.appendFileSync('src/data.txt',"\nhello JS",'utf-8',(err)=>{console.warn(err)});

fs.unlink("src/data.txt",(err)=>{
    if(err){
        console.warn(err);
    }
    else{
        console.log("File deleted");
    }
});

