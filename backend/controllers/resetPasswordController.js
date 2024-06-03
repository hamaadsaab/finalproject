const User = require('../models/signupModel');

exports.resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;
    console.log('Received request to reset password for:', email); // Log request details

    try {
        const user = await User.findOne({ email });

        if (!user) {
            console.log('User not found'); // Log user not found
            return res.status(404).json({ message: 'User not found' });
        }

        user.password = newPassword;

        await user.save();
        console.log('Password reset successfully'); // Log successful password reset
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error('Error resetting password:', error); // Log error details
        res.status(500).json({ message: 'Error resetting password', error });
    }
};
