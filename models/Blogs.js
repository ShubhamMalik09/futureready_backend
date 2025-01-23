const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    }

});

module.exports = mongoose.model("Blog",blogSchema); 