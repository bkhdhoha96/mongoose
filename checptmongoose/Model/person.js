const mongoose = require("mongoose")
const personSchema = new mongoose.Schema ({
    name: { type:String,
        required:true},

    age:number,
    
    favoriteFoods: array 
})
const person =mongoose.model('person',personSchema)
module.exports = person
