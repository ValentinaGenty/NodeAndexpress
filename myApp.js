require('dotenv').config()

let express = require('express');
let app = express();

console.log("Hello World");

absolutePath=__dirname+"/views/index.html";

app.get("/",(req,res)=>{
    res.sendFile(absolutePath);
})

stylePath=__dirname+"/public";
app.use("/public",express.static(stylePath));

app.get("/json",(req,res)=>{
    if(process.env=="uppercase"){
        res.json({
            "message":"HELLO JSON"
        })
    }
    else{
        res.json({
            "message":"Hello json"
        })
    }
    
})




























 module.exports = app;
