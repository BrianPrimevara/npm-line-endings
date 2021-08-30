const express = require("express");

var app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile("/index.html");
})

app.listen(3000, function(){
    console.log("Server is started on port 3000");
})