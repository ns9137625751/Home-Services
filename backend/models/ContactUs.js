const mongoose = require("mongoose");
const {Schema} = mongoose;
const ContactUsSchema = new mongoose.Schema({
    customer:{
        type: mongoose.Types.ObjectId,
        ref :"user"
    },
    name:{
        type: String
    },
    email:{
        type: String,
        required:true,
    },
    phone_number:{
        type: Number,
        required:true,
    },
    subject:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model('contactus',ContactUsSchema)