const User = require('../models/signupModel');
// const bcrypt = require('bcrypt');

// const signupUser = async (req, res) => {
//     const { name, email, password, confirmPassword } = req.body;

//     if (!name || !email || !password || !confirmPassword) {
//         return res.status(400).json({ message: 'All fields are required' });
//     }

//     if (password !== confirmPassword) {
//         return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     try {
//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({ message: 'Email already in use' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
//         const newUser = new User({ name, email, password: hashedPassword }); // Store hashed password
//         await newUser.save();

//         return res.status(201).json({ message: 'Signup successful' });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ message: 'Server error' });
//     }
// };
const signupUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const newUser = new User({ name, email, password }); // Store plain text password
        await newUser.save();

        console.log('New user created:', newUser);

        return res.status(201).json({ message: 'Signup successful' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { signupUser };
