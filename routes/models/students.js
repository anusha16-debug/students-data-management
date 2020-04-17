const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    section:{
        type: String,
        required: true
    },
    grades: {
        type: String,
        required: true
    }
});

const Student = module.exports = mongoose.model('Student', StudentSchema);