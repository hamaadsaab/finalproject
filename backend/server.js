const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes'); // Import feedback routes
const resetPasswordRoutes = require('./routes/resetPasswordRoutes');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'users',
})
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    });

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/signup', signupRoutes); // Signup routes
app.use('/api/login', loginRoutes);   // Login routes
app.use('/api/feedback', feedbackRoutes); // Feedback routes

app.use('/api/reset-password', resetPasswordRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
