const mongoose = require("mongoose");
// const {Schema} = mongoose;
const ServiceProviderSchema = new mongoose.Schema({
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
    type_of_service:{
        type: String,
        required:true,
    },
    visiting_charge:{
        type: Number,
        required:true,
    },
    gender:{
        type: String,
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const User = mongoose.model('serviceprovider',ServiceProviderSchema)
module.exports = User;