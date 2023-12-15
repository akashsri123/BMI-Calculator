const express=require("express");

const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,function(){});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/bmicalculator",function(req,res){
    var a=parseInt(req.body.wgt);
    var b=parseInt(req.body.hgt);
    console.log(typeof(a));
    res.send("your body mass index is " +(a/b*b).toString());
});


