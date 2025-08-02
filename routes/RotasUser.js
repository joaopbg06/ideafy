const express = require('express');
const router = express.Router();
const ControllerUser = require('../Controllers/ControllerUser');
const ControllerLogin = require('../Controllers/ControllerLogin');
const ControllerPosts = require('../Controllers/ControllerPosts');

router.get('/usuarios',ControllerUser.UserListar);
router.post('/usuarios',ControllerUser.UserAdicionar);
router.post('/login',ControllerLogin.VerificarLogin);
router.get('/posts',ControllerPosts.VerPosts);
router.post('/posts',ControllerPosts.AdicionarPost);

module.exports = router;