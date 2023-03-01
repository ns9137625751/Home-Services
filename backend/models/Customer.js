const mongoose = require("mongoose");
const {Schema} = mongoose;
const CustomerSchema = new mongoose.Schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    phone_number:{
        type: Number,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    cpassword:{
        type: String,
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const User = mongoose.model('customer',CustomerSchema)
module.exports = User;