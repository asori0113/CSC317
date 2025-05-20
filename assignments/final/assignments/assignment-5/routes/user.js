/**
 * User routes
 * Handles protected routes that require authentication
 */


const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth');

// Controller imports
const userController = require('../controllers/userController');

// All routes in this file require authentication
router.use(isAuthenticated);

// GET /user/profile - User profile page
router.get('/profile', userController.getProfile);

// GET /user/settings - User settings page
router.get('/settings', userController.getSettings);

// GET /user/settings - User home page
router.get('/home', userController.getHome);

// GET /user/settings - User home page
router.get('/home/search', userController.getHomeFiltered);

// GET /user/settings - User create page
router.get('/create', userController.getCreate);

// POST /user/settings - Update user settings
router.post('/settings', userController.updateSettings);

// GET /user/profile-image - Get current user's profile image
router.get('/profile-image', userController.getProfileImage);

// GET /user/profile-image/:userId - Get any user's profile image by ID
router.get('/profile-image/:userId', userController.getUserProfileImage);



module.exports = router;