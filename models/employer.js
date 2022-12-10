//Import mongoose
const mongoose = require('mongoose')

//Define a schema for an employer
var employerSchema = new mongoose.Schema({
    name:{
        type:String,
        required : "Employer name is required" 
    },
    region:{
        type:String,
        required: "Region name is required"
    },
    description:{
        type:String,
        required: "Description is required"
    }
})

//Make public
module.exports = mongoose.model('Employer', employerSchema)