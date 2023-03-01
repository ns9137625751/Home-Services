const mongoose = require("mongoose");
const {Schema} = mongoose;
const AdminSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }
});
const User = mongoose.model('admin',AdminSchema)
module.exports = User;