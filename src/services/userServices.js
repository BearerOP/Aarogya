const User = require('../models/userModel.js');
const { generateUniqueUserID } = require("../../utlis/userIdGeneration.js");

const login = async (req, res) => {
    try {
        const { phone, password } = req.body;
        const user = await User.findOne({ phone, password });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        const token = generateUniqueUserID(user.firstname, user.lastname, user.dob, user.role);
        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const register = async (req, res) => {
    try {
        const { firstname, lastname, phone, password, dob, gender, role } = req.body;
        const user = await User.findOne({ phone });
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }
        const numberOfUsers = await User.countDocuments();
        const newUser = new User({
            user_id: generateUniqueUserID(firstname, lastname, numberOfUsers),
            firstname,
            lastname,
            phone,
            password,
            dob,
            gender,
            role,
        });
        await newUser.save();
        res.status(200).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const logout = async (req, res) => {
    try {
        const { token } = req.body;
        const user = await User.findOne({ token });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid token" });
        }
        await User.findOneAndDelete({ token });
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const profile = async (req, res) => {
    try {
        const { token } = req.body;
        const user = await User.findOne({ token });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid token" });
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    login,
    register,
    logout,     
    profile,
};
