const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: [true,'no']
    },
    passwped:{
        type:String,
        required:[true,'no']
    }
});

module.exports = mongoose.model('User',userShema);