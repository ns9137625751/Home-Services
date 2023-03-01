const mongoose = require('mongoose');


const mongoURI = 'mongodb://localhost:27017/finalyear?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongoo successfully");
    })
}

module.exports = connectToMongo;