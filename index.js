import express from "express";
const app=express();
const port =3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello,World!</h1>");
})

app.get("/a",(req,res)=>{
    res.send("<h2>About Me</h2><p>Hi , My name is Kartik.</p>");
    
})

app.get("/b",(req,res)=>{
    res.send("<h1>Hello,World!</h1><p>My contact detail:9899605927</p>");
})


app.listen(3000,()=>{
    console.log(`Server is running on port ${port}.`);
})