const mongoose = require("mongoose")
const connectdb = async () =>{
    try{
        await mongoose.connect('mongodb+srv://dhohabenk:e5sYPDQ11ElzRG5n@cluster0.fkjclgr.mongodb.net/')
        console.log('bd is conneccted')

    }
    catch(error){
        console.log('error db')
    }
}
module.exports = connectdb
