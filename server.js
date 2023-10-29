//console.log("Hello Everyone")

const express = require('express');
const mongoose = require ('mongoose');
const routes = require("./Routes/route");

const app = express();
app.use(express.json());
app.use("/",routes);


//DB connection
mongoose.connect("mongodb+srv://rithikarshetty000:Rithika000@cluster0.tbxz5il.mongodb.net/Batch3")
.then(()=>{
    console.log("Database is connected successfully")
})
.catch((err)=>{
    console.log(err,"Something went wrong")
});



//Test API
app.get("/test",(req,res)=>{
    res.send("Hello  Everyone, this is test api 😁")
});

app.listen(5000,()=>{
    console.log("Server Is Running on port 5000")
});