const mongoose = require("mongoose");

const Student = mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    age:{
        type: Number,
        required : true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Student", Student);