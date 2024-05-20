const express = require('express');
const router = express.Router();
const { register, login, googleAuth, googleCallback } = require('../controllers/userController');

// @route    POST api/users/register
// @desc     Register user
// @access   Public
router.post('/register', register);

// @route    POST api/users/login
// @desc     Authenticate user & get token
// @access   Public
router.post('/login', login);

// @route    GET api/users/oauth2/google
// @desc     Authenticate using Google OAuth2
// @access   Public
router.get('/oauth2/google', googleAuth);

// @route    GET api/users/oauth2/callback
// @desc     Google OAuth2 callback
// @access   Public
router.get('/oauth2/callback', googleCallback);

module.exports = router;




