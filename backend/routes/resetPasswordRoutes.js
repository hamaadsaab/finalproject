// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/resetPasswordController');



router.post('/', userController.resetPassword);

module.exports = router; 
