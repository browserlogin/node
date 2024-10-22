const mongoose = require('mongoose');

const dummySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    current_address: {
        type: String,
        required: true
        
    }
});

//cerate dummy model
const Dummy = mongoose.model('Dummy', dummySchema);
module.exports = Dummy;