const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userResultSchema = new Schema({
    user_id: {
        type: String
    },
    result_Id: {
        type: String,
        require: true,
        unique: true
    },
    title: {
        type: String,
        require: true
    },
    score: {
        type: String,
        require: true
    }

});



module.exports = mongoose.model("UserResult", userResultSchema);