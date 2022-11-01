const userResultModel = require("../models/userResultModel");



// crate result
const createResult = async (req, res) => {
    const { result_Id, title, score } = req.body;

    try {
        const user = req.user;

        const userResult = await userResultModel.create({
            user_id: user,
            result_Id,
            title,
            score
        })
        res.status(200).json(userResult)

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


// all user result
const getAllResults = async (req, res) => {
    try {
        const userResult = await userResultModel.find({});
        res.status(200).json({
            userResult
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};





// get result
const getUserResult = async (req, res) => {
    const { id } = req.params;
    try {
        const userResult = await userResultModel.findById({ _id: id });

        if (!userResult) {
            return res.status(400).json({ error: "Not such a user result" });
        } else {
            res.status(200).json({
                userResult
            });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    createResult,
    getUserResult,
    getAllResults
};