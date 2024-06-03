// controllers/loginController.js

const User = require('../models/signupModel');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // User authenticated successfully
        return res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { loginUser };
