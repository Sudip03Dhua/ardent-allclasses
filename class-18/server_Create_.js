const express=require('express');
const app=express()
app.use("/nsec",(req,res,next)=>{
res.send("This is an example");
});

app.get("/hello",(req,res,next)=>{
    res.send("My dear students!!");
});

app.listen(4000,()=>{
    console.log("Server started.");
});