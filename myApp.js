let express = require('express');
let app = express();

console.log("Hello World");

absolutePath=__dirname+"/views/index.html";

app.get("/",(req,res)=>{
    res.sendFile(absolutePath);
})

stylePath=__dirname+"/public";
app.use(express.static(stylePath));






























 module.exports = app;
