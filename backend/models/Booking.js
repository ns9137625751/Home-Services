const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    provider_id:{
        type:String
    },
    customer_name:{
        type:String
    },
    customer_address:{
        type:String
    },
    customer_phonenumber:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    },

});
module.exports = mongoose.model('booking',BookingSchema)