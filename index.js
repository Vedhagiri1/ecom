const express = require("express")
const req = require("express/lib/request")
const app =express()
const  path=require("path")
const hbs= require("hbs")
const async = require("hbs/lib/async")
const collection=require("./mongodb")

const tempelatePath=path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login")
})
app.post("/signup",async(req,res)=>{console.log(req.body);
    const data={
       
        
        name:req.body.email,
        name:req.body.pass
       
        
        
    }
 await collection.insertMany([data])

 res.render("home")


})
    app.get("/signup",(req,res)=>{
        res.render("signup")    
})
app.post("/signup",async(req,res)=>{console.log(req.body);
    const data={
       
        name:req.body.fname,
        name:req.body.lname,
        name:req.body.email,
        name:req.body.pass,
        name:req.body.cpass
        
        
    }
 await collection.insertMany([data])

 res.render("home")


})

app.listen(
    3000,() =>{
        console.log("port connected");
    })