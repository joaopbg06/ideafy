const express = require('express');
const router = express.Router();
const ControllerUser = require('../Controllers/ControllerUser');
const ControllerLogin = require('../Controllers/ControllerLogin');
const ControllerPosts = require('../Controllers/ControllerPosts');

// users
router.get('/users',ControllerUser.ListUser);
router.post('/users',ControllerUser.AddUser);

// login
router.post('/login',ControllerLogin.CheckLogin);

// Posts
router.get('/posts',ControllerPosts.ViewPosts);
router.post('/posts',ControllerPosts.AddPost);

module.exports = router;