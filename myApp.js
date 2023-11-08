let express = require('express');
let app = express();

console.log("Hello World");

absolutePath=__dirname+"/views/index.html";

app.get("/",(req,res)=>{
    res.sendFile(absolutePath);
})

stylePath=__dirname+"/public";
app.use("/public",express.static(stylePath));

app.use(function(req,res,next){
    let string=req.method+" "+req.path+" "+"-"+" "+req.ip;
    console.log(string);
    next();
})

app.get('/now',(req,res,next)=>{
    req.time=new Date().toString()
    next();
},(req,res)=>{
    res.send({
        "time":req.time
    });
});




























 module.exports = app;
