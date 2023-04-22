const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://vedhagiri602:vedhagiri2002@cluster0.fqf3xoe.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema=new mongoose.Schema({
    fname:{
        type:String
        
    },
    lname:{
        type:String
        
    },
    lname:{
        type:String
        
    },
    email:{
        type:String
        
    },
    pass:{
        type:String
        
    },
    cpass:{
        type:String
        
    }
})


const collection =new mongoose.model("Collection1", LogInSchema)

module.exports=collection