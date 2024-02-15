const express = require('express');
const mongoose = require('mongoose');


const app = express()
mongoose.connect("mongodb://localhost:27017/crud")



const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
const detailsModel = mongoose.model("details", UserSchema)
app.get("/getDetails", (req,res) => {
    detailsModel.find({}).then(function(details) {
         res.json(details)
        
    }).catch(function(err){
        console.log(err)
    })
})





app.listen(3001, () => {
    console.log("server is listening to this port")
})