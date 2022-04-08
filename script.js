const express = require("express");
const bodyparser = require("body-parser");

const app=express();

app.get("/",function(req, res){
    var today= new Date();
    if(today.getDay()==6 || today.getDay==0){
        res.send("It's Weakend")
    }else{
        res.send("Working Day")
    }

})

app.listen(3000, function(){
    console.log("server 3000 is running")
})