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
    let message="Hello json";
if(process.env.MESSAGE_STYLE==="uppercase"){
    message="HELLO JSON";
};
        res.json({
            "message":message
        });
})




























 module.exports = app;
