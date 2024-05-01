const User = require("../model/User");

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) {
        return res.status(400).json({message: "No users found."})
    }
    res.json(users);
};

// Ignore this file