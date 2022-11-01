const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userResultSchema = new Schema({
    user_id: {
        type: String
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
