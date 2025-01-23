const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
            type:String,
            required:true,
            trim:true,
    },
    token:{
        type:String,
    },
    blogs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Blog"
        }
    ],
});

module.exports = mongoose.model("User",userSchema); 